import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../Redux/authSlice";
import { Eye, EyeOff } from "lucide-react";
import OTPVerification from "./lockedotpverification";

const TextInput = ({
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  name,
  autoComplete,
}) => (
  <input
    className="w-full px-4 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-custom-blue"
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    name={name}
    autoComplete={autoComplete}
  />
);

const LoginSignup = ({ Login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLogin, setIsLogin] = useState(Login);
  const [userType, setUserType] = useState("Student");
  const [rollno, setRollno] = useState("");
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTPVerification, setShowOTPVerification] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setName("");
    setEmail("");
    setCode("");
    setPassword("");
    setRollno("");
    setDepartment("");
    setCompany("");
    setDesignation("");
    setFacultyId("");
    setError("");
    setEmailError("");
    setPasswordError("");
  }, [userType]);

  const validateEmail = (email) => /^[^\s@]+@nitj\.ac\.in$/.test(email);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const executeLogin = async () => {
    setIsSubmitting(true);
    try {
      const response = await toast.promise(
        axios.post(
          `${import.meta.env.REACT_APP_BASE_URL}/auth/login`,
          { email, password },
          { withCredentials: true }
        ),
        {
          loading: "Logging in...",
          success: "Login successful!",
          error: "Invalid Credentials",
        }
      );

      dispatch(
        setAuthUser({
          authUser: true,
          userData: response.data.user,
          userType:
            response.data.userType === "Recuiter"
              ? "Recruiter"
              : response.data.userType,
        })
      );

      if (response.data.userType === "Student") {
        navigate("/sdashboard/home");
      } else if (response.data.userType === "Recuiter") {
        navigate("/rdashboard/home");
      } else if (response.data.userType === "Professor") {
        navigate("/pdashboard/dashboard");
      }
    } catch (error) {
      if (
        error.response?.data?.message ===
        "Account locked. Please check your email for OTP."
      ) {
        toast.error("Account Locked");
        setShowOTPVerification(true);
      } else {
        setError(error.response?.data?.message || "An error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setPasswordError("");

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    await executeLogin();
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");

    if (userType !== "Recruiter" && !validateEmail(email)) {
      setEmailError("Please enter a valid NITJ email address.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    const signupData = { email, password, name };
    if (userType === "Student") {
      signupData.rollno = rollno;
      signupData.department = department;
    } else if (userType === "Recruiter") {
      signupData.company = company;
      signupData.designation = designation;
    } else if (userType === "Professor") {
      signupData.facultyId = facultyId;
      signupData.department = department;
    }

    const apiEndpoint =
      userType === "Student"
        ? "/auth/student/signup"
        : userType === "Recruiter"
          ? "/auth/recuiter/signup"
          : "/auth/professor/signup";

    setIsSubmitting(true);
    try {
      const response = await toast.promise(
        axios.post(
          `${import.meta.env.REACT_APP_BASE_URL}${apiEndpoint}`,
          signupData,
          {
            withCredentials: true,
          }
        ),
        {
          loading: "Signing up...",
          success: "Signup successful!",
          error: "Signup failed. Try again.",
        }
      );

      dispatch(
        setAuthUser({ authUser: true, userData: response.data.user, userType })
      );
      userType === "Student"
        ? navigate("/sdashboard/home")
        : userType === "Recruiter"
          ? navigate("/rdashboard/home")
          : navigate("/pdashboard");
      setIsLogin(true);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      {showOTPVerification ? (
        <OTPVerification
          email={email}
          onSuccess={() => {
            setShowOTPVerification(false);
            executeLogin();
          }}
        />
      ) : (
        <div className="  justify-center  px-4 border border-custom-blue relative w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src="/x1.jpg"
              alt="Image"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-extrabold text-gray-900">
                {isLogin ? "Welcome Back" : "Create an Account"}
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                {isLogin
                  ? "Please enter your login details"
                  : "Please fill in the details to sign up"}
              </p>
            </div>

            {isLogin ? (
              <form
                onSubmit={handleLogin}
                className="mt-6 space-y-4 flex flex-col"
              >
                <TextInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-xs">{emailError}</p>
                )}

                <div className="relative w-full">
                  <TextInput
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5 text-gray-500" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs">{passwordError}</p>
                )}

                {error && (
                  <p className="text-red-500 text-xs text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-custom-blue text-white font-semibold hover:bg-blue-500 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>

                {/* <p
                  className="text-custom-blue cursor-pointer text-sm text-center"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </p> */}
                <p className="text-custom-blue text-xs text-center">
                  Already have an account?{" "}
                  <span
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </span>
                </p>
              </form>
            ) : (
              <form
                onSubmit={handleSignup}
                className="mt-6 space-y-4 flex flex-col"
              >
                <div className="flex justify-center space-x-4 mb-4">
                  {["Student", "Recruiter", "Professor"].map((type) => {
                    const displayText = {
                      Student: "Student",
                      Recruiter: "Company",
                      Professor: "Admin",
                    }[type];

                    return (
                      <button
                        key={type}
                        type="button"
                        className={`px-4 py-2 rounded-md font-medium ${
                          userType === type
                            ? "bg-custom-blue text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                        onClick={() => setUserType(type)}
                      >
                        {displayText}
                      </button>
                    );
                  })}
                </div>

                <TextInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />

                <TextInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-xs">{emailError}</p>
                )}

                <div className="relative w-full">
                  <TextInput
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5 text-gray-500" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs">{passwordError}</p>
                )}

                {userType === "Student" && (
                  <>
                    <TextInput
                      value={rollno}
                      onChange={(e) => setRollno(e.target.value)}
                      placeholder="Enter your roll number"
                      required
                    />
                    <TextInput
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder="Enter your department"
                      required
                    />
                  </>
                )}

                {userType === "Recruiter" && (
                  <>
                    <TextInput
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Enter your company name"
                      required
                    />
                    <TextInput
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="Enter your job title"
                      required
                    />
                  </>
                )}

                {/* {userType === "Professor" && (
                <>
                  <TextInput
                    value={facultyId}
                    onChange={(e) => setFacultyId(e.target.value)}
                    placeholder="Enter your faculty ID"
                    required
                  />
                  <TextInput
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Enter your department"
                    required
                  />
                </>
              )} */}

                {error && (
                  <p className="text-red-500 text-xs text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-custom-blue text-white font-semibold hover:bg-blue-500 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing up..." : "Signup"}
                </button>

                <p className="text-custom-blue text-xs text-center">
                  Already have an account?{" "}
                  <span
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
