// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { FaArrowLeft } from "react-icons/fa";
// import { AlertCircle, GripVertical, X, Edit2 } from "lucide-react";
// import CompanySearchDropdown from "../RecruiterDashboard/CompanySearchDropdown.jsx";
// import ReactQuill from "react-quill"; // Import React Quill
// import "react-quill/dist/quill.snow.css"; // Import Quill styles

// const btechdepartmentOptions = [
//   {
//     label: "BIO TECHNOLOGY",
//     options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }],
//   },
//   {
//     label: "CHEMICAL ENGINEERING",
//     options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }],
//   },
//   {
//     label: "CIVIL ENGINEERING",
//     options: [{ value: "CIVIL ENGINEERING", label: "CIVIL ENGINEERING" }],
//   },
//   {
//     label: "COMPUTER SCIENCE AND ENGINEERING",
//     options: [
//       {
//         value: "COMPUTER SCIENCE AND ENGINEERING",
//         label: "COMPUTER SCIENCE AND ENGINEERING",
//       },
//       {
//         value: "DATA SCIENCE AND ENGINEERING",
//         label: "DATA SCIENCE AND ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "ELECTRICAL ENGINEERING",
//     options: [
//       { value: "ELECTRICAL ENGINEERING", label: "ELECTRICAL ENGINEERING" },
//     ],
//   },
//   {
//     label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//     options: [
//       {
//         value: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//         label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//       },
//       {
//         value: "ELECTRONICS AND VLSI ENGINEERING",
//         label: "ELECTRONICS AND VLSI ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//     options: [
//       {
//         value: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//         label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "INFORMATION TECHNOLOGY",
//     options: [
//       { value: "INFORMATION TECHNOLOGY", label: "INFORMATION TECHNOLOGY" },
//     ],
//   },
//   {
//     label: "INSTRUMENTATION AND CONTROL ENGINEERING",
//     options: [
//       {
//         value: "INSTRUMENTATION AND CONTROL ENGINEERING",
//         label: "INSTRUMENTATION AND CONTROL ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "MATHEMATICS AND COMPUTING",
//     options: [
//       {
//         value: "MATHEMATICS AND COMPUTING",
//         label: "MATHEMATICS AND COMPUTING",
//       },
//     ],
//   },
//   {
//     label: "MECHANICAL ENGINEERING",
//     options: [
//       { value: "MECHANICAL ENGINEERING", label: "MECHANICAL ENGINEERING" },
//     ],
//   },
//   {
//     label: "TEXTILE TECHNOLOGY",
//     options: [{ value: "TEXTILE TECHNOLOGY", label: "TEXTILE TECHNOLOGY" }],
//   },
// ];

// const mtechdepartmentOptions = [
//   {
//     label: "BIO TECHNOLOGY",
//     options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }],
//   },
//   {
//     label: "CHEMICAL ENGINEERING",
//     options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }],
//   },
//   {
//     label: "CIVIL ENGINEERING",
//     options: [
//       {
//         value: "STRUCTURAL AND CONSTRUCTION ENGINEERING",
//         label: "STRUCTURAL AND CONSTRUCTION ENGINEERING",
//       },
//       {
//         value: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING",
//         label: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "COMPUTER SCIENCE AND ENGINEERING",
//     options: [
//       {
//         value: "COMPUTER SCIENCE AND ENGINEERING",
//         label: "COMPUTER SCIENCE AND ENGINEERING",
//       },
//       { value: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)", label: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)" },
//       {
//         value: "DATA SCIENCE AND ENGINEERING",
//         label: "DATA SCIENCE AND ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "ELECTRICAL ENGINEERING",
//     options: [
//       { value: "ELECTRIC VEHICLE DESIGN", label: "ELECTRIC VEHICLE DESIGN" },
//     ],
//   },
//   {
//     label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//     options: [
//       {
//         value: "SIGNAL PROCESSING AND MACHINE LEARNING",
//         label: "SIGNAL PROCESSING AND MACHINE LEARNING",
//       },
//       { value: "VLSI DESIGN", label: "VLSI DESIGN" },
//     ],
//   },
//   {
//     label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//     options: [
//       {
//         value: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS",
//         label: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS",
//       }
//     ],
//   },
//   {
//     label: "INFORMATION TECHNOLOGY",
//     options: [{ value: "DATA ANALYTICS", label: "DATA ANALYTICS" }],
//   },
//   {
//     label: "CONTROL AND INSTRUMENTATION ENGINEERING",
//     options: [
//       {
//         value: "CONTROL AND INSTRUMENTATION ENGINEERING",
//         label: "CONTROL AND INSTRUMENTATION ENGINEERING",
//       },
//       {
//         value: "MACHINE INTELLIGENCE AND AUTOMATION",
//         label: "MACHINE INTELLIGENCE AND AUTOMATION",
//       },
//     ],
//   },
//   {
//     label: "MATHEMATICS AND COMPUTING",
//     options: [
//       {
//         value: "MATHEMATICS AND COMPUTING",
//         label: "MATHEMATICS AND COMPUTING",
//       },
//     ],
//   },
//   {
//     label: "MECHANICAL ENGINEERING",
//     options: [
//       { value: "DESIGN ENGINEERING", label: "DESIGN ENGINEERING" },
//       {
//         value: "THERMAL AND ENERGY ENGINEERING",
//         label: "THERMAL AND ENERGY ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "TEXTILE TECHNOLOGY",
//     options: [
//       {
//         value: "TEXTILE TECHNOLOGY",
//         label: "TEXTILE TECHNOLOGY",
//       },
//       {
//         value: "TEXTILE ENGINEERING AND MANAGEMENT",
//         label: "TEXTILE ENGINEERING AND MANAGEMENT",
//       },
//     ],
//   },
//   {
//     label: "RENEWABLE ENERGY",
//     options: [{ value: "RENEWABLE ENERGY", label: "RENEWABLE ENERGY" }],
//   },
//   {
//     label: "ARTIFICIAL INTELLIGENCE",
//     options: [
//       { value: "ARTIFICIAL INTELLIGENCE", label: "ARTIFICIAL INTELLIGENCE" },
//     ],
//   },
//   {
//     label: "POWER SYSTEMS AND RELIABILITY",
//     options: [
//       {
//         value: "POWER SYSTEMS AND RELIABILITY",
//         label: "POWER SYSTEMS AND RELIABILITY",
//       },
//     ],
//   },
// ];

// const mbadepartmentOptions = [
//   {value:"HUMANITIES AND MANAGEMENT", label:"HUMANITIES AND MANAGEMENT"},
//   // { value: "Finance", label: "Finance" },
//   // { value: "Human Resource", label: "Human Resource" },
//   // { value: "Marketing", label: "Marketing" },
// ];

// const mscdepartmentOptions = [
//   { value: "CHEMISTRY", label: "CHEMISTRY" },
//   { value: "MATHEMATICS", label: "MATHEMATICS" },
//   { value: "PHYSICS", label: "PHYSICS" },
// ];

// const phddepartmentOptions = [
//   // { value: "Biotechnology", label: "Biotechnology" },
//   // { value: "Chemical Engineering", label: "Chemical Engineering" },
//   // { value: "Civil Engineering", label: "Civil Engineering" },
//   // {
//   //   value: "Computer Science and Engineering",
//   //   label: "Computer Science and Engineering",
//   // },
//   // { value: "Electrical Engineering", label: "Electrical Engineering" },
//   // {
//   //   value: "Electronics and Communication Engineering",
//   //   label: "Electronics and Communication Engineering",
//   // },
//   // {
//   //   value: "Industrial and Production Engineering",
//   //   label: "Industrial and Production Engineering",
//   // },
//   // { value: "Information Technology", label: "Information Technology" },
//   // {
//   //   value: "Instrumentation and Control Engineering",
//   //   label: "Instrumentation and Control Engineering",
//   // },
//   // { value: "Mechanical Engineering", label: "Mechanical Engineering" },
//   // { value: "Textile Technology", label: "Textile Technology" },
// ];

// const jobTypeOptions = [
//   { value: "", label: "Select Job Type" },
//   { value: "2m Intern", label: "2-Month Internship" },
//   { value: "6m Intern", label: "6-Month Internship" },
//   { value: "Intern+PPO", label: "Intern + Pre Placement Offer(PPO)" },
//   { value: "Intern+FTE", label: "Intern + Full-Time Employment(FTE)" },
//   { value: "FTE", label: "Full-Time Employment(FTE)" },
// ];

// const jobCategoryOptions = [
//   { value: "", label: "Select Job Category" },
//   { value: "Tech", label: "Tech" },
//   { value: "Non-Tech", label: "Non-Tech" },
//   { value: "Tech+Non-Tech", label: "Tech + Non-Tech" },
// ];

// const workflowStepOptions = [
//   { value: "", label: "Select Round Type" },
//   { value: "Resume Shortlisting", label: "Resume Shortlisting" },
//   { value: "OA", label: "Online Assessment" },
//   { value: "Interview", label: "Interview" },
//   { value: "GD", label: "Group Discussion" },
//   { value: "Others", label: "Others" },
// ];

// // Configure React Quill toolbar
// const quillModules = {
//   toolbar: [
//     [{ header: [1, 2, 3, false] }],
//     ["bold", "italic", "underline", "strike"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["link"],
//     ["clean"],
//   ],
// };

// const quillFormats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "list",
//   "bullet",
//   "link",
// ];

// const CreateJob = ({ onJobCreated, onCancel }) => {
//   const [formData, setFormData] = useState({
//     job_id: "",
//     company_name: "",
//     company_logo: "",
//     job_role: "",
//     jobdescription: "",
//     joblocation: "",
//     job_type: "",
//     job_category: "",
//     ctc: "",
//     base_salary: "",
//     deadline: "",
//     Hiring_Workflow: [],
//     department_allowed: [],
//     gender_allowed: "",
//     eligible_batch: "",
//     course_allowed: "",
//     minimum_cgpa: 0.0,
//     active_backlogs: false,
//     history_backlogs: false,
//   });

//   const [workflowStep, setWorkflowStep] = useState({
//     step_type: "",
//     details: {},
//   });

//   const [editingIndex, setEditingIndex] = useState(null);
//   const [draggedIndex, setDraggedIndex] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/`,
//           { withCredentials: true }
//         );

//         if (Array.isArray(response.data)) {
//           setCompanies(response.data);
//         } else {
//           console.error("Unexpected response format:", response.data);
//           setCompanies([]);
//         }
//       } catch (error) {
//         console.error("Error fetching companies:", error);
//         setCompanies([]);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//       ...(name === "course_allowed" && {}),
//     });
//   };

//   // Handle React Quill changes for job description
//   const handleQuillChange = (value) => {
//     setFormData({
//       ...formData,
//       jobdescription: value,
//     });
//   };

//   const handleSelectChange = (field, selectedOption) => {
//     setFormData({
//       ...formData,
//       [field]: selectedOption.value,
//     });
//   };

//   const handleWorkflowStepChange = (selectedOption) => {
//     setWorkflowStep({
//       step_type: selectedOption.value,
//       details: {},
//     });
//   };

//   const handleStepDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setWorkflowStep((prev) => ({
//       ...prev,
//       details: {
//         ...prev.details,
//         [name]: value,
//       },
//     }));
//   };

//   const handleDepartmentChange = (selectedOptions) => {
//     setFormData((prev) => ({
//       ...prev,
//       department_allowed: selectedOptions.map((option) => option.value),
//     }));
//   };

//   const addWorkflowStep = () => {
//     if (!workflowStep.step_type) {
//       toast.error("Please select a round type first!");
//       return;
//     }

//     if (editingIndex !== null) {
//       const updatedWorkflow = [...formData.Hiring_Workflow];
//       updatedWorkflow[editingIndex] = workflowStep;
//       setFormData((prev) => ({
//         ...prev,
//         Hiring_Workflow: updatedWorkflow,
//       }));
//       setEditingIndex(null);
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         Hiring_Workflow: [...prev.Hiring_Workflow, workflowStep],
//       }));
//     }

//     setWorkflowStep({
//       step_type: "",
//       details: {},
//     });
//   };

//   const removeWorkflowStep = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       Hiring_Workflow: prev.Hiring_Workflow.filter((_, i) => i !== index),
//     }));
//   };

//   const editWorkflowStep = (index) => {
//     setWorkflowStep(formData.Hiring_Workflow[index]);
//     setEditingIndex(index);
//   };

//   const handleDragStart = (index) => {
//     setDraggedIndex(index);
//   };

//   const handleDragOver = (e, index) => {
//     e.preventDefault();
//     if (draggedIndex === null || draggedIndex === index) return;

//     const newWorkflow = [...formData.Hiring_Workflow];
//     const draggedItem = newWorkflow[draggedIndex];
//     newWorkflow.splice(draggedIndex, 1);
//     newWorkflow.splice(index, 0, draggedItem);

//     setFormData((prev) => ({
//       ...prev,
//       Hiring_Workflow: newWorkflow,
//     }));
//     setDraggedIndex(index);
//   };

//   const handleDragEnd = () => {
//     setDraggedIndex(null);
//   };

//   const getWorkflowStepContent = (step) => {
//     switch (step.step_type) {
//       case "OA":
//         return (
//           <div className="text-sm">
//             <p>Date: {step.details.oa_date}</p>
//             <p>Login Time: {step.details.oa_login_time}</p>
//             <p>Duration: {step.details.oa_duration}</p>
//           </div>
//         );
//       case "Interview":
//         return (
//           <div className="text-sm">
//             <p>Type: {step.details.interview_type}</p>
//             <p>Date: {step.details.interview_date}</p>
//             <p>Time: {step.details.interview_time}</p>
//           </div>
//         );
//       case "GD":
//         return (
//           <div className="text-sm">
//             <p>Date: {step.details.gd_date}</p>
//             <p>Time: {step.details.gd_time}</p>
//           </div>
//         );
//       case "Others":
//         return (
//           <div className="text-sm">
//             <p>Date: {step.details.others_date}</p>
//             <p>Time: {step.details.others_time}</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return;
//     setIsSubmitting(true);
//     try {
//       const response = await axios.post(
//         `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/createjobcopy`,
//         formData,
//         {
//           withCredentials: true,
//         }
//       );
//       toast.success("Job created successfully!");
//       onJobCreated(response.data.data);
//       onCancel();
//     } catch (error) {
//       toast.error("Error creating job application.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <button
//         className="text-gray-500 mx-4 rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//         onClick={onCancel}
//       >
//         <FaArrowLeft />
//       </button>
//       <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-2xl mt-10 transform transition-all duration-300 hover:shadow-3xl">
//         <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8">
//           Create Job Application
//         </h1>
//         <form onSubmit={handleSubmit}>
//           {/* Basic Job Details */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job ID
//               </label>
//               <input
//                 type="text"
//                 name="job_id"
//                 value={formData.job_id}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Company Name<span className="text-red-500"> *</span>
//               </label>
//               <CompanySearchDropdown
//                 companies={companies}
//                 value={formData.company_name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Role<span className="text-red-500"> *</span>
//               </label>
//               <input
//                 required
//                 type="text"
//                 name="job_role"
//                 value={formData.job_role}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div className="md:col-span-2 lg:col-span-3">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Description
//               </label>
//               <ReactQuill
//                 value={formData.jobdescription}
//                 onChange={handleQuillChange}
//                 modules={quillModules}
//                 formats={quillFormats}
//                 className="border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 theme="snow"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Location
//               </label>
//               <input
//                 type="text"
//                 name="joblocation"
//                 value={formData.joblocation}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Type<span className="text-red-500"> *</span>
//               </label>
//               <Select
//                 required
//                 options={jobTypeOptions}
//                 onChange={(option) => handleSelectChange("job_type", option)}
//                 defaultValue={jobTypeOptions.find(
//                   (option) => option.value === formData.job_type
//                 )}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Category<span className="text-red-500"> *</span>
//               </label>
//               <Select
//                 required
//                 options={jobCategoryOptions}
//                 onChange={(option) => handleSelectChange("job_category", option)}
//                 defaultValue={jobCategoryOptions.find(
//                   (option) => option.value === formData.job_category
//                 )}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 CTC
//               </label>
//               <input
//                 type="number"
//                 name="ctc"
//                 value={formData.ctc}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Stipend
//               </label>
//               <input
//                 type="number"
//                 name="stipend"
//                 value={formData.stipend}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Base Salary
//                 <span className="text-red-500 text-sm"> (in Lakhs)</span>
//               </label>
//               <input
//                 type="text"
//                 name="base_salary"
//                 value={formData.base_salary}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Application Deadline<span className="text-red-500"> *</span>
//               </label>
//               <input
//                 required
//                 type="date"
//                 name="deadline"
//                 value={formData.deadline}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//           </div>

//           {/* Eligibility Criteria */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold text-blue-600 mb-6">
//               Eligibility Criteria
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Course Allowed<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   required
//                   name="course_allowed"
//                   value={formData.course_allowed}
//                   onChange={handleChange}
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 >
//                   <option value="">Select Course</option>
//                   <option value="B.Tech">B.Tech</option>
//                   <option value="M.Tech">M.Tech</option>
//                   <option value="MBA">MBA</option>
//                   <option value="M.Sc.">M.Sc.</option>
//                   <option value="PHD">PHD</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Departments Allowed<span className="text-red-500"> *</span>
//                 </label>
//                 <Select
//                   required
//                   options={
//                     formData.course_allowed === "B.Tech"
//                       ? btechdepartmentOptions
//                       : formData.course_allowed === "M.Tech"
//                       ? mtechdepartmentOptions
//                       : formData.course_allowed === "MBA"
//                       ? mbadepartmentOptions
//                       : formData.course_allowed === "M.Sc."
//                       ? mscdepartmentOptions
//                       : formData.course_allowed === "PHD"
//                       ? phddepartmentOptions
//                       : []
//                   }
//                   isMulti
//                   onChange={handleDepartmentChange}
//                   isDisabled={!formData.course_allowed}
//                   className="w-full border-2 p-1.5 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 {!formData.course_allowed && (
//                   <p className="text-red-500 text-sm mt-2">
//                     Please choose a course first.
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Gender Allowed<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   required
//                   name="gender_allowed"
//                   value={formData.gender_allowed}
//                   onChange={handleChange}
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                   <option value="Any">All</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Batch Allowed<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   required
//                   name="eligible_batch"
//                   value={formData.eligible_batch}
//                   onChange={handleChange}
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 >
//                   <option value="">Select Batch</option>
//                   <option value="2025">2025</option>
//                   <option value="2026">2026</option>
//                   <option value="2027">2027</option>
//                   <option value="2028">2028</option>
//                   <option value="2029">2029</option>
//                   <option value="2030">2030</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Minimum CGPA
//                 </label>
//                 <input
//                   type="number"
//                   name="minimum_cgpa"
//                   value={formData.minimum_cgpa}
//                   onChange={handleChange}
//                   min="0"
//                   max="10"
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//               </div>
//               <div className="flex items-center">
//                 <label className="block text-gray-700 font-semibold mb-2 mr-2">
//                   Active Backlogs Allowed
//                 </label>
//                 <input
//                   type="checkbox"
//                   name="active_backlogs"
//                   checked={formData.active_backlogs}
//                   onChange={handleChange}
//                   className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition-all duration-300"
//                 />
//               </div>
//               <div className="flex items-center">
//                 <label className="block text-gray-700 font-semibold mb-2 mr-2">
//                   Backlogs History Allowed
//                 </label>
//                 <input
//                   type="checkbox"
//                   name="history_backlogs"
//                   checked={formData.history_backlogs}
//                   onChange={handleChange}
//                   className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition-all duration-300"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Hiring Workflow */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold text-blue-600 mb-6">
//               Hiring Workflow{" "}
//               <span className="text-red-500 text-sm">
//                 (You can reorder rounds by dragging. And please ensure your
//                 hiringflow rounds is in below sequence as it can not be change
//                 later)
//               </span>
//             </h2>

//             {/* Workflow Step Selection */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Round Type
//               </label>
//               <Select
//                 options={workflowStepOptions}
//                 onChange={handleWorkflowStepChange}
//                 value={workflowStepOptions.find(
//                   (option) => option.value === workflowStep.step_type
//                 )}
//                 className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>

//             {/* Dynamic Step Details Form */}
//             {workflowStep.step_type === "Resume Shortlisting" && <></>}

//             {workflowStep.step_type === "OA" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//                 <input
//                   type="date"
//                   name="oa_date"
//                   placeholder="OA Date"
//                   value={workflowStep.details.oa_date || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <input
//                   type="string"
//                   name="oa_login_time"
//                   placeholder="Login Time"
//                   value={workflowStep.details.oa_login_time || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <input
//                   type="string"
//                   name="oa_duration"
//                   placeholder="OA Duration"
//                   value={workflowStep.details.oa_duration || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <textarea
//                   name="oa_info"
//                   placeholder="OA Info"
//                   value={workflowStep.details.oa_info || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//               </div>
//             )}

//             {workflowStep.step_type === "Interview" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//                 <div>
//                   <select
//                     name="interview_type"
//                     value={workflowStep.details.interview_type || ""}
//                     onChange={handleStepDetailsChange}
//                     className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   >
//                     <option value="">Select Interview Type</option>
//                     <option value="Technical Interview 1">
//                       Technical Interview 1
//                     </option>
//                     <option value="Technical Interview 2">
//                       Technical Interview 2
//                     </option>
//                     <option value="Technical Interview 3">
//                       Technical Interview 3
//                     </option>
//                     <option value="HR Interview 1">HR Interview 1</option>
//                     <option value="HR Interview 2">HR Interview 2</option>
//                     <option value="HR Interview 3">HR Interview 3</option>
//                   </select>
//                 </div>
//                 <input
//                   type="date"
//                   name="interview_date"
//                   placeholder="Interview Date"
//                   value={workflowStep.details.interview_date || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <input
//                   type="time"
//                   name="interview_time"
//                   placeholder="Interview Time"
//                   value={workflowStep.details.interview_time || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <textarea
//                   name="interview_info"
//                   placeholder="Interview Info"
//                   value={workflowStep.details.interview_info || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//               </div>
//             )}

//             {workflowStep.step_type === "GD" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//                 <input
//                   type="date"
//                   name="gd_date"
//                   placeholder="GD Date"
//                   value={workflowStep.details.gd_date || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <input
//                   type="string"
//                   name="gd_time"
//                   placeholder="GD Time"
//                   value={workflowStep.details.gd_time || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <textarea
//                   name="gd_info"
//                   placeholder="GD Info"
//                   value={workflowStep.details.gd_info || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//               </div>
//             )}

//             {workflowStep.step_type === "Others" && (
//               <>
//                 <input
//                   type="string"
//                   name="others_round_name"
//                   placeholder="Name of Round"
//                   value={workflowStep.details.others_round_name}
//                   onChange={handleStepDetailsChange}
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 mt-4"
//                 />

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//                   <input
//                     type="date"
//                     name="others_date"
//                     placeholder="Round Date"
//                     value={workflowStep.details.others_date || ""}
//                     onChange={handleStepDetailsChange}
//                     className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   />
//                   <input
//                     type="string"
//                     name="others_login_time"
//                     placeholder="Login Time"
//                     value={workflowStep.details.others_login_time || ""}
//                     onChange={handleStepDetailsChange}
//                     className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   />
//                   <input
//                     type="string"
//                     name="others_duration"
//                     placeholder="Round Duration"
//                     value={workflowStep.details.others_duration || ""}
//                     onChange={handleStepDetailsChange}
//                     className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   />
//                   <textarea
//                     name="others_info"
//                     placeholder="Round Info"
//                     value={workflowStep.details.others_info || ""}
//                     onChange={handleStepDetailsChange}
//                     className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   />
//                 </div>
//               </>
//             )}

//             {/* Add/Update Workflow Step Button */}
//             <button
//               type="button"
//               onClick={addWorkflowStep}
//               className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
//             >
//               {editingIndex !== null ? "Update" : "Add"} Workflow Step
//             </button>

//             {/* Workflow Steps Display */}
//             <div className="mt-6 space-y-4">
//               {formData.Hiring_Workflow.map((step, index) => (
//                 <div
//                   key={index}
//                   draggable
//                   onDragStart={() => handleDragStart(index)}
//                   onDragOver={(e) => handleDragOver(e, index)}
//                   onDragEnd={handleDragEnd}
//                   className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center gap-4"
//                 >
//                   <div className="cursor-move">
//                     <GripVertical className="text-gray-400" />
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="font-semibold text-blue-600">
//                       Round {index + 1}:{" "}
//                       {
//                         workflowStepOptions.find(
//                           (opt) => opt.value === step.step_type
//                         )?.label
//                       }
//                     </h3>
//                     {getWorkflowStepContent(step)}
//                   </div>

//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={() => editWorkflowStep(index)}
//                       className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
//                     >
//                       <Edit2 size={20} />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => removeWorkflowStep(index)}
//                       className="p-2 text-red-600 hover:bg-red-50 rounded-full"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="mt-10 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-lg rounded-2xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Creating Job..." : "Create Job"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateJob;



// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { FaArrowLeft } from "react-icons/fa";
// import { AlertCircle, GripVertical, X, Edit2 } from "lucide-react";
// import CompanySearchDropdown from "../RecruiterDashboard/CompanySearchDropdown.jsx";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// // [Existing departmentOptions, jobTypeOptions, jobCategoryOptions, workflowStepOptions, quillModules, quillFormats remain unchanged]
// const btechdepartmentOptions = [
//   {
//     label: "BIO TECHNOLOGY",
//     options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }],
//   },
//   {
//     label: "CHEMICAL ENGINEERING",
//     options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }],
//   },
//   {
//     label: "CIVIL ENGINEERING",
//     options: [{ value: "CIVIL ENGINEERING", label: "CIVIL ENGINEERING" }],
//   },
//   {
//     label: "COMPUTER SCIENCE AND ENGINEERING",
//     options: [
//       {
//         value: "COMPUTER SCIENCE AND ENGINEERING",
//         label: "COMPUTER SCIENCE AND ENGINEERING",
//       },
//       {
//         value: "DATA SCIENCE AND ENGINEERING",
//         label: "DATA SCIENCE AND ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "ELECTRICAL ENGINEERING",
//     options: [
//       { value: "ELECTRICAL ENGINEERING", label: "ELECTRICAL ENGINEERING" },
//     ],
//   },
//   {
//     label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//     options: [
//       {
//         value: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//         label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//       },
//       {
//         value: "ELECTRONICS AND VLSI ENGINEERING",
//         label: "ELECTRONICS AND VLSI ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//     options: [
//       {
//         value: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//         label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "INFORMATION TECHNOLOGY",
//     options: [
//       { value: "INFORMATION TECHNOLOGY", label: "INFORMATION TECHNOLOGY" },
//     ],
//   },
//   {
//     label: "INSTRUMENTATION AND CONTROL ENGINEERING",
//     options: [
//       {
//         value: "INSTRUMENTATION AND CONTROL ENGINEERING",
//         label: "INSTRUMENTATION AND CONTROL ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "MATHEMATICS AND COMPUTING",
//     options: [
//       {
//         value: "MATHEMATICS AND COMPUTING",
//         label: "MATHEMATICS AND COMPUTING",
//       },
//     ],
//   },
//   {
//     label: "MECHANICAL ENGINEERING",
//     options: [
//       { value: "MECHANICAL ENGINEERING", label: "MECHANICAL ENGINEERING" },
//     ],
//   },
//   {
//     label: "TEXTILE TECHNOLOGY",
//     options: [{ value: "TEXTILE TECHNOLOGY", label: "TEXTILE TECHNOLOGY" }],
//   },
// ];

// const mtechdepartmentOptions = [
//   {
//     label: "BIO TECHNOLOGY",
//     options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }],
//   },
//   {
//     label: "CHEMICAL ENGINEERING",
//     options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }],
//   },
//   {
//     label: "CIVIL ENGINEERING",
//     options: [
//       {
//         value: "STRUCTURAL AND CONSTRUCTION ENGINEERING",
//         label: "STRUCTURAL AND CONSTRUCTION ENGINEERING",
//       },
//       {
//         value: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING",
//         label: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "COMPUTER SCIENCE AND ENGINEERING",
//     options: [
//       {
//         value: "COMPUTER SCIENCE AND ENGINEERING",
//         label: "COMPUTER SCIENCE AND ENGINEERING",
//       },
//       { value: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)", label: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)" },
//       {
//         value: "DATA SCIENCE AND ENGINEERING",
//         label: "DATA SCIENCE AND ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "ELECTRICAL ENGINEERING",
//     options: [
//       { value: "ELECTRIC VEHICLE DESIGN", label: "ELECTRIC VEHICLE DESIGN" },
//     ],
//   },
//   {
//     label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//     options: [
//       {
//         value: "SIGNAL PROCESSING AND MACHINE LEARNING",
//         label: "SIGNAL PROCESSING AND MACHINE LEARNING",
//       },
//       { value: "VLSI DESIGN", label: "VLSI DESIGN" },
//     ],
//   },
//   {
//     label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//     options: [
//       {
//         value: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS",
//         label: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS",
//       }
//     ],
//   },
//   {
//     label: "INFORMATION TECHNOLOGY",
//     options: [{ value: "DATA ANALYTICS", label: "DATA ANALYTICS" }],
//   },
//   {
//     label: "CONTROL AND INSTRUMENTATION ENGINEERING",
//     options: [
//       {
//         value: "CONTROL AND INSTRUMENTATION ENGINEERING",
//         label: "CONTROL AND INSTRUMENTATION ENGINEERING",
//       },
//       {
//         value: "MACHINE INTELLIGENCE AND AUTOMATION",
//         label: "MACHINE INTELLIGENCE AND AUTOMATION",
//       },
//     ],
//   },
//   {
//     label: "MATHEMATICS AND COMPUTING",
//     options: [
//       {
//         value: "MATHEMATICS AND COMPUTING",
//         label: "MATHEMATICS AND COMPUTING",
//       },
//     ],
//   },
//   {
//     label: "MECHANICAL ENGINEERING",
//     options: [
//       { value: "DESIGN ENGINEERING", label: "DESIGN ENGINEERING" },
//       {
//         value: "THERMAL AND ENERGY ENGINEERING",
//         label: "THERMAL AND ENERGY ENGINEERING",
//       },
//     ],
//   },
//   {
//     label: "TEXTILE TECHNOLOGY",
//     options: [
//       {
//         value: "TEXTILE TECHNOLOGY",
//         label: "TEXTILE TECHNOLOGY",
//       },
//       {
//         value: "TEXTILE ENGINEERING AND MANAGEMENT",
//         label: "TEXTILE ENGINEERING AND MANAGEMENT",
//       },
//     ],
//   },
//   {
//     label: "RENEWABLE ENERGY",
//     options: [{ value: "RENEWABLE ENERGY", label: "RENEWABLE ENERGY" }],
//   },
//   {
//     label: "ARTIFICIAL INTELLIGENCE",
//     options: [
//       { value: "ARTIFICIAL INTELLIGENCE", label: "ARTIFICIAL INTELLIGENCE" },
//     ],
//   },
//   {
//     label: "POWER SYSTEMS AND RELIABILITY",
//     options: [
//       {
//         value: "POWER SYSTEMS AND RELIABILITY",
//         label: "POWER SYSTEMS AND RELIABILITY",
//       },
//     ],
//   },
// ];

// const mbadepartmentOptions = [
//   {value:"HUMANITIES AND MANAGEMENT", label:"HUMANITIES AND MANAGEMENT"},
// ];

// const mscdepartmentOptions = [
//   { value: "CHEMISTRY", label: "CHEMISTRY" },
//   { value: "MATHEMATICS", label: "MATHEMATICS" },
//   { value: "PHYSICS", label: "PHYSICS" },
// ];

// const phddepartmentOptions = [

// ];

// const jobTypeOptions = [
//   { value: "2m Intern", label: "2-Month Internship" },
//   { value: "6m Intern", label: "6-Month Internship" },
//   { value: "Intern+PPO", label: "Intern + Pre Placement Offer(PPO)" },
//   { value: "Intern+FTE", label: "Intern + Full-Time Employment(FTE)" },
//   { value: "FTE", label: "Full-Time Employment(FTE)" },
// ];

// const jobCategoryOptions = [
//   { value: "Tech", label: "Tech" },
//   { value: "Non-Tech", label: "Non-Tech" },
//   { value: "Tech+Non-Tech", label: "Tech + Non-Tech" },
// ];

// const workflowStepOptions = [
//   { value: "Resume Shortlisting", label: "Resume Shortlisting" },
//   { value: "OA", label: "Online Assessment" },
//   { value: "Interview", label: "Interview" },
//   { value: "GD", label: "Group Discussion" },
//   { value: "Others", label: "Others" },
// ];

// // Configure React Quill toolbar
// const quillModules = {
//   toolbar: [
//     [{ header: [1, 2, 3, false] }],
//     ["bold", "italic", "underline", "strike"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["link"],
//     ["clean"],
//   ],
// };

// const quillFormats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "list",
//   "bullet",
//   "link",
// ];

// const CreateJob = ({ onJobCreated, onCancel }) => {
//   const [formData, setFormData] = useState({
//     job_id: "",
//     company_name: "",
//     company_logo: "",
//     job_role: "",
//     jobdescription: "",
//     joblocation: "",
//     job_type: "", // Default to a valid value
//     job_category: "", // Default to a valid value
//     ctc: 0,
//     base_salary: "",
//     deadline: "",
//     Hiring_Workflow: [],
//     eligibility_criteria: [],
//   });

//   const [workflowStep, setWorkflowStep] = useState({
//     step_type: "",
//     details: {},
//   });

//   const [currentEligibility, setCurrentEligibility] = useState({
//     course_allowed: "",
//     department_allowed: [],
//     gender_allowed: "",
//     eligible_batch: "",
//     minimum_cgpa: 0.0,
//     active_backlogs: false,
//     history_backlogs: false,
//   });

//   const [editingIndex, setEditingIndex] = useState(null); // For workflow steps
//   const [editingEligibilityIndex, setEditingEligibilityIndex] = useState(null); // For eligibility criteria
//   const [draggedIndex, setDraggedIndex] = useState(null); // For workflow drag-and-drop
//   const [draggedEligibilityIndex, setDraggedEligibilityIndex] = useState(null); // For eligibility drag-and-drop
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/`,
//           { withCredentials: true }
//         );
//         if (Array.isArray(response.data)) {
//           setCompanies(response.data);
//         } else {
//           console.error("Unexpected response format:", response.data);
//           setCompanies([]);
//         }
//       } catch (error) {
//         console.error("Error fetching companies:", error);
//         setCompanies([]);
//       }
//     };
//     fetchCompanies();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleQuillChange = (value) => {
//     setFormData({
//       ...formData,
//       jobdescription: value,
//     });
//   };

//   const handleSelectChange = (field, selectedOption) => {
//     setFormData({
//       ...formData,
//       [field]: selectedOption ? selectedOption.value : "",
//     });
//   };

//   const handleEligibilityChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setCurrentEligibility({
//       ...currentEligibility,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleEligibilityDepartmentChange = (selectedOptions) => {
//     setCurrentEligibility({
//       ...currentEligibility,
//       department_allowed: selectedOptions ? selectedOptions.map((option) => option.value) : [],
//     });
//   };

//   const handleWorkflowStepChange = (selectedOption) => {
//     setWorkflowStep({
//       step_type: selectedOption ? selectedOption.value : "",
//       details: {},
//     });
//   };

//   const handleStepDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setWorkflowStep((prev) => ({
//       ...prev,
//       details: {
//         ...prev.details,
//         [name]: value,
//       },
//     }));
//   };

//   const addWorkflowStep = () => {
//     if (!workflowStep.step_type) {
//       toast.error("Please select a round type first!");
//       return;
//     }
//     if (editingIndex !== null) {
//       const updatedWorkflow = [...formData.Hiring_Workflow];
//       updatedWorkflow[editingIndex] = workflowStep;
//       setFormData((prev) => ({
//         ...prev,
//         Hiring_Workflow: updatedWorkflow,
//       }));
//       setEditingIndex(null);
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         Hiring_Workflow: [...prev.Hiring_Workflow, workflowStep],
//       }));
//     }
//     setWorkflowStep({
//       step_type: "",
//       details: {},
//     });
//   };

//   const removeWorkflowStep = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       Hiring_Workflow: prev.Hiring_Workflow.filter((_, i) => i !== index),
//     }));
//   };

//   const editWorkflowStep = (index) => {
//     setWorkflowStep(formData.Hiring_Workflow[index]);
//     setEditingIndex(index);
//   };

//   const addEligibilityCriteria = () => {
//     if (
//       !currentEligibility.course_allowed ||
//       !currentEligibility.gender_allowed ||
//       !currentEligibility.eligible_batch ||
//       currentEligibility.department_allowed.length === 0
//     ) {
//       toast.error("Please fill all required eligibility fields!");
//       return;
//     }

//     if (editingEligibilityIndex !== null) {
//       const updatedCriteria = [...formData.eligibility_criteria];
//       updatedCriteria[editingEligibilityIndex] = currentEligibility;
//       setFormData((prev) => ({
//         ...prev,
//         eligibility_criteria: updatedCriteria,
//       }));
//       setEditingEligibilityIndex(null);
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         eligibility_criteria: [...prev.eligibility_criteria, currentEligibility],
//       }));
//     }

//     setCurrentEligibility({
//       course_allowed: "",
//       department_allowed: [],
//       gender_allowed: "",
//       eligible_batch: "",
//       minimum_cgpa: 0.0,
//       active_backlogs: false,
//       history_backlogs: false,
//     });
//   };

//   const removeEligibilityCriteria = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       eligibility_criteria: prev.eligibility_criteria.filter((_, i) => i !== index),
//     }));
//   };

//   const editEligibilityCriteria = (index) => {
//     setCurrentEligibility(formData.eligibility_criteria[index]);
//     setEditingEligibilityIndex(index);
//   };

//   const handleDragStart = (index) => {
//     setDraggedIndex(index);
//   };

//   const handleDragOver = (e, index) => {
//     e.preventDefault();
//     if (draggedIndex === null || draggedIndex === index) return;
//     const newWorkflow = [...formData.Hiring_Workflow];
//     const draggedItem = newWorkflow[draggedIndex];
//     newWorkflow.splice(draggedIndex, 1);
//     newWorkflow.splice(index, 0, draggedItem);
//     setFormData((prev) => ({
//       ...prev,
//       Hiring_Workflow: newWorkflow,
//     }));
//     setDraggedIndex(index);
//   };

//   const handleDragEnd = () => {
//     setDraggedIndex(null);
//   };

//   const handleEligibilityDragStart = (index) => {
//     setDraggedEligibilityIndex(index);
//   };

//   const handleEligibilityDragOver = (e, index) => {
//     e.preventDefault();
//     if (draggedEligibilityIndex === null || draggedEligibilityIndex === index) return;
//     const newCriteria = [...formData.eligibility_criteria];
//     const draggedItem = newCriteria[draggedEligibilityIndex];
//     newCriteria.splice(draggedEligibilityIndex, 1);
//     newCriteria.splice(index, 0, draggedItem);
//     setFormData((prev) => ({
//       ...prev,
//       eligibility_criteria: newCriteria,
//     }));
//     setDraggedEligibilityIndex(index);
//   };

//   const handleEligibilityDragEnd = () => {
//     setDraggedEligibilityIndex(null);
//   };

//   const getWorkflowStepContent = (step) => {
//     switch (step.step_type) {
//       case "OA":
//         return (
//           <div className="text-sm">
//             <p>Date: {step.details.oa_date || "N/A"}</p>
//             <p>Login Time: {step.details.oa_login_time || "N/A"}</p>
//             <p>Duration: {step.details.oa_duration || "N/A"}</p>
//             <p>Info: {step.details.oa_info || "N/A"}</p>
//           </div>
//         );
//       case "Interview":
//         return (
//           <div className="text-sm">
//             <p>Type: {step.details.interview_type || "N/A"}</p>
//             <p>Date: {step.details.interview_date || "N/A"}</p>
//             <p>Time: {step.details.interview_time || "N/A"}</p>
//             <p>Info: {step.details.interview_info || "N/A"}</p>
//           </div>
//         );
//       case "GD":
//         return (
//           <div className="text-sm">
//             <p>Date: {step.details.gd_date || "N/A"}</p>
//             <p>Time: {step.details.gd_time || "N/A"}</p>
//             <p>Info: {step.details.gd_info || "N/A"}</p>
//           </div>
//         );
//       case "Others":
//         return (
//           <div className="text-sm">
//             <p>Round Name: {step.details.others_round_name || "N/A"}</p>
//             <p>Date: {step.details.others_date || "N/A"}</p>
//             <p>Time: {step.details.others_login_time || "N/A"}</p>
//             <p>Duration: {step.details.others_duration || "N/A"}</p>
//             <p>Info: {step.details.others_info || "N/A"}</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     // Validate required fields
//     const errors = [];
//     if (!formData.company_name) errors.push("Company Name is required");
//     if (!formData.job_role) errors.push("Job Role is required");
//     if (!formData.job_type) errors.push("Job Type is required");
//     if (!formData.job_category) errors.push("Job Category is required");
//     if (!formData.ctc || formData.ctc <= 0) errors.push("CTC must be a positive number");
//     if (!formData.deadline) errors.push("Application Deadline is required");
//     if (formData.eligibility_criteria.length === 0) {
//       errors.push("At least one eligibility criteria set is required");
//     }

//     if (errors.length > 0) {
//       errors.forEach((error) => toast.error(error));
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const response = await axios.post(
//         `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/createjobcopy`,
//         {
//           ...formData,
//           ctc: Number(formData.ctc), // Ensure ctc is a number
//         },
//         { withCredentials: true }
//       );
//       toast.success("Job created successfully!");
//       onJobCreated(response.data.data);
//       onCancel();
//     } catch (error) {
//       const errorMessage = error.response?.data?.error || "Error creating job application.";
//       toast.error(errorMessage);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <button
//         className="text-gray-500 mx-4 rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//         onClick={onCancel}
//       >
//         <FaArrowLeft />
//       </button>
//       <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-2xl mt-10 transform transition-all duration-300 hover:shadow-3xl">
//         <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8">
//           Create Job Application
//         </h1>
//         <form onSubmit={handleSubmit}>
//           {/* Basic Job Details */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job ID
//               </label>
//               <input
//                 type="text"
//                 name="job_id"
//                 value={formData.job_id}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Company Name<span className="text-red-500"> *</span>
//               </label>
//               <CompanySearchDropdown
//                 companies={companies}
//                 value={formData.company_name}
//                 onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Role<span className="text-red-500"> *</span>
//               </label>
//               <input
//                 required
//                 type="text"
//                 name="job_role"
//                 value={formData.job_role}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div className="md:col-span-2 lg:col-span-3">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Description
//               </label>
//               <ReactQuill
//                 value={formData.jobdescription}
//                 onChange={handleQuillChange}
//                 modules={quillModules}
//                 formats={quillFormats}
//                 className="border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 theme="snow"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Location
//               </label>
//               <input
//                 type="text"
//                 name="joblocation"
//                 value={formData.joblocation}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Type<span className="text-red-500"> *</span>
//               </label>
//               <Select
//                 required
//                 options={jobTypeOptions}
//                 onChange={(option) => handleSelectChange("job_type", option)}
//                 value={jobTypeOptions.find((option) => option.value === formData.job_type)}
//                 className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Job Category<span className="text-red-500"> *</span>
//               </label>
//               <Select
//                 required
//                 options={jobCategoryOptions}
//                 onChange={(option) => handleSelectChange("job_category", option)}
//                 value={jobCategoryOptions.find((option) => option.value === formData.job_category)}
//                 className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 CTC<span className="text-red-500"> *</span>
//               </label>
//               <input
//                 required
//                 type="number"
//                 name="ctc"
//                 value={formData.ctc}
//                 onChange={handleChange}
//                 min="0"
//                 step="0.1"
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Base Salary
//                 <span className="text-red-500 text-sm"> (in Lakhs)</span>
//               </label>
//               <input
//                 type="text"
//                 name="base_salary"
//                 value={formData.base_salary}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Application Deadline<span className="text-red-500"> *</span>
//               </label>
//               <input
//                 required
//                 type="date"
//                 name="deadline"
//                 value={formData.deadline}
//                 onChange={handleChange}
//                 className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>
//           </div>

//           {/* Eligibility Criteria */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold text-blue-600 mb-6">
//               Eligibility Criteria
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Course Allowed<span className="text-red-500"> *</span>
//                 </label>
//                 <select
                
//                   name="course_allowed"
//                   value={currentEligibility.course_allowed}
//                   onChange={handleEligibilityChange}
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 >
//                   <option value="">Select Course</option>
//                   <option value="B.Tech">B.Tech</option>
//                   <option value="M.Tech">M.Tech</option>
//                   <option value="MBA">MBA</option>
//                   <option value="M.Sc.">M.Sc.</option>
//                   <option value="PHD">PHD</option>
//                 </select>
//               </div>
//               <div>
//   <label className="block text-gray-700 font-semibold mb-2">
//     Departments Allowed<span className="text-red-500"> *</span>
//   </label>
//   <Select
//     options={
//       currentEligibility.course_allowed === "B.Tech"
//         ? btechdepartmentOptions
//         : currentEligibility.course_allowed === "M.Tech"
//         ? mtechdepartmentOptions
//         : currentEligibility.course_allowed === "MBA"
//         ? mbadepartmentOptions
//         : currentEligibility.course_allowed === "M.Sc."
//         ? mscdepartmentOptions
//         : currentEligibility.course_allowed === "PHD"
//         ? phddepartmentOptions
//         : []
//     }
//     isMulti
//     onChange={handleEligibilityDepartmentChange}
//     value={
//       // Get the options array based on the selected course
//       (
//         currentEligibility.course_allowed === "B.Tech"
//           ? btechdepartmentOptions
//           : currentEligibility.course_allowed === "M.Tech"
//           ? mtechdepartmentOptions
//           : currentEligibility.course_allowed === "MBA"
//           ? mbadepartmentOptions
//           : currentEligibility.course_allowed === "M.Sc."
//           ? mscdepartmentOptions
//           : currentEligibility.course_allowed === "PHD"
//           ? phddepartmentOptions
//           : []
//       )
//         .flatMap((group) => group.options || [group])
//         .filter((option) =>
//           currentEligibility.department_allowed.includes(option.value)
//         )
//     }
//     isDisabled={!currentEligibility.course_allowed}
//     className="w-full border-2 p-1.5 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//   />
//   {!currentEligibility.course_allowed && (
//     <p className="text-red-500 text-sm mt-2">
//       Please choose a course first.
//     </p>
//   )}
// </div>
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Gender Allowed<span className="text-red-500"> *</span>
//                 </label>
//                 <select
                 
//                   name="gender_allowed"
//                   value={currentEligibility.gender_allowed}
//                   onChange={handleEligibilityChange}
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                   <option value="Any">All</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Batch Allowed<span className="text-red-500"> *</span>
//                 </label>
//                 <select
                
//                   name="eligible_batch"
//                   value={currentEligibility.eligible_batch}
//                   onChange={handleEligibilityChange}
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 >
//                   <option value="">Select Batch</option>
//                   <option value="2025">2025</option>
//                   <option value="2026">2026</option>
//                   <option value="2027">2027</option>
//                   <option value="2028">2028</option>
//                   <option value="2029">2029</option>
//                   <option value="2030">2030</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Minimum CGPA
//                 </label>
//                 <input
//                   type="number"
//                   name="minimum_cgpa"
//                   value={currentEligibility.minimum_cgpa}
//                   onChange={handleEligibilityChange}
//                   min="0"
//                   max="10"
//                   step="0.1"
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//               </div>
//               <div className="flex items-center">
//                 <label className="block text-gray-700 font-semibold mb-2 mr-2">
//                   Active Backlogs Allowed
//                 </label>
//                 <input
//                   type="checkbox"
//                   name="active_backlogs"
//                   checked={currentEligibility.active_backlogs}
//                   onChange={handleEligibilityChange}
//                   className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition-all duration-300"
//                 />
//               </div>
//               <div className="flex items-center">
//                 <label className="block text-gray-700 font-semibold mb-2 mr-2">
//                   Backlogs History Allowed
//                 </label>
//                 <input
//                   type="checkbox"
//                   name="history_backlogs"
//                   checked={currentEligibility.history_backlogs}
//                   onChange={handleEligibilityChange}
//                   className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition-all duration-300"
//                 />
//               </div>
//             </div>

//             {/* Add/Update Eligibility Criteria Button */}
//             <button
//               type="button"
//               onClick={addEligibilityCriteria}
//               className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
//             >
//               {editingEligibilityIndex !== null
//                 ? "Update Eligibility Criteria"
//                 : "Add Eligibility Criteria"}
//             </button>

//             {/* Eligibility Criteria Display */}
//             <div className="mt-6 space-y-4">
//               {formData.eligibility_criteria.map((criteria, index) => (
//                 <div
//                   key={index}
//                   draggable
//                   onDragStart={() => handleEligibilityDragStart(index)}
//                   onDragOver={(e) => handleEligibilityDragOver(e, index)}
//                   onDragEnd={handleEligibilityDragEnd}
//                   className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center gap-4"
//                 >
//                   <div className="cursor-move">
//                     <GripVertical className="text-gray-400" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-blue-600">
//                       Eligibility Set {index + 1}
//                     </h3>
//                     <div className="text-sm">
//                       <p>Course: {criteria.course_allowed}</p>
//                       <p>Departments: {criteria.department_allowed.join(", ")}</p>
//                       <p>Gender: {criteria.gender_allowed}</p>
//                       <p>Batch: {criteria.eligible_batch}</p>
//                       <p>Minimum CGPA: {criteria.minimum_cgpa}</p>
//                       <p>
//                         Active Backlogs Allowed: {criteria.active_backlogs ? "Yes" : "No"}
//                       </p>
//                       <p>
//                         History Backlogs Allowed: {criteria.history_backlogs ? "Yes" : "No"}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={() => editEligibilityCriteria(index)}
//                       className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
//                     >
//                       <Edit2 size={20} />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => removeEligibilityCriteria(index)}
//                       className="p-2 text-red-600 hover:bg-red-50 rounded-full"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Hiring Workflow */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold text-blue-600 mb-6">
//               Hiring Workflow{" "}
//               <span className="text-red-500 text-sm">
//                 (You can reorder rounds by dragging. And please ensure your
//                 hiringflow rounds are in the below sequence as it cannot be
//                 changed later)
//               </span>
//             </h2>

//             {/* Workflow Step Selection */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Round Type
//               </label>
//               <Select
//                 options={workflowStepOptions}
//                 onChange={handleWorkflowStepChange}
//                 value={workflowStepOptions.find(
//                   (option) => option.value === workflowStep.step_type
//                 )}
//                 className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//               />
//             </div>

//             {/* Dynamic Step Details Form */}
//             {workflowStep.step_type === "Resume Shortlisting" && <></>}

//             {workflowStep.step_type === "OA" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//                 <input
//                   type="date"
//                   name="oa_date"
//                   placeholder="OA Date"
//                   value={workflowStep.details.oa_date || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <input
//                   type="text"
//                   name="oa_login_time"
//                   placeholder="Login Time"
//                   value={workflowStep.details.oa_login_time || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <input
//                   type="text"
//                   name="oa_duration"
//                   placeholder="OA Duration"
//                   value={workflowStep.details.oa_duration || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <textarea
//                   name="oa_info"
//                   placeholder="OA Info"
//                   value={workflowStep.details.oa_info || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//               </div>
//             )}

//             {workflowStep.step_type === "Interview" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//                 <div>
//                   <select
//                     name="interview_type"
//                     value={workflowStep.details.interview_type || ""}
//                     onChange={handleStepDetailsChange}
//                     className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   >
//                     <option value="">Select Interview Type</option>
//                     <option value="Technical Interview 1">Technical Interview 1</option>
//                     <option value="Technical Interview 2">Technical Interview 2</option>
//                     <option value="Technical Interview 3">Technical Interview 3</option>
//                     <option value="HR Interview 1">HR Interview 1</option>
//                     <option value="HR Interview 2">HR Interview 2</option>
//                     <option value="HR Interview 3">HR Interview 3</option>
//                   </select>
//                 </div>
//                 <input
//                   type="date"
//                   name="interview_date"
//                   placeholder="Interview Date"
//                   value={workflowStep.details.interview_date || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <input
//                   type="time"
//                   name="interview_time"
//                   placeholder="Interview Time"
//                   value={workflowStep.details.interview_time || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <textarea
//                   name="interview_info"
//                   placeholder="Interview Info"
//                   value={workflowStep.details.interview_info || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//               </div>
//             )}

//             {workflowStep.step_type === "GD" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//                 <input
//                   type="date"
//                   name="gd_date"
//                   placeholder="GD Date"
//                   value={workflowStep.details.gd_date || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <input
//                   type="text"
//                   name="gd_time"
//                   placeholder="GD Time"
//                   value={workflowStep.details.gd_time || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//                 <textarea
//                   name="gd_info"
//                   placeholder="GD Info"
//                   value={workflowStep.details.gd_info || ""}
//                   onChange={handleStepDetailsChange}
//                   className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                 />
//               </div>
//             )}

//             {workflowStep.step_type === "Others" && (
//               <>
//                 <input
//                   type="text"
//                   name="others_round_name"
//                   placeholder="Name of Round"
//                   value={workflowStep.details.others_round_name || ""}
//                   onChange={handleStepDetailsChange}
//                   className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 mt-4"
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//                   <input
//                     type="date"
//                     name="others_date"
//                     placeholder="Round Date"
//                     value={workflowStep.details.others_date || ""}
//                     onChange={handleStepDetailsChange}
//                     className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   />
//                   <input
//                     type="text"
//                     name="others_login_time"
//                     placeholder="Login Time"
//                     value={workflowStep.details.others_login_time || ""}
//                     onChange={handleStepDetailsChange}
//                     className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   />
//                   <input
//                     type="text"
//                     name="others_duration"
//                     placeholder="Round Duration"
//                     value={workflowStep.details.others_duration || ""}
//                     onChange={handleStepDetailsChange}
//                     className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   />
//                   <textarea
//                     name="others_info"
//                     placeholder="Round Info"
//                     value={workflowStep.details.others_info || ""}
//                     onChange={handleStepDetailsChange}
//                     className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                   />
//                 </div>
//               </>
//             )}

//             {/* Add/Update Workflow Step Button */}
//             <button
//               type="button"
//               onClick={addWorkflowStep}
//               className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
//             >
//               {editingIndex !== null ? "Update" : "Add"} Workflow Step
//             </button>

//             {/* Workflow Steps Display */}
//             <div className="mt-6 space-y-4">
//               {formData.Hiring_Workflow.map((step, index) => (
//                 <div
//                   key={index}
//                   draggable
//                   onDragStart={() => handleDragStart(index)}
//                   onDragOver={(e) => handleDragOver(e, index)}
//                   onDragEnd={handleDragEnd}
//                   className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center gap-4"
//                 >
//                   <div className="cursor-move">
//                     <GripVertical className="text-gray-400" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-blue-600">
//                       Round {index + 1}:{" "}
//                       {workflowStepOptions.find((opt) => opt.value === step.step_type)?.label || step.step_type}
//                     </h3>
//                     {getWorkflowStepContent(step)}
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={() => editWorkflowStep(index)}
//                       className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
//                     >
//                       <Edit2 size={20} />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => removeWorkflowStep(index)}
//                       className="p-2 text-red-600 hover:bg-red-50 rounded-full"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="mt-10 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-lg rounded-2xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Creating Job..." : "Create Job"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateJob;

import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { AlertCircle, GripVertical, X, Edit2 } from "lucide-react";
import CompanySearchDropdown from "../RecruiterDashboard/CompanySearchDropdown.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const btechdepartmentOptions = [
  {
    label: "BIO TECHNOLOGY",
    options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }],
  },
  {
    label: "CHEMICAL ENGINEERING",
    options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }],
  },
  {
    label: "CIVIL ENGINEERING",
    options: [{ value: "CIVIL ENGINEERING", label: "CIVIL ENGINEERING" }],
  },
  {
    label: "COMPUTER SCIENCE AND ENGINEERING",
    options: [
      {
        value: "COMPUTER SCIENCE AND ENGINEERING",
        label: "COMPUTER SCIENCE AND ENGINEERING",
      },
      {
        value: "DATA SCIENCE AND ENGINEERING",
        label: "DATA SCIENCE AND ENGINEERING",
      },
    ],
  },
  {
    label: "ELECTRICAL ENGINEERING",
    options: [
      { value: "ELECTRICAL ENGINEERING", label: "ELECTRICAL ENGINEERING" },
    ],
  },
  {
    label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    options: [
      {
        value: "ELECTRONICS AND COMMUNICATION ENGINEERING",
        label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
      },
      {
        value: "ELECTRONICS AND VLSI ENGINEERING",
        label: "ELECTRONICS AND VLSI ENGINEERING",
      },
    ],
  },
  {
    label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
    options: [
      {
        value: "INDUSTRIAL AND PRODUCTION ENGINEERING",
        label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
      },
    ],
  },
  {
    label: "INFORMATION TECHNOLOGY",
    options: [
      { value: "INFORMATION TECHNOLOGY", label: "INFORMATION TECHNOLOGY" },
    ],
  },
  {
    label: "INSTRUMENTATION AND CONTROL ENGINEERING",
    options: [
      {
        value: "INSTRUMENTATION AND CONTROL ENGINEERING",
        label: "INSTRUMENTATION AND CONTROL ENGINEERING",
      },
    ],
  },
  {
    label: "MATHEMATICS AND COMPUTING",
    options: [
      {
        value: "MATHEMATICS AND COMPUTING",
        label: "MATHEMATICS AND COMPUTING",
      },
    ],
  },
  {
    label: "MECHANICAL ENGINEERING",
    options: [
      { value: "MECHANICAL ENGINEERING", label: "MECHANICAL ENGINEERING" },
    ],
  },
  {
    label: "TEXTILE TECHNOLOGY",
    options: [{ value: "TEXTILE TECHNOLOGY", label: "TEXTILE TECHNOLOGY" }],
  },
];

const mtechdepartmentOptions = [
  {
    label: "BIO TECHNOLOGY",
    options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }],
  },
  {
    label: "CHEMICAL ENGINEERING",
    options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }],
  },
  {
    label: "CIVIL ENGINEERING",
    options: [
      {
        value: "STRUCTURAL AND CONSTRUCTION ENGINEERING",
        label: "STRUCTURAL AND CONSTRUCTION ENGINEERING",
      },
      {
        value: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING",
        label: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING",
      },
    ],
  },
  {
    label: "COMPUTER SCIENCE AND ENGINEERING",
    options: [
      {
        value: "COMPUTER SCIENCE AND ENGINEERING",
        label: "COMPUTER SCIENCE AND ENGINEERING",
      },
      {
        value: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)",
        label: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)",
      },
      {
        value: "DATA SCIENCE AND ENGINEERING",
        label: "DATA SCIENCE AND ENGINEERING",
      },
    ],
  },
  {
    label: "ELECTRICAL ENGINEERING",
    options: [
      { value: "ELECTRIC VEHICLE DESIGN", label: "ELECTRIC VEHICLE DESIGN" },
    ],
  },
  {
    label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    options: [
      {
        value: "SIGNAL PROCESSING AND MACHINE LEARNING",
        label: "SIGNAL PROCESSING AND MACHINE LEARNING",
      },
      { value: "VLSI DESIGN", label: "VLSI DESIGN" },
    ],
  },
  {
    label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
    options: [
      {
        value: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS",
        label: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS",
      },
    ],
  },
  {
    label: "INFORMATION TECHNOLOGY",
    options: [{ value: "DATA ANALYTICS", label: "DATA ANALYTICS" }],
  },
  {
    label: "CONTROL AND INSTRUMENTATION ENGINEERING",
    options: [
      {
        value: "CONTROL AND INSTRUMENTATION ENGINEERING",
        label: "CONTROL AND INSTRUMENTATION ENGINEERING",
      },
      {
        value: "MACHINE INTELLIGENCE AND AUTOMATION",
        label: "MACHINE INTELLIGENCE AND AUTOMATION",
      },
    ],
  },
  {
    label: "MATHEMATICS AND COMPUTING",
    options: [
      {
        value: "MATHEMATICS AND COMPUTING",
        label: "MATHEMATICS AND COMPUTING",
      },
    ],
  },
  {
    label: "MECHANICAL ENGINEERING",
    options: [
      { value: "DESIGN ENGINEERING", label: "DESIGN ENGINEERING" },
      {
        value: "THERMAL AND ENERGY ENGINEERING",
        label: "THERMAL AND ENERGY ENGINEERING",
      },
    ],
  },
  {
    label: "TEXTILE TECHNOLOGY",
    options: [
      {
        value: "TEXTILE TECHNOLOGY",
        label: "TEXTILE TECHNOLOGY",
      },
      {
        value: "TEXTILE ENGINEERING AND MANAGEMENT",
        label: "TEXTILE ENGINEERING AND MANAGEMENT",
      },
    ],
  },
  {
    label: "RENEWABLE ENERGY",
    options: [{ value: "RENEWABLE ENERGY", label: "RENEWABLE ENERGY" }],
  },
  {
    label: "ARTIFICIAL INTELLIGENCE",
    options: [
      { value: "ARTIFICIAL INTELLIGENCE", label: "ARTIFICIAL INTELLIGENCE" },
    ],
  },
  {
    label: "POWER SYSTEMS AND RELIABILITY",
    options: [
      {
        value: "POWER SYSTEMS AND RELIABILITY",
        label: "POWER SYSTEMS AND RELIABILITY",
      },
    ],
  },
];

const mbadepartmentOptions = [
  { value: "HUMANITIES AND MANAGEMENT", label: "HUMANITIES AND MANAGEMENT" },
];

const mscdepartmentOptions = [
  { value: "CHEMISTRY", label: "CHEMISTRY" },
  { value: "MATHEMATICS", label: "MATHEMATICS" },
  { value: "PHYSICS", label: "PHYSICS" },
];

const phddepartmentOptions = [];

const jobTypeOptions = [
  { value: "Intern", label: "Intern" },
  { value: "Intern+PPO", label: "Intern + Pre Placement Offer(PPO)" },
  { value: "Intern+FTE", label: "Intern + Full-Time Employment(FTE)" },
  { value: "FTE", label: "Full-Time Employment(FTE)" },
];

const internshipDurationOptions = [
  { value: "2m Intern", label: "2-Month Internship" },
  { value: "6m Intern", label: "6-Month Internship" },
  { value: "11m Intern", label: "11-Month Internship" },
];

const jobCategoryOptions = [
  { value: "Tech", label: "Tech" },
  { value: "Non-Tech", label: "Non-Tech" },
  { value: "Tech+Non-Tech", label: "Tech + Non-Tech" },
];

const jobSectorOptions = [
  { value: "Private", label: "Private" },
  { value: "PSU", label: "PSU" },
];

const workflowStepOptions = [
  { value: "Resume Shortlisting", label: "Resume Shortlisting" },
  { value: "OA", label: "Online Assessment" },
  { value: "Interview", label: "Interview" },
  { value: "GD", label: "Group Discussion" },
  { value: "Others", label: "Others" },
];

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
];

const CreateJob = ({ onJobCreated, onCancel }) => {
  const [formData, setFormData] = useState({
    job_id: "",
    company_name: "",
    company_logo: "",
    job_role: "",
    jobdescription: "",
    joblocation: "",
    job_type: "",
    internship_duration: "",
    job_category: "",
    job_sector: "Private",
    ctc: 0,
    base_salary: "",
    stipend: "",
    deadline: "",
    Hiring_Workflow: [],
    eligibility_criteria: [],
  });

  const [workflowStep, setWorkflowStep] = useState({
    step_type: "",
    details: {},
  });

  const [currentEligibility, setCurrentEligibility] = useState({
    course_allowed: "",
    department_allowed: [],
    gender_allowed: "",
    eligible_batch: "",
    minimum_cgpa: 0.0,
    active_backlogs: false,
    history_backlogs: false,
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingEligibilityIndex, setEditingEligibilityIndex] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [draggedEligibilityIndex, setDraggedEligibilityIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/`,
          { withCredentials: true }
        );
        if (Array.isArray(response.data)) {
          setCompanies(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setCompanies([]);
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
        setCompanies([]);
      }
    };
    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      jobdescription: value,
    });
  };

  const handleSelectChange = (field, selectedOption) => {
    setFormData({
      ...formData,
      [field]: selectedOption ? selectedOption.value : "",
      ...(field === "job_type" && selectedOption && selectedOption.value === "FTE"
        ? { internship_duration: "N/A", stipend: "0" }
        : field === "job_type" && selectedOption && ["Intern", "Intern+PPO", "Intern+FTE"].includes(selectedOption.value)
        ? { internship_duration: "", stipend: "" }
        : {}),
    });
  };

  const handleEligibilityChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentEligibility({
      ...currentEligibility,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEligibilityDepartmentChange = (selectedOptions) => {
    setCurrentEligibility({
      ...currentEligibility,
      department_allowed: selectedOptions ? selectedOptions.map((option) => option.value) : [],
    });
  };

  const handleWorkflowStepChange = (selectedOption) => {
    setWorkflowStep({
      step_type: selectedOption ? selectedOption.value : "",
      details: {},
    });
  };

  const handleStepDetailsChange = (e) => {
    const { name, value } = e.target;
    setWorkflowStep((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        [name]: value,
      },
    }));
  };

  const addWorkflowStep = () => {
    if (!workflowStep.step_type) {
      toast.error("Please select a round type first!");
      return;
    }
    if (editingIndex !== null) {
      const updatedWorkflow = [...formData.Hiring_Workflow];
      updatedWorkflow[editingIndex] = workflowStep;
      setFormData((prev) => ({
        ...prev,
        Hiring_Workflow: updatedWorkflow,
      }));
      setEditingIndex(null);
    } else {
      setFormData((prev) => ({
        ...prev,
        Hiring_Workflow: [...prev.Hiring_Workflow, workflowStep],
      }));
    }
    setWorkflowStep({
      step_type: "",
      details: {},
    });
  };

  const removeWorkflowStep = (index) => {
    setFormData((prev) => ({
      ...prev,
      Hiring_Workflow: prev.Hiring_Workflow.filter((_, i) => i !== index),
    }));
  };

  const editWorkflowStep = (index) => {
    setWorkflowStep(formData.Hiring_Workflow[index]);
    setEditingIndex(index);
  };

  const addEligibilityCriteria = () => {
    if (
      !currentEligibility.course_allowed ||
      !currentEligibility.gender_allowed ||
      !currentEligibility.eligible_batch ||
      currentEligibility.department_allowed.length === 0
    ) {
      toast.error("Please fill all required eligibility fields!");
      return;
    }

    if (editingEligibilityIndex !== null) {
      const updatedCriteria = [...formData.eligibility_criteria];
      updatedCriteria[editingEligibilityIndex] = currentEligibility;
      setFormData((prev) => ({
        ...prev,
        eligibility_criteria: updatedCriteria,
      }));
      setEditingEligibilityIndex(null);
    } else {
      setFormData((prev) => ({
        ...prev,
        eligibility_criteria: [...prev.eligibility_criteria, currentEligibility],
      }));
    }

    setCurrentEligibility({
      course_allowed: "",
      department_allowed: [],
      gender_allowed: "",
      eligible_batch: "",
      minimum_cgpa: 0.0,
      active_backlogs: false,
      history_backlogs: false,
    });
  };

  const removeEligibilityCriteria = (index) => {
    setFormData((prev) => ({
      ...prev,
      eligibility_criteria: prev.eligibility_criteria.filter((_, i) => i !== index),
    }));
  };

  const editEligibilityCriteria = (index) => {
    setCurrentEligibility(formData.eligibility_criteria[index]);
    setEditingEligibilityIndex(index);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    const newWorkflow = [...formData.Hiring_Workflow];
    const draggedItem = newWorkflow[draggedIndex];
    newWorkflow.splice(draggedIndex, 1);
    newWorkflow.splice(index, 0, draggedItem);
    setFormData((prev) => ({
      ...prev,
      Hiring_Workflow: newWorkflow,
    }));
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleEligibilityDragStart = (index) => {
    setDraggedEligibilityIndex(index);
  };

  const handleEligibilityDragOver = (e, index) => {
    e.preventDefault();
    if (draggedEligibilityIndex === null || draggedEligibilityIndex === index) return;
    const newCriteria = [...formData.eligibility_criteria];
    const draggedItem = newCriteria[draggedEligibilityIndex];
    newCriteria.splice(draggedEligibilityIndex, 1);
    newCriteria.splice(index, 0, draggedItem);
    setFormData((prev) => ({
      ...prev,
      eligibility_criteria: newCriteria,
    }));
    setDraggedEligibilityIndex(index);
  };

  const handleEligibilityDragEnd = () => {
    setDraggedEligibilityIndex(null);
  };

  const getWorkflowStepContent = (step) => {
    switch (step.step_type) {
      case "OA":
        return (
          <div className="text-sm">
            <p>Date: {step.details.oa_date || "N/A"}</p>
            <p>Login Time: {step.details.oa_login_time || "N/A"}</p>
            <p>Duration: {step.details.oa_duration || "N/A"}</p>
            <p>Info: {step.details.oa_info || "N/A"}</p>
          </div>
        );
      case "Interview":
        return (
          <div className="text-sm">
            <p>Type: {step.details.interview_type || "N/A"}</p>
            <p>Date: {step.details.interview_date || "N/A"}</p>
            <p>Time: {step.details.interview_time || "N/A"}</p>
            <p>Info: {step.details.interview_info || "N/A"}</p>
          </div>
        );
      case "GD":
        return (
          <div className="text-sm">
            <p>Date: {step.details.gd_date || "N/A"}</p>
            <p>Time: {step.details.gd_time || "N/A"}</p>
            <p>Info: {step.details.gd_info || "N/A"}</p>
          </div>
        );
      case "Others":
        return (
          <div className="text-sm">
            <p>Round Name: {step.details.others_round_name || "N/A"}</p>
            <p>Date: {step.details.others_date || "N/A"}</p>
            <p>Time: {step.details.others_login_time || "N/A"}</p>
            <p>Duration: {step.details.others_duration || "N/A"}</p>
            <p>Info: {step.details.others_info || "N/A"}</p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errors = [];
    if (!formData.company_name) errors.push("Company Name is required");
    if (!formData.job_role) errors.push("Job Role is required");
    if (!formData.job_type) errors.push("Job Type is required");
    if (!formData.job_category) errors.push("Job Category is required");
    if(["FTE", "Intern+FTE"].includes(formData.job_type)){
    if (!formData.ctc || formData.ctc <=0) errors.push("CTC must be a positive number");}
    if (!formData.deadline) errors.push("Application Deadline is required");
    if (formData.eligibility_criteria.length === 0) {
      errors.push("At least one eligibility criteria set is required");
    }
    if (["Intern", "Intern+PPO", "Intern+FTE"].includes(formData.job_type)) {
      if (!formData.internship_duration) {
        errors.push("Internship Duration is required for Internship-based job types");
      }
      if (!formData.stipend || formData.stipend <= 0) {
        errors.push("Stipend must be a positive number for Internship-based job types");
      }
    }

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/createjobcopy`,
        {
          ...formData,
          ctc: Number(formData.ctc),
          // stipend: Number(formData.stipend),
        },
        { withCredentials: true }
      );
      toast.success("Job created successfully!");
      onJobCreated(response.data.data);
      onCancel();
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Error creating job application.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        className="text-gray-500 ml-2 mr-4rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        onClick={onCancel}
      >
        <FaArrowLeft />
      </button>
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-2xl -mt-12 transform transition-all duration-300 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center bg-custom-blue bg-clip-text text-transparent mb-12">
          Create Job Application
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Job ID
              </label>
              <input
                type="text"
                name="job_id"
                value={formData.job_id}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Company Name<span className="text-red-500"> *</span>
              </label>
              <CompanySearchDropdown
                companies={companies}
                value={formData.company_name}
                onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Job Role<span className="text-red-500"> *</span>
              </label>
              <input
                required
                type="text"
                name="job_role"
                value={formData.job_role}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-gray-700 font-semibold mb-2">
                Job Description
              </label>
              <ReactQuill
                value={formData.jobdescription}
                onChange={handleQuillChange}
                modules={quillModules}
                formats={quillFormats}
                className="border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                theme="snow"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Job Location
              </label>
              <input
                type="text"
                name="joblocation"
                value={formData.joblocation}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Job Type<span className="text-red-500"> *</span>
              </label>
              <Select
                required
                options={jobTypeOptions}
                onChange={(option) => handleSelectChange("job_type", option)}
                value={jobTypeOptions.find((option) => option.value === formData.job_type)}
                className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            {["Intern", "Intern+PPO", "Intern+FTE"].includes(formData.job_type) && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Internship Duration<span className="text-red-500"> *</span>
                </label>
                <Select
                  required
                  options={internshipDurationOptions}
                  onChange={(option) => handleSelectChange("internship_duration", option)}
                  value={internshipDurationOptions.find((option) => option.value === formData.internship_duration)}
                  className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              </div>
            )}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Job Category<span className="text-red-500"> *</span>
              </label>
              <Select
                required
                options={jobCategoryOptions}
                onChange={(option) => handleSelectChange("job_category", option)}
                value={jobCategoryOptions.find((option) => option.value === formData.job_category)}
                className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Job Sector
              </label>
              <Select
                options={jobSectorOptions}
                onChange={(option) => handleSelectChange("job_sector", option)}
                value={jobSectorOptions.find((option) => option.value === formData.job_sector)}
                className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                CTC<span className="text-red-500 text-sm">(in Lakhs) *</span>
              </label>
              <input
                required
                type="text"
                name="ctc"
                value={formData.ctc}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Base Salary
                <span className="text-red-500 text-sm"> (in Lakhs)</span>
              </label>
              <input
                type="text"
                name="base_salary"
                value={formData.base_salary}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            {["Intern", "Intern+PPO", "Intern+FTE"].includes(formData.job_type) && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Stipend<span className="text-red-500"> *</span>
                  <span className="text-red-500 text-sm"> (in Thousands per month)</span>
                </label>
                <input
                  required
                  type="text"
                  name="stipend"
                  value={formData.stipend}
                onChange={handleChange}
                  min="0"
                  step="0.1"
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              </div>
            )}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Application Deadline<span className="text-red-500"> *</span>
              </label>
              <input
                required
                type="datetime-local"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Eligibility Criteria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Course Allowed<span className="text-red-500"> *</span>
                </label>
                <select
                  name="course_allowed"
                  value={currentEligibility.course_allowed}
                  onChange={handleEligibilityChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                >
                  <option value="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="M.Sc.">M.Sc.</option>
                  {/* <option value="PHD">PHD</option> */}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Departments Allowed<span className="text-red-500"> *</span>
                </label>
                <Select
                  options={
                    currentEligibility.course_allowed === "B.Tech"
                      ? btechdepartmentOptions
                      : currentEligibility.course_allowed === "M.Tech"
                      ? mtechdepartmentOptions
                      : currentEligibility.course_allowed === "MBA"
                      ? mbadepartmentOptions
                      : currentEligibility.course_allowed === "M.Sc."
                      ? mscdepartmentOptions
                      : currentEligibility.course_allowed === "PHD"
                      ? phddepartmentOptions
                      : []
                  }
                  isMulti
                  onChange={handleEligibilityDepartmentChange}
                  value={
                    (
                      currentEligibility.course_allowed === "B.Tech"
                        ? btechdepartmentOptions
                        : currentEligibility.course_allowed === "M.Tech"
                        ? mtechdepartmentOptions
                        : currentEligibility.course_allowed === "MBA"
                        ? mbadepartmentOptions
                        : currentEligibility.course_allowed === "M.Sc."
                        ? mscdepartmentOptions
                        : currentEligibility.course_allowed === "PHD"
                        ? phddepartmentOptions
                        : []
                    )
                      .flatMap((group) => group.options || [group])
                      .filter((option) =>
                        currentEligibility.department_allowed.includes(option.value)
                      )
                  }
                  isDisabled={!currentEligibility.course_allowed}
                  className="w-full border-2 p-1.5 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
                {!currentEligibility.course_allowed && (
                  <p className="text-red-500 text-sm mt-2">
                    Please choose a course first.
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Gender Allowed<span className="text-red-500"> *</span>
                </label>
                <select
                  name="gender_allowed"
                  value={currentEligibility.gender_allowed}
                  onChange={handleEligibilityChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Any">All Gender Eligible</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Batch Allowed<span className="text-red-500"> *</span>
                </label>
                <select
                  name="eligible_batch"
                  value={currentEligibility.eligible_batch}
                  onChange={handleEligibilityChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                >
                  <option value="">Select Batch</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Minimum CGPA
                </label>
                <input
                  type="number"
                  name="minimum_cgpa"
                  value={currentEligibility.minimum_cgpa}
                  onChange={handleEligibilityChange}
                  min="0"
                  max="10"
                  step="0.1"
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-gray-700 font-semibold mb-2 mr-2">
                  Active Backlogs Allowed
                </label>
                <input
                  type="checkbox"
                  name="active_backlogs"
                  checked={currentEligibility.active_backlogs}
                  onChange={handleEligibilityChange}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-gray-700 font-semibold mb-2 mr-2">
                  Backlogs History Allowed
                </label>
                <input
                  type="checkbox"
                  name="history_backlogs"
                  checked={currentEligibility.history_backlogs}
                  onChange={handleEligibilityChange}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={addEligibilityCriteria}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
            >
              {editingEligibilityIndex !== null
                ? "Update Eligibility Criteria"
                : "Add Eligibility Criteria"}
            </button>

            <div className="mt-6 space-y-4">
              {formData.eligibility_criteria.map((criteria, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleEligibilityDragStart(index)}
                  onDragOver={(e) => handleEligibilityDragOver(e, index)}
                  onDragEnd={handleEligibilityDragEnd}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center gap-4"
                >
                  <div className="cursor-move">
                    <GripVertical className="text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-600">
                      Eligibility Set {index + 1}
                    </h3>
                    <div className="text-sm">
                      <p>Course: {criteria.course_allowed}</p>
                      <p>Departments: {criteria.department_allowed.join(", ")}</p>
                      <p>Gender: {criteria.gender_allowed}</p>
                      <p>Batch: {criteria.eligible_batch}</p>
                      <p>Minimum CGPA: {criteria.minimum_cgpa}</p>
                      <p>
                        Active Backlogs Allowed: {criteria.active_backlogs ? "Yes" : "No"}
                      </p>
                      <p>
                        History Backlogs Allowed: {criteria.history_backlogs ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => editEligibilityCriteria(index)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeEligibilityCriteria(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Hiring Workflow{" "}
              <span className="text-red-500 text-xs">
                (You can reorder rounds by dragging. And please ensure your
                hiringflow rounds are in the below sequence as it cannot be
                changed later)
              </span>
            </h2>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Round Type
              </label>
              <Select
                options={workflowStepOptions}
                onChange={handleWorkflowStepChange}
                value={workflowStepOptions.find(
                  (option) => option.value === workflowStep.step_type
                )}
                className="w-full border-2 border-gray-200 rounded-xl p-1.5 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            {workflowStep.step_type === "Resume Shortlisting" && <></>}

            {workflowStep.step_type === "OA" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                <input
                  type="date"
                  name="oa_date"
                  placeholder="OA Date"
                  value={workflowStep.details.oa_date || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
                <input
                  type="text"
                  name="oa_login_time"
                  placeholder="Login Time"
                  value={workflowStep.details.oa_login_time || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
                <input
                  type="text"
                  name="oa_duration"
                  placeholder="OA Duration"
                  value={workflowStep.details.oa_duration || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
                <textarea
                  name="oa_info"
                  placeholder="OA Info"
                  value={workflowStep.details.oa_info || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              </div>
            )}

            {workflowStep.step_type === "Interview" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                <div>
                  <select
                    name="interview_type"
                    value={workflowStep.details.interview_type || ""}
                    onChange={handleStepDetailsChange}
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  >
                    <option value="">Select Interview Type</option>
                    <option value="Technical Interview 1">Technical Interview 1</option>
                    <option value="Technical Interview 2">Technical Interview 2</option>
                    <option value="Technical Interview 3">Technical Interview 3</option>
                    <option value="HR Interview 1">HR Interview 1</option>
                    <option value="HR Interview 2">HR Interview 2</option>
                    <option value="HR Interview 3">HR Interview 3</option>
                  </select>
                </div>
                <input
                  type="date"
                  name="interview_date"
                  placeholder="Interview Date"
                  value={workflowStep.details.interview_date || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
                <input
                  type="time"
                  name="interview_time"
                  placeholder="Interview Time"
                  value={workflowStep.details.interview_time || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
                <textarea
                  name="interview_info"
                  placeholder="Interview Info"
                  value={workflowStep.details.interview_info || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              </div>
            )}

            {workflowStep.step_type === "GD" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                <input
                  type="date"
                  name="gd_date"
                  placeholder="GD Date"
                  value={workflowStep.details.gd_date || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
                <input
                  type="text"
                  name="gd_time"
                  placeholder="GD Time"
                  value={workflowStep.details.gd_time || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
                <textarea
                  name="gd_info"
                  placeholder="GD Info"
                  value={workflowStep.details.gd_info || ""}
                  onChange={handleStepDetailsChange}
                  className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              </div>
            )}

            {workflowStep.step_type === "Others" && (
              <>
                <input
                  type="text"
                  name="others_round_name"
                  placeholder="Name of Round"
                  value={workflowStep.details.others_round_name || ""}
                  onChange={handleStepDetailsChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 mt-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  <input
                    type="date"
                    name="others_date"
                    placeholder="Round Date"
                    value={workflowStep.details.others_date || ""}
                    onChange={handleStepDetailsChange}
                    className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                  <input
                    type="text"
                    name="others_login_time"
                    placeholder="Login Time"
                    value={workflowStep.details.others_login_time || ""}
                    onChange={handleStepDetailsChange}
                    className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                  <input
                    type="text"
                    name="others_duration"
                    placeholder="Round Duration"
                    value={workflowStep.details.others_duration || ""}
                    onChange={handleStepDetailsChange}
                    className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                  <textarea
                    name="others_info"
                    placeholder="Round Info"
                    value={workflowStep.details.others_info || ""}
                    onChange={handleStepDetailsChange}
                    className="border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>
              </>
            )}

            <button
              type="button"
              onClick={addWorkflowStep}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
            >
              {editingIndex !== null ? "Update" : "Add"} Workflow Step
            </button>

            <div className="mt-6 space-y-4">
              {formData.Hiring_Workflow.map((step, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragEnd={handleDragEnd}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center gap-4"
                >
                  <div className="cursor-move">
                    <GripVertical className="text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-600">
                      Round {index + 1}:{" "}
                      {workflowStepOptions.find((opt) => opt.value === step.step_type)?.label || step.step_type}
                    </h3>
                    {getWorkflowStepContent(step)}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => editWorkflowStep(index)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeWorkflowStep(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 w-full px-8 py-4 bg-custom-blue text-white font-semibold text-lg rounded-2xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Job..." : "Create Job"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateJob;