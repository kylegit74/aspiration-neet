import { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  GraduationCap,
  Image as ImageIcon,
  ChevronDown,
  ChevronUp,
  Edit2,
  X,
  Upload,
} from "lucide-react";
import FetchAllCourses from "../../../../Services/Course/FetchAllCourse";
import DeleteCourse from "../../../../Services/Course/DeleteCourse";
import AddCourse from "../../../../Services/Course/AddCourse";
import UpdateCourse from "../../../../Services/Course/UpdateCourse";
import Spinner from "../../../Spinner";

function AdminCourse() {
  const [Courses, SetCourses] = useState([]);
  const [Previews, SetPreviews] = useState({});
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [EditFile, setEditFile] = useState();
  const [EditHeading, setEditHeading] = useState({});
  const [EditDescription, setEditDescription] = useState({});

  const [EditTopics, setEditTopics] = useState({});
  const [newCourse, setNewCourse] = useState({
    heading: "",
    description: "",
    image: null,
    Explore_Courses: [""],
  });
  const [isSaving, setIsSaving] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  async function FetchCourses() {
    try {
      setIsLoading(true);
      const res = await FetchAllCourses();
      SetCourses(res);
      let initialPreviews = {};
      let initialEditFile = {};
      let initialEditHeading = {};
      let initialEditDescription = {};
      let initialEditTopics = {};
      res.forEach((course, index) => {
        initialPreviews[index] = course.image;
        initialEditFile[index] = course.image;
        initialEditHeading[index] = course.heading;
        initialEditDescription[index] = course.description;
        course.Explore_Courses?.map((course) => {
          initialEditTopics[index] = course;
        });
      });
      SetPreviews(initialPreviews);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      if (!window.confirm("Are you sure you want to delete this course?"))
        return;
      await DeleteCourse(id);
      FetchCourses();
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e, courseId = null) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      if (courseId) {
        handleEditImageChange(file, courseId);
      } else {
        setNewCourse((prev) => ({ ...prev, image: file }));
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCourse((prev) => ({ ...prev, image: file }));
    }
  };
  const handleEditImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEditFile(file); // Store the new file
      SetPreviews((prev) => ({ ...prev, [index]: url })); // Update preview immediately
    }
  };

  const handleAddTopic = () => {
    setNewCourse((prev) => ({
      ...prev,
      Explore_Courses: [...prev.Explore_Courses, ""],
    }));
  };

  const handleTopicChange = (index, value) => {
    setNewCourse((prev) => ({
      ...prev,
      Explore_Courses: prev.Explore_Courses.map((topic, i) =>
        i === index ? value : topic
      ),
    }));
  };

  const handleRemoveTopic = (index) => {
    setNewCourse((prev) => ({
      ...prev,
      Explore_Courses: prev.Explore_Courses.filter((_, i) => i !== index),
    }));
  };

  const handleEditCourse = (course) => {
    setEditingCourse({
      ...course,
      Explore_Courses: [...course.Explore_Courses],
    });
    setExpandedCourse(Courses.findIndex((c) => c._id === course._id));
  };

  const handleEditTopicChange = (index, value) => {
    setEditingCourse((prev) => ({
      ...prev,
      Explore_Courses: prev.Explore_Courses.map((topic, i) =>
        i === index ? value : topic
      ),
    }));
  };

  const handleAddEditTopic = () => {
    setEditingCourse((prev) => ({
      ...prev,
      Explore_Courses: [...prev.Explore_Courses, ""],
    }));
  };

  const handleRemoveEditTopic = (index) => {
    setEditingCourse((prev) => ({
      ...prev,
      Explore_Courses: prev.Explore_Courses.filter((_, i) => i !== index),
    }));
  };

  const handleUpdateCourse = async (courseId) => {
    if (!editingCourse) return;

    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append("heading", editingCourse.heading);
      formData.append("description", editingCourse.description);

      formData.append("image", EditFile ? EditFile : editingCourse.image);

      console.log("heading", editingCourse.heading);
      console.log("editfile", EditFile ? EditFile : editingCourse.image);
      console.log("des", editingCourse.description);
      formData.append(
        "Explore_Courses",
        JSON.stringify(
          editingCourse.Explore_Courses.filter((topic) => topic.trim())
        )
      );

      await UpdateCourse(courseId, formData);
      setExpandedCourse(false);
      setEditingCourse(null);
      FetchCourses();
    } catch (error) {
      console.error("Error updating course:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubmit = async () => {
    if (!newCourse.heading.trim()) {
      alert("Please enter a course title");
      return;
    }

    if (!newCourse.description.trim()) {
      alert("Please enter a course description");
      return;
    }

    if (!newCourse.image) {
      alert("Please select a course image");
      return;
    }

    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append("heading", newCourse.heading);
      formData.append("description", newCourse.description);
      formData.append("image", newCourse.image);
      formData.append(
        "Explore_Courses",
        JSON.stringify(
          newCourse.Explore_Courses.filter((topic) => topic.trim())
        )
      );

      await AddCourse(formData);
      setIsDialogOpen(false);
      setNewCourse({
        heading: "",
        description: "",
        image: null,
        Explore_Courses: [""],
      });
      FetchCourses();
    } catch (error) {
      console.error("Error adding course:", error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    return () => {
      Object.values(Previews).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [Previews]);

  useEffect(() => {
    FetchCourses();
  }, []);

  return (
    <div className="bg-white border max-w-9xl mx-auto shadow-lg rounded-lg p-4 sm:p-6 shadow-lg rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center  rounded-2xl justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-black">
          Course Management
        </h2>
        <button
          className="flex items-center justify-center gap-2 pb_bg_ylw  px-4 py-2 rounded-md text-black  transition-colors w-full sm:w-auto hover:bg-yellow-500 transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto font-medium"
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="w-4 h-4" />
          Add Course
        </button>
      </div>
      {IsLoading ? (
        <Spinner />
      ) : (
        <div className="space-y-4">
          {Courses?.map((course, index) => {
            const isEditing = editingCourse?._id === course._id;
            return (
              <div key={index} className="border bg-white rounded-lg bg-red-600 overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 ">
                  <div
                    className="flex items-center gap-4 flex-1 cursor-pointer w-full"
                    onClick={() => {
                      if (!isEditing) {
                        setExpandedCourse(
                          expandedCourse === index ? null : index
                        );
                      }
                    }}
                  >
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                    <div className="flex-1 font-medium text-gray-700">
                      {isEditing ? editingCourse.heading : course?.heading}
                    </div>
                    {expandedCourse === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      className="p-2 hover:bg-indigo-50 rounded-md transition-colors"
                      onClick={() => handleEditCourse(course)}
                    >
                      <Edit2 className="w-5 h-5 text-indigo-600" />
                    </button>
                    <button
                      className="p-2 hover:bg-red-50 rounded-md transition-colors"
                      onClick={() => handleDelete(course._id)}
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>

                {expandedCourse === index && (
                  <div className="p-4 space-y-4">
                    <div
                      className="relative group"
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, course._id)}
                    >
                      {Previews[index] ? (
                        <img
                          src={Previews[index]}
                          alt={course?.heading}
                          className="w-full h-48 object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            handleEditImageChange(e, index);
                          }}
                        />
                        <span className="bg-white text-gray-700 px-4 py-2 rounded-md">
                          Change Image
                        </span>
                      </label>
                    </div>

                    <div className="space-y-4">
                      <input
                        type="text"
                        value={
                          isEditing ? editingCourse.heading : course?.heading
                        }
                        onChange={(e) =>
                          isEditing &&
                          setEditingCourse((prev) => ({
                            ...prev,
                            heading: e.target.value,
                          }))
                        }
                        placeholder="Course Title"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none"
                        disabled={!isEditing}
                      />

                      <textarea
                        value={
                          isEditing
                            ? editingCourse.description
                            : course?.description
                        }
                        onChange={(e) =>
                          isEditing &&
                          setEditingCourse((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        placeholder="Course Description"
                        rows={3}
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none resize-none"
                        disabled={!isEditing}
                      />

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-700">
                            Explore Courses
                          </h3>
                          {isEditing && (
                            <button
                              onClick={handleAddEditTopic}
                              className="text-sm text-indigo-600 hover:text-indigo-700"
                            >
                              Add Topic
                            </button>
                          )}
                        </div>
                        {(isEditing
                          ? editingCourse.Explore_Courses
                          : course?.Explore_Courses
                        )?.map((explore, exploreIndex) => (
                          <div
                            key={exploreIndex}
                            className="flex flex-col sm:flex-row items-start gap-2"
                          >
                            <input
                              type="text"
                              value={explore}
                              onChange={(e) =>
                                isEditing &&
                                handleEditTopicChange(
                                  exploreIndex,
                                  e.target.value
                                )
                              }
                              className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none w-full"
                              disabled={!isEditing}
                            />
                            {isEditing && (
                              <button
                                onClick={() =>
                                  handleRemoveEditTopic(exploreIndex)
                                }
                                className="p-2 hover:bg-red-50 rounded-md transition-colors"
                              >
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      {isEditing && (
                        <div className="flex justify-end gap-2 mt-4">
                          <button
                            onClick={() => {
                              setEditingCourse(null);
                              setExpandedCourse(null);
                            }}
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleUpdateCourse(course._id)}
                            disabled={isSaving}
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
                          >
                            {isSaving ? "Saving..." : "Save Changes"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Add Course Modal */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Add New Course
              </h3>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-[calc(100vh-10rem)] overflow-y-auto">
              <div className="space-y-4">
                {/* Course Image Upload */}
                <div
                  className={`border-2 border-dashed rounded-lg p-4 text-center ${
                    isDragging
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 mb-1">
                    Drag and drop your image here, or{" "}
                    <label className="text-indigo-600 hover:text-indigo-700 cursor-pointer">
                      browse
                      <input
                        type="file"
                        onChange={handleImageChange}
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </p>
                </div>

                {newCourse.image && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                    <ImageIcon className="w-4 h-4" />
                    <span className="truncate">{newCourse.image.name}</span>
                  </div>
                )}

                {/* Course Details */}
                <div>
                  <input
                    type="text"
                    value={newCourse.heading}
                    onChange={(e) =>
                      setNewCourse((prev) => ({
                        ...prev,
                        heading: e.target.value,
                      }))
                    }
                    placeholder="Course Title"
                    className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <textarea
                    value={newCourse.description}
                    onChange={(e) =>
                      setNewCourse((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Course Description"
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
                  />
                </div>

                {/* Explore Courses */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Topics
                    </span>
                    <button
                      onClick={handleAddTopic}
                      className="text-sm text-indigo-600 hover:text-indigo-700"
                    >
                      Add Topic
                    </button>
                  </div>

                  {newCourse.Explore_Courses.map((topic, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) =>
                          handleTopicChange(index, e.target.value)
                        }
                        placeholder="Enter topic"
                        className="flex-1 px-3 py-2 border rounded-md focus:ring-1 focus:ring-indigo-500 outline-none text-sm"
                      />
                      {newCourse.Explore_Courses.length > 1 && (
                        <button
                          onClick={() => handleRemoveTopic(index)}
                          className="p-2 hover:bg-red-50 rounded-md"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t p-4 bg-gray-50">
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSaving}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? "Saving..." : "Save Course"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCourse;
