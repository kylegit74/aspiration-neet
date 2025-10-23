import { useEffect, useState } from "react";
import {
  Image,
  Plus,
  Trash2,
  Edit2,
  X,
  Upload,
  Link as LinkIcon,
} from "lucide-react";
import FetchAllBanner from "../../../../Services/Banner/FetchAllBanner";
import EditBanner from "../../../../Services/Banner/EditBanner";
import DeleteBanner from "../../../../Services/Banner/DeleteBanner";
import AddBanner from "../../../../Services/Banner/AddBanner";
import Spinner from "../../../Spinner";

function AdminBanner() {
  const [banners, setBanners] = useState([]);
  const [previews, setPreviews] = useState({});
  const [issaving, setIsSaving] = useState(false);
  const [file, setFile] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [editingImage, setEditingImage] = useState(null);
  const [isLinkEdit, setIsLinkEdit] = useState(false);
  const [isLinkEditIndex, setIsLinkEditIndex] = useState();
  const [Link, setLink] = useState();
  const [IsLinkSaving, SetIsLinkSaving] = useState(false);
  const [Loading, setIsLoading] = useState(false);

  async function fetchAdminBanners() {
    try {
      setIsLoading(true);
      const res = await FetchAllBanner();
      if (Array.isArray(res)) {
        setBanners(res);
        const initialPreviews = {};
        res.forEach((banner, index) => {
          if (banner.image) {
            initialPreviews[index] = banner.image;
          }
        });
        setPreviews(initialPreviews);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching banners:", error);
      setBanners([]);
      setIsLoading(false);
    }
  }

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [index]: fileURL }));
      setEditingImage(index);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFile(file);
    }
  };

  async function handleImageUpdate(bannerId) {
    if (!file) return;

    setIsSaving(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      await EditBanner(formData, bannerId);
      await fetchAdminBanners();
      setEditingImage(null);
      setFile(null);
    } catch (error) {
      console.error("Error updating image:", error);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(e, id) {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this banner?")) return;

    try {
      await DeleteBanner(id);
      await fetchAdminBanners();
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  }

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    setIsSaving(true);

    try {
      await AddBanner(formData);
      await fetchAdminBanners();
      setIsDialogOpen(false);
      setFile(null);
    } catch (error) {
      console.error("Error uploading banner:", error);
    } finally {
      setIsSaving(false);
    }
  };

  function handleEditLink(index, link) {
    setIsLinkEdit(!isLinkEdit);
    setIsLinkEditIndex(index);
    setLink(link);
  }

  async function handleSaveLink(e, id) {
    e.preventDefault();
    try {
      SetIsLinkSaving(true);
      const formdata = new FormData();
      formdata.append("image", File);
      formdata.append("link", Link);
      const res = await EditBanner(formdata, id);
      console.log("reedits", res);
      SetIsLinkSaving(false);
      setIsLinkEdit(false);
      fetchAdminBanners();
    } catch (error) {
      console.log("error", error);
      SetIsLinkSaving(false);
    }
  }

  useEffect(() => {
    fetchAdminBanners();
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-8xl mx-auto bg-white  shadow-lg border p-8 rounded-2xl ">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-black tracking-tight">
              Banner Management
            </h2>
            <p className="text-gray-600 mt-2 text-black">
              Manage your website banners and their links
            </p>
          </div>
          <button
            className="flex items-center justify-center gap-2 pb_bg_ylw  text-black px-8 py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus className="w-5 h-5 text-black" />
            Add Banner
          </button>
        </div>

        {Loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {banners?.map((banner, index) => (
              <div
                key={index}
                className="group transform hover:-translate-y-1 transition-all duration-200"
              >
                <div className="border rounded-2xl overflow-hidden bg-yellow-200  shadow-md hover:shadow-xl transition-all duration-200">
                  <div className="relative aspect-video">
                    {previews[index] ? (
                      <img
                        src={previews[index]}
                        alt="Banner Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <Image className="w-16 h-16 text-gray-400" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <label className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center cursor-pointer hover:bg-red-400 hover:text-white transition-colors duration-200 shadow-lg transform hover:scale-105">
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, index)}
                          className="hidden"
                          accept="image/*"
                        />
                        <Edit2 className="w-5 h-5 hover:text-white text-gray-700" />
                      </label>
                      <button
                        className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200 transform hover:scale-105"
                        onClick={(e) => handleDelete(e, banner._id)}
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <LinkIcon className="w-5 h-5 text-black" />
                        <span className="text-sm font-semibold text-black">
                          Banner Link
                        </span>
                      </div>

                      {isLinkEdit && isLinkEditIndex === index ? (
                        <button
                          className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-black text-sm font-medium rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                          onClick={(e) => handleSaveLink(e, banner._id)}
                        >
                          {IsLinkSaving ? "Saving..." : "Save"}
                        </button>
                      ) : (
                        <button
                          className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-indigo-600 transition-all duration-200"
                          onClick={() => handleEditLink(index, banner.link)}
                        >
                          <Edit2 className="w-5 h-5 text-black" />
                        </button>
                      )}
                    </div>

                    {isLinkEdit && isLinkEditIndex === index ? (
                      <input
                        type="text"
                        value={Link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all duration-200"
                        placeholder="Enter banner link..."
                      />
                    ) : (
                      <div className="text-sm text-black truncate">
                        {banner.link || "No link set"}
                      </div>
                    )}

                    {editingImage === index && (
                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => handleImageUpdate(banner._id)}
                          disabled={issaving}
                          className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-sm font-medium rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {issaving ? "Saving..." : "Save Image"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload Dialog */}
        {isDialogOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 relative animate-fadeIn">
              <div className="p-8">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => {
                    setIsDialogOpen(false);
                    setFile(null);
                  }}
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Add New Banner
                </h3>

                <div
                  className={`border-3 border-dashed rounded-xl p-10 transition-all duration-200 ${
                    isDragging
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-300 hover:border-indigo-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="text-center">
                    <Upload className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                    <p className="text-gray-600 mb-3">
                      Drag and drop your image here, or
                    </p>
                    <label className="inline-block">
                      <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="hidden"
                        accept="image/*"
                      />
                      <span className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer">
                        browse files
                      </span>
                    </label>
                  </div>
                </div>

                {file && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                    <Image className="w-6 h-6 text-indigo-500" />
                    <span className="text-sm text-gray-600 truncate flex-1">
                      {file.name}
                    </span>
                    <button
                      onClick={() => setFile(null)}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                )}

                <div className="mt-8">
                  <button
                    onClick={handleUpload}
                    disabled={issaving || !file}
                    className={`w-full py-3 rounded-xl text-white font-medium transition-all duration-300 ${
                      issaving || !file
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                    }`}
                  >
                    {issaving ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Uploading...
                      </span>
                    ) : (
                      "Upload Banner"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminBanner;
