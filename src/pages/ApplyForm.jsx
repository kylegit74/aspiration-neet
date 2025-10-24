import React, { useState, useEffect } from "react";
import GetCourseById from "../Services/Course/GetCourseById";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import FetchAllCourses from "../Services/Course/FetchAllCourse";
import { useForm, Controller } from "react-hook-form";


const ApplyForm = () => {
  const [step, setStep] = useState(1);
  const [isDispalyNext, setIsDisplayNext] = useState(false)
  const [idProof, setidProof] = useState(null)
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   dob: "",
  //   gender: "",
  //   address: "",
  //   guardianName: "",
  //   guardianPhone: "",
  //   idProof: null,
  //   qualificationCertificate: null,
  //   examType: "",
  //   course: "",
  //   batchTiming: "",
  //   mode: "",
  //   marks10: "",
  //   marks12: "",
  //   board: "",
  //   scholarshipCode: "",
  //   paymentMethod: "",
  //   paymentProof: null,
  // });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm(
    {
      mode: "onChange",
    }
  );

  const onSubmit = (data) => {
    const idFile = data.idProof?.[0];
    const qualificationFile = data.qualificationCertificate?.[0];
    console.log("ID File:", idFile);
    console.log("Qualification File:", qualificationFile);
    console.log("All form data:", data);
  };


  const formvalue = watch();
  console.log("formvalue", formvalue)
  const isStepValid = (checkStep) => {
    if (checkStep === 1) {
      return (
        formvalue.fullname &&
        formvalue.email &&
        formvalue.phone?.trim().length >= 10 &&
        formvalue.phone?.trim().length <= 13 &&
        formvalue.gender
      );
    }
    if (checkStep === 2) {
      return (
        formvalue.guardianName &&
        formvalue.guardianPhone?.trim().length >= 10 &&
        formvalue.guardianPhone?.trim().length <= 13 &&
        formvalue.idProof?.length > 0 &&
        formvalue.qualificationCertificate?.length > 0
      );
    }
    if (checkStep === 3) {
      return (
        formvalue.guardianName &&
        formvalue.guardianPhone?.trim().length >= 10 &&
        formvalue.guardianPhone?.trim().length <= 13 &&
        formvalue.idProof?.length > 0 &&
        formvalue.qualificationCertificate?.length > 0
      );
    }
    return true; 
  };



  const { slug } = useParams();

  const nextStep = () => {
    if (isStepValid(step)) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };
  
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  // };

  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const[selectedCourse, setSelectedCourse]=useState(null)
  //Fething courses

  useEffect(() => {
    async function FetchCourse() {
      try {
        setIsLoading(true);
        const fetchedCourse = await FetchAllCourses();
        console.log("coursesfsdfsdsdf", fetchedCourse);
        setCourse(fetchedCourse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);


      }
    }
    FetchCourse();
  }, []);

  useEffect(()=>{


  },[selectedCourse])

 
  const filteredbyslug = course.filter((course) => course.course_url_link == slug)

  // responsive
  return isLoading ? (
    <><Spinner />    </>
  ) : (
    <MainLayout>
      <div className="max-w-4xl w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-[140px] md:mt-[130px] sm:mt-16">
        {/* Stepper */}
        <ol className="flex flex-wrap items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-gray-100 rounded-lg overflow-x-auto">
          {[
            "Personal Info",
            "Guardian ",
            "Course Selection",
            "Payment",
          ].map((label, index) => (
            <li
              key={index}

              onClick={() => {
                // Check all previous steps before moving to clicked step
                let canGo = true;
                for (let i = 1; i <= index; i++) {
                  if (!isStepValid(i)) {
                    canGo = false;
                    break;
                  }
                }
                if (canGo) setStep(index + 1);
              }}

              className={`flex items-center cursor-pointer px-3 py-2 rounded-lg transition-all ${step === index + 1
                ? "bg-red-500 text-white font-bold shadow-md"
                : "text-gray-600"
                }`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 text-sm font-semibold rounded-full ${step === index + 1
                  ? "bg-white text-red-500"
                  : "border border-gray-400"
                  }`}
              >
                {index + 1}
              </span>
              <span className="ml-2 hidden sm:inline" >{label}</span>
            </li>
          ))}
        </ol>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black">
                Personal Information
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                {...register("fullname", {
                  required: "Enter Your Full Name",
                  minLength: {
                    value: 3,
                    message: "Full Name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Full Name cannot exceed 50 characters",
                  },
                })}
                className="w-full p-3 border rounded-md"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm">{errors.fullname.message}</p>
              )}

              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Enter Your Email",
                  pattern: {
                    value: `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`,
                    message: "Enter Valid Email "
                  }
                })}
                className="w-full p-3 border rounded-md mt-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <input
                type="number"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Enter Your Phone Number",
                  minLength: {
                    value: 10,
                    message: "Number should be atleast  10 digit "
                  },
                  maxLength: {
                    value: 13,
                    message: "Number should  be less than 13 digit"
                  }


                },)}
                className="w-full p-3 border rounded-md mt-3"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}

              <select
                {...register("gender", { required: "Select Your Gender" })}
                className="w-full p-3 border rounded-md mt-3"
                value={formvalue.gender}
             >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>
          )}

          {/* Step 2: Guardian & Documents */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Guardian & Documents</h2>

              <input
                type="text"
                placeholder="Guardian's Name"
                {...register("guardianName", {
                  required: "Enter Your Guardian Name",
                  minLength: {
                    value: 3,
                    message: "Full Name must be at least 3 characters"
                  }
                })}
                className="w-full p-3 border rounded-md"
              />
              {errors.guardianName && (
                <p className="text-red-500 text-sm">{errors.guardianName.message}</p>
              )}

              <input
                type="number"
                placeholder="Guardian's Phone"
                {...register("guardianPhone", {
                  required: "Enter Your Guardian Phone",
                  minLength: {
                    value: 10,
                    message: "Number should be atleast  10 digit "
                  },
                  maxLength: {
                    value: 13,
                    message: "Number should  be less than 13 digit"
                  }
                })}
                className="w-full p-3 border rounded-md mt-3"
              />
              {errors.guardianPhone && (
                <p className="text-red-500 text-sm">
                  {errors.guardianPhone.message}
                </p>
              )}

              <div className="mt-3">
                <label className="block mb-1">Upload Your ID Proof (Aadhar Card)</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-3 border rounded-l-md"
                    placeholder="No file selected"
                    value={formvalue.idProof && formvalue.idProof.length > 0 ? formvalue.idProof[0].name : ""}
                    readOnly
                  />
                  <Controller
                    name="idProof"
                    control={control}
                    rules={{ required: "Upload your ID Proof" }}
                    render={({ field }) => (
                      <input
                        type="file"
                        onChange={(e) => field.onChange(e.target.files)}
                        className="hidden"
                        id="idProofInput"
                      />
                    )}
                  />
                  <label
                    htmlFor="idProofInput"
                    className="px-4 py-3 bg-red-500 text-white rounded-r-md cursor-pointer"
                  >
                    Upload
                  </label>
                </div>
                {errors.idProof && (
                  <p className="text-red-500 text-sm mt-1">{errors.idProof.message}</p>
                )}
              </div>

              <div className="mt-3">
                <label className="block mb-1">Your  Last Qualification Certificate:</label>
                <div className="flex">
                  {/* Text input to show file name */}
                  <input
                    type="text"
                    className="w-full p-3 border rounded-l-md"
                    placeholder="No file selected"
                    value={
                      formvalue.qualificationCertificate && formvalue.qualificationCertificate.length > 0
                        ? formvalue.qualificationCertificate[0].name
                        : ""
                    }
                    readOnly
                  />

                  {/* Hidden file input */}
                  <Controller
                    name="qualificationCertificate"
                    control={control}
                    rules={{ required: "Upload your Qualification Certificate" }}
                    render={({ field }) => (
                      <input
                        type="file"
                        onChange={(e) => field.onChange(e.target.files)}
                        className="hidden"
                        id="qualificationCertificateInput"
                      />
                    )}
                  />

                  {/* Label acts as button */}
                  <label
                    htmlFor="qualificationCertificateInput"
                    className="px-4 py-3 bg-red-500 text-white rounded-r-md cursor-pointer"
                  >
                    Upload </label>
                </div>

                {errors.qualificationCertificate && (
                  <p className="text-red-500 text-sm mt-1">{errors.qualificationCertificate.message}</p>
                )}
              </div>

            </div>
          )}

          {/* Step 3: Course Selection */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-black mb-4 text-start">
                Course Selection
              </h2>

              <div>
                <label htmlFor="coursename" className="block text-gray-700 font-medium mb-1">
                  Course Name:
                </label>
                <select
                  type="text"
                  id="coursename"
                  name="coursename"

                  {...register ("coursename",{required:"please select course "})}
                  
                  placeholder="Enter course name"
                  value={selectedCourse? selectedCourse.name :filteredbyslug[0]?.name}
                  onChange={(e)=>{
                     const courseobj= course.find((crs)=>crs.name===e.target.value)
                     setSelectedCourse(courseobj)
                  }}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  {course.map((crs)=>
                  <option>{crs.name}</option>
                  )}
                </select>
              </div>

              <div>
                <label htmlFor="courseprice" className="block text-gray-700 font-medium mb-1">
                  Course Price:
                </label>
                <input
                  type="text"
                  name="courseprice"
                  id="courseprice"
                  {...register ("courseprice")}

                  disabled
                  placeholder="Enter course price"
                  value={selectedCourse? selectedCourse.price: filteredbyslug[0]?.price}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && (
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition-transform transform hover:scale-105">
                Pay Here
              </button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Back
              </button>
            )}

            {
              step < 4 && isStepValid(step) && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Next
                </button>
              )
            }
            {step == 4 && (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default ApplyForm;
