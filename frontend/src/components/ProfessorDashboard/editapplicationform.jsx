import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { ArrowLeft, Plus, Save } from 'lucide-react';
import { Alert, AlertDescription } from "../ui/alert";
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const EditApplicationForm = ({ jobId, onClose }) => {
  const [title, setTitle] = useState('');
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const studentProperties = ['gender', 'department', 'cgpa', 'name', 'email', 'course', 'batch', 'active_backlogs', 'backlogs_history', 'rollno', 'cgpa %', 'category'];

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.REACT_APP_BASE_URL}/api/form-templates/${jobId}`,
          { withCredentials: true }
        );
        const data = response.data;
        setTitle(data.title);
        setFields(data.fields || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [jobId]);

  const handleFieldChange = (index, key, value) => {
    setFields(fields.map((field, i) => 
      i === index ? { ...field, [key]: value } : field
    ));
  };

  const handleOptionChange = (index, optionIndex, value) => {
    setFields(fields.map((field, i) => 
      i === index 
        ? {
            ...field,
            options: field.options.map((opt, j) => 
              j === optionIndex ? value : opt
            )
          }
        : field
    ));
  };

  const handleCheckboxChange = (index, key) => {
    setFields(fields.map((field, i) => 
      i === index ? { ...field, [key]: !field[key] } : field
    ));
  };

  const addOption = (index) => {
    setFields(fields.map((field, i) => 
      i === index 
        ? { ...field, options: [...(field.options || []), ''] }
        : field
    ));
  };

  const removeOption = (index, optionIndex) => {
    setFields(fields.map((field, i) => 
      i === index 
        ? {
            ...field,
            options: field.options.filter((_, j) => j !== optionIndex)
          }
        : field
    ));
  };

  const addField = () => {
    setFields([
      ...fields,
      {
        fieldName: '',
        fieldType: 'text',
        isRequired: false,
        isAutoFill: false,
        fieldStar: false,
        studentPropertyPath: '',
        options: []
      }
    ]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    // Check if any autofill field doesn't have student property selected
    const hasInvalidAutofill = fields.some(
      field => field.isAutoFill && !field.studentPropertyPath
    );

    if (hasInvalidAutofill) {
      toast.error('Please select a student property for all auto-fill fields');
      return false;
    }

    return true;
  };

  const saveForm = async () => {
    try {
      // First validate the form
      if (!validateForm()) {
        return;
      }

      // Show confirmation dialog
      const result = await Swal.fire({
        title: 'Confirm Changes',
        text: 'Please make sure that necessary field has been marked autofill?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, save changes',
        cancelButtonText: 'No, cancel',
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#d33'
      });

      if (!result.isConfirmed) {
        return;
      }

      const response = await axios.put(
        `${import.meta.env.REACT_APP_BASE_URL}/api/form-templates/${jobId}`,
        { title, fields },
        { withCredentials: true }
      );
      
      toast.success('Form template updated successfully!');
      onClose();
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Failed to update form template');
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Card className="-mt-12 max-w-5xl mx-auto bg-white shadow-xl">
      <CardHeader>
        <div className="mt-0 ml-1">
          <button className="flex items-center text-blue-600 hover:text-blue-800" onClick={onClose}>
            <FaArrowLeft className="mr-2" />
          </button>
        </div>
        <CardTitle className="text-2xl font-bold text-center">
          Edit Application Form Template
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label htmlFor="title">Form Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter form title"
            className="w-full"
            required
          />
        </div>

        {fields.map((field, index) => (
          <Card key={index} className="p-4 space-y-4 border border-gray-400" >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Field {index + 1}</h3>
              <Button
                variant="destructive"
                className='text-red-500'
                size="sm"
                onClick={() => removeField(index)}
              >
                Remove
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Field Name</Label>
                <Input
                  value={field.fieldName}
                  onChange={(e) => handleFieldChange(index, 'fieldName', e.target.value)}
                  placeholder="Enter field name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Field Type</Label>
                <Select
                  value={field.fieldType}
                  onValueChange={(value) => handleFieldChange(index, 'fieldType', value)}
                  options={[
                    { value: "text", label: "Text" },
                    { value: "number", label: "Number" },
                    { value: "email", label: "Email" },
                    { value: "date", label: "Date" },
                    { value: "select", label: "Select" },
                  ]}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`required-${index}`}
                  checked={field.isRequired}
                  onChange={() => handleCheckboxChange(index, 'isRequired')}
                />
                <Label htmlFor={`required-${index}`}>Required</Label>

                <Checkbox
                  id={`autofill-${index}`}
                  checked={field.isAutoFill}
                  onChange={() => handleCheckboxChange(index, 'isAutoFill')}
                />
                <Label htmlFor={`autofill-${index}`}>Auto-Fill</Label>

                <Checkbox
                  id={`star-${index}`}
                  checked={field.fieldStar}
                  onChange={() => handleCheckboxChange(index, 'fieldStar')}
                />
                <Label htmlFor={`star-${index}`}>Star</Label>
              </div>
            </div>

            {field.isAutoFill && (
              <div className="space-y-2">
                <Label>Student Property</Label>
                <Select
                  value={field.studentPropertyPath || ''}
                  onValueChange={(value) => 
                    handleFieldChange(index, 'studentPropertyPath', value)
                  }
                  options={[
                    { value: '', label: 'Select a property', disabled: true },
                    ...studentProperties.map((property) => ({
                      value: property,
                      label: property,
                    }))
                  ]}
                  required={field.isAutoFill}
                />
              </div>
            )}

            {field.fieldType === 'select' && (
              <div className="space-y-4">
                <Label>Options</Label>
                {field.options?.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center space-x-4">
                    <Input
                      value={option}
                      onChange={(e) => 
                        handleOptionChange(index, optionIndex, e.target.value)
                      }
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeOption(index, optionIndex)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addOption(index)}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Option
                </Button>
              </div>
            )}
          </Card>
        ))}

        <div className="flex flex-col space-y-4">
          <Button
            type="button"
            variant="outline"
            onClick={addField}
            className="w-full bg-custom-blue text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Field
          </Button>

          <Button
            onClick={saveForm}
            className="w-full bg-green-500 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EditApplicationForm;