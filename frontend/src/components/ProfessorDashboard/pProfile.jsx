import React, { useEffect, useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../../Redux/authSlice";
import toast from "react-hot-toast";
import BouncingLoader from "../BouncingLoader";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [sendImage, setSendImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdatingPic, setIsUpdatingPic] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    image: "",
  });

  const fileInputRef = useRef(null);
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const { name, email, phone,rollno,department,year,batch,address,cgpa,gender } = req.body;


  useEffect(() => {
    if (userData) {
      setUser(userData);
      setFormData({
        name: userData.name,
        email: userData.email,
        phone: userData.facultyId,
        department: userData.department,
        image: userData.image,
      });
    }
  }, [userData]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePicUpdateToggle = () => {
    setIsUpdatingPic(!isUpdatingPic);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSendImage(e.target.files[0]);
    }
  };

  const handleProfilePicSubmit = async (e) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setSendImage(e.target.files[0]);
    }
    if (!sendImage) return;
    try {
      const form = new FormData();
      form.append("file", sendImage);
      await toast
        .promise(
          axios.put(
            `${import.meta.env.REACT_APP_BASE_URL}/profile/update-picture`,
            form,
            { withCredentials: true }
          ),
          {
            loading: "Updating profile picture...",
            success: "Profile picture updated successfully!",
            error: "Failed to update profile picture",
          }
        )
        .then((response) => {
          setUser((prevUser) => ({
            ...prevUser,
            image: response.data.professor.image,
          }));
          setIsUpdatingPic(false);
          setSendImage(null);
          dispatch(
            setAuthUser({ authUser: true, userData: response.data.professor })
          );
        });
    } catch (err) {
      console.error(err);
      setError("Failed to update profile picture");
    }
    finally{
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    e.preventDefault();
    try {
      await toast
        .promise(
          axios.put(
            `${import.meta.env.REACT_APP_BASE_URL}/profile/update`,
            formData,
            { withCredentials: true }
          ),
          {
            loading: "Updating profile...",
            success: "Profile updated successfully!",
            error: "Failed to update profile",
          }
        )
        .then((response) => {
          setUser({ ...user, ...formData });
          setIsEditing(false);
          dispatch(
            setAuthUser({ authUser: true, userData: response.data.user })
          );
        });
    } catch (err) {
      console.error(err);
      setError("Failed to update profile");
    }
    finally{
      setIsSubmitting(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
    setIsUpdatingPic(!isUpdatingPic);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <BouncingLoader size="medium" text="Loading..." />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-1">
      <div className="shadow rounded-3xl overflow-hidden w-full max-w-xxl border-2 border-custom-blue">
        {/* Cover Section */}
        <div className="relative bg-gradient-to-r from-custom-blue to-custom-blue bg-cover bg-no-repeat h-40">
          <div className="absolute inset-0 opacity-50"></div>
        </div>

        {/* Profile Section */}
        <div className="relative -mt-12 text-center">
          <button onClick={triggerFileInput}>
            <img
              src={
                user.image ||
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              }
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto border-4 border-custom-blue"
            />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleProfilePicSubmit}
            style={{ display: "none" }}
          />

          {isUpdatingPic && (
            <div className="mt-4">
              <button
                onClick={handleProfilePicSubmit}
                disabled={isSubmitting}
                className="bg-green-500 text-white px-4 py-1 border border-green-400 rounded"
              >
                {isSubmitting ? "Uploading..." : "Upload"}
              </button>
              <button
                onClick={handleProfilePicUpdateToggle}
                className="ml-2 bg-red-500 text-white px-4 py-1 border border-red-400 rounded"
              >
                Cancel
              </button>
            </div>
          )}

        </div>

        {/* About Section */}
        <div className="mt-6 px-6 py-4">
          <h5 className="mb-3 ml-4 font-bold text-custom-blue">Professional Details</h5>
          <div className="p-4 bg-white border border-neutral-400 rounded-3xl">
            <div className="flex flex-wrap">
              {/* Left Column */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center">
                  <div className="text-white mx-4 bg-custom-blue h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <p className="font-italic tracking-tight">Name: {formData.name}</p>
                </div>
                <div className="flex items-center">
                  <div className="text-white mx-4 bg-custom-blue h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <p className="font-italic tracking-tight">Email: {formData.email}</p>
                </div>
              </div>
              
              {/* Right Column */}
              {/* <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center">
                  <div className="text-white mx-4 bg-custom-blue h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <p className="font-italic tracking-tight">Department: {formData.department}</p>
                </div>
                <div className="flex items-center">
                  <div className="text-white mx-4 bg-custom-blue h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <p className="font-italic tracking-tight">FacultyID: {formData.facultyId}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Research and Publications Section */}
        {/* <div className="mt-6 px-6 py-4">
          <h5 className="mb-3 ml-4 font-bold text-custom-blue">Research & Publications</h5>
          <div className="p-4 bg-white border border-neutral-400 rounded-3xl">
            <div className="space-y-6">
              <div>
                <h6 className="font-semibold mb-2">Research Interests</h6>
                <p className="text-gray-700">{formData.researchInterests}</p>
              </div>
              <div>
                <h6 className="font-semibold mb-2">Recent Publications</h6>
                <p className="text-gray-700">{formData.publications}</p>
              </div>
              <div>
                <h6 className="font-semibold mb-2">Qualifications</h6>
                <p className="text-gray-700">{formData.qualifications}</p>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default Profile;