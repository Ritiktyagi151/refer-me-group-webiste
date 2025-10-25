import React, { useState, useEffect, Component } from "react";
import { motion } from "framer-motion";

// ErrorBoundary component to catch rendering errors
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    console.error("ErrorBoundary caught error:", error);
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const AdminPanel = () => {
  // State for courses data
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("courses");
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([
    "All Courses",
    "Data Science, AI & Automation",
    "Software Testing & Programming",
    "Cloud & DevOps",
    "Management & Business",
    "Marketing & Soft Skills",
    // --- ADD KAREIN (Aapke example data se) ---
    "Cloud Computing",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);
  const [editCategoryValue, setEditCategoryValue] = useState("");

  // API base URL
  const API_BASE_URL = "https://refermegroup.com/api/courses";

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    type: "",
    duration: "",
    enrolled: "",
    bannerImage: null, // File object
    recommended: false,
    trending: false,
    mostPurchased: false,
    topRanked: false,
    curriculumPdfUrl: null, // File object
  });
  const [bannerPreview, setBannerPreview] = useState("");
  const [pdfPreview, setPdfPreview] = useState("");

  // --- YEH FUNCTION UPDATE KIYA GAYA HAI ---
  // Validate course object
  const isValidCourse = (course) => {
    // Ab yeh sirf check karega ki course hai aur usmein _id aur title hai.
    // Isse aapke adhoore bane courses bhi list mein dikh jayenge.
    return course && typeof course === "object" && course._id && course.title;
  };
  // --- FUNCTION UPDATE KHATAM ---

  // Safely convert any value to string for rendering
  const safeString = (value) => {
    if (value === null || value === undefined) return "";
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
  };

  // Fetch courses from API
  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_BASE_URL);
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          // Ab humara naya isValidCourse function yahan istemal hoga
          const validCourses = data.filter(isValidCourse);
          setCourses(validCourses);

          if (validCourses.length < data.length) {
            console.warn(
              "Some courses were filtered out by isValidCourse check."
            );
            // Yeh error dikhane ki zaroorat nahi
            // setError("Some courses from API were invalid and filtered out");
          }
        } else {
          console.error("API response is not an array:", data);
          setError("Invalid courses data format from API");
          setCourses([]);
        }
      } else {
        setError("Failed to fetch courses from API.");
        setCourses([]);
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError(err.message);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchCourses();

    // Load categories from localStorage if available
    const savedCategories = localStorage.getItem("courseCategories");
    if (savedCategories) {
      try {
        const parsedCategories = JSON.parse(savedCategories);
        if (Array.isArray(parsedCategories) && parsedCategories.length > 0) {
          // Purani list aur nayi local list ko merge karein
          setCategories((prev) => [...new Set([...prev, ...parsedCategories])]);
        } else {
          // Agar local storage khali hai, toh default list ko hi save kardein
          localStorage.setItem("courseCategories", JSON.stringify(categories));
        }
      } catch (parseError) {
        console.error("Error parsing categories:", parseError);
        setError("Error parsing saved categories");
      }
    } else {
      // Agar local storage mein kuch nahi hai, toh default list save karein
      localStorage.setItem("courseCategories", JSON.stringify(categories));
    }
  }, []); // [] dependency zaroori hai taaki yeh sirf ek baar chale

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setHasChanges(true);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, bannerImage: file }));
      const reader = new FileReader();
      reader.onload = (ev) => setBannerPreview(ev.target.result);
      reader.readAsDataURL(file);
      setHasChanges(true);
    } else {
      setError("Please select a valid image file");
    }
  };

  // Handle PDF upload
  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, curriculumPdfUrl: file }));
      setPdfPreview(file.name);
      setHasChanges(true);
    } else {
      setError("Please select a valid PDF file");
    }
  };

  // Handle form submission (Yeh wahi code hai jo pehle update kiya tha)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.title ||
      !formData.category ||
      !formData.type ||
      !formData.duration ||
      !formData.enrolled
    ) {
      setError("Please fill all required text fields");
      return;
    }

    if (!isEditing && (!formData.bannerImage || !formData.curriculumPdfUrl)) {
      setError(
        "Please upload both Banner Image and Curriculum PDF when creating a new course"
      );
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("duration", formData.duration);
      formDataToSend.append("enrolled", formData.enrolled);
      formDataToSend.append("recommended", formData.recommended);
      formDataToSend.append("trending", formData.trending);
      formDataToSend.append("mostPurchased", formData.mostPurchased);
      formDataToSend.append("topRanked", formData.topRanked);

      if (formData.bannerImage && typeof formData.bannerImage !== "string") {
        formDataToSend.append("bannerImage", formData.bannerImage);
      }
      if (
        formData.curriculumPdfUrl &&
        typeof formData.curriculumPdfUrl !== "string"
      ) {
        formDataToSend.append("curriculumPdfUrl", formData.curriculumPdfUrl);
      }

      const url = isEditing
        ? `${API_BASE_URL}/${currentCourse._id}`
        : API_BASE_URL;
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (response.ok) {
        const updatedCourse = await response.json();
        if (isEditing) {
          setCourses(
            courses.map((c) =>
              c._id === updatedCourse._id ? updatedCourse : c
            )
          );
        } else {
          setCourses([...courses, updatedCourse]);
        }
        alert(
          isEditing
            ? "Course updated successfully!"
            : "Course added successfully!"
        );
        resetForm();
        setHasChanges(false);
        fetchCourses(); // List ko API se refresh karein
      } else {
        const err = await response.json();
        setError(err.error || "Failed to save course");
      }
    } catch (err) {
      console.error("Error saving course:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      type: "",
      duration: "",
      enrolled: "",
      bannerImage: null,
      recommended: false,
      trending: false,
      mostPurchased: false,
      topRanked: false,
      curriculumPdfUrl: null,
    });
    setBannerPreview("");
    setPdfPreview("");
    setIsEditing(false);
    setCurrentCourse(null);
  };

  // Edit course
  const editCourse = (course) => {
    if (isLocked) return;

    setFormData({
      title: course.title || "",
      category: course.category || "",
      type: course.type || "",
      duration: course.duration || "",
      enrolled: course.enrolled || "",
      bannerImage: null,
      recommended: course.recommended || false,
      trending: course.trending || false,
      mostPurchased: course.mostPurchased || false,
      topRanked: course.topRanked || false,
      curriculumPdfUrl: null,
    });
    setBannerPreview(course.bannerImage || "");
    setPdfPreview(course.curriculumPdfUrl ? "PDF pehle se uploaded hai" : "");
    setIsEditing(true);
    setCurrentCourse(course);
  };

  // Delete course
  const deleteCourse = async (id) => {
    if (isLocked) return;

    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const updatedCourses = courses.filter((course) => course._id !== id);
        setCourses(updatedCourses);

        if (currentCourse && currentCourse._id === id) {
          resetForm();
        }
        alert("Course deleted successfully!");
      } else {
        const err = await response.json();
        setError(err.error || "Failed to delete course");
      }
    } catch (err) {
      console.error("Error deleting course:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Save all changes (local)
  const saveChanges = async () => {
    try {
      setLoading(true);
      setError(null);
      localStorage.setItem("courseCategories", JSON.stringify(categories));
      alert("Local categories saved!");
      setHasChanges(false);
    } catch (err) {
      console.error("Error saving changes:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Toggle lock
  const toggleLock = () => {
    setIsLocked(!isLocked);
    if (!isLocked) {
      resetForm();
      setEditingCategory(null);
      setEditCategoryValue("");
    }
  };

  // Add new category (Local)
  const addCategory = () => {
    if (newCategory.trim() === "") return;

    const updatedCategories = [...new Set([...categories, newCategory.trim()])];
    setCategories(updatedCategories);
    localStorage.setItem("courseCategories", JSON.stringify(updatedCategories));
    setNewCategory("");
    alert("Category added locally!");
  };

  // Start editing a category (Local)
  const startEditCategory = (category) => {
    setEditingCategory(category);
    setEditCategoryValue(category);
  };

  // Save edited category (Local)
  const saveEditCategory = () => {
    if (editCategoryValue.trim() === "") return;

    const coursesUsingCategory = courses.filter(
      (course) => course.category === editingCategory
    );
    if (coursesUsingCategory.length > 0) {
      alert(
        `Warning: ${coursesUsingCategory.length} course(s) are using this category. You must update them manually.`
      );
    }

    const updatedCategories = categories.map((cat) =>
      cat === editingCategory ? editCategoryValue.trim() : cat
    );
    setCategories(updatedCategories);
    localStorage.setItem("courseCategories", JSON.stringify(updatedCategories));
    setEditingCategory(null);
    setEditCategoryValue("");
    alert("Category updated locally!");
  };

  // Cancel editing category
  const cancelEditCategory = () => {
    setEditingCategory(null);
    setEditCategoryValue("");
  };

  // Remove category (Local)
  const removeCategory = (categoryToRemove) => {
    if (categoryToRemove === "All Courses") {
      alert("Cannot remove 'All Courses' category");
      return;
    }

    const coursesUsingCategory = courses.filter(
      (course) => course.category === categoryToRemove
    );
    if (coursesUsingCategory.length > 0) {
      alert(
        `Cannot remove category. ${coursesUsingCategory.length} course(s) are using it.`
      );
      return;
    }

    const updatedCategories = categories.filter(
      (cat) => cat !== categoryToRemove
    );
    setCategories(updatedCategories);
    localStorage.setItem("courseCategories", JSON.stringify(updatedCategories));
    alert("Category removed locally!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Course Management Admin Panel
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={toggleLock}
              className={`px-4 py-2 rounded-md font-medium ${
                isLocked
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {isLocked ? "Unlock Editing" : "Lock Editing"}
            </button>
          </div>
        </div>
      </header>

      {/* Error message */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
            <button
              onClick={() => setError(null)}
              className="absolute top-0 right-0 p-2"
            >
              <span className="text-red-700">×</span>
            </button>
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            Loading...
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("courses")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "courses"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => setActiveTab("categories")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "categories"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Categories (Local)
            </button>
          </nav>
        </div>

        {/* Content based on active tab */}
        {activeTab === "courses" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  {isEditing ? "Edit Course" : "Add New Course"}
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={safeString(formData.title)}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        disabled={isLocked || loading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={safeString(formData.category)}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        disabled={isLocked || loading}
                      >
                        <option value="">Select a category</option>
                        {categories
                          .filter((cat) => cat !== "All Courses")
                          .map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Type *
                      </label>
                      <input
                        type="text"
                        name="type"
                        value={safeString(formData.type)}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        disabled={isLocked || loading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Duration *
                      </label>
                      <input
                        type="text"
                        name="duration"
                        value={safeString(formData.duration)}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        disabled={isLocked || loading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Enrolled *
                      </label>
                      <input
                        type="text"
                        name="enrolled"
                        value={safeString(formData.enrolled)}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        disabled={isLocked || loading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Banner Image *{" "}
                        {isEditing && "(Leave blank to keep same)"}
                      </label>
                      {bannerPreview && (
                        <div className="mt-1">
                          <img
                            src={bannerPreview}
                            alt="Banner preview"
                            className="w-full max-h-32 object-cover rounded-md mb-2"
                          />
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        disabled={isLocked || loading}
                        required={!isEditing}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Curriculum PDF *{" "}
                        {isEditing && "(Leave blank to keep same)"}
                      </label>
                      {pdfPreview && (
                        <div className="mt-1 text-sm text-gray-500 mb-2">
                          {pdfPreview}
                        </div>
                      )}
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handlePdfUpload}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        disabled={isLocked || loading}
                        required={!isEditing}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="recommended"
                          checked={formData.recommended}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          disabled={isLocked || loading}
                        />
                        <label className="ml-2 block text-sm text-gray-700">
                          Recommended
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="trending"
                          checked={formData.trending}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          disabled={isLocked || loading}
                        />
                        <label className="ml-2 block text-sm text-gray-700">
                          Trending
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="mostPurchased"
                          checked={formData.mostPurchased}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          disabled={isLocked || loading}
                        />
                        <label className="ml-2 block text-sm text-gray-700">
                          Most Purchased
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="topRanked"
                          checked={formData.topRanked}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          disabled={isLocked || loading}
                        />
                        <label className="ml-2 block text-sm text-gray-700">
                          Top Ranked
                        </label>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <button
                        type="submit"
                        disabled={isLocked || loading}
                        className={`flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                          isLocked || loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        }`}
                      >
                        {loading
                          ? "Processing..."
                          : isEditing
                          ? "Update Course"
                          : "Add Course"}
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        disabled={isLocked || loading}
                        className={`py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 ${
                          isLocked || loading
                            ? "bg-gray-100 cursor-not-allowed"
                            : "bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        }`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Courses List */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    All Courses
                  </h2>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500 mr-3">
                      {courses.length} courses
                    </p>
                    <button
                      onClick={fetchCourses}
                      disabled={loading}
                      className={`text-sm ${
                        loading
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-indigo-600 hover:text-indigo-800"
                      }`}
                    >
                      Refresh
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {courses.length === 0 ? (
                        <tr>
                          <td
                            colSpan="4"
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                          >
                            No courses available
                          </td>
                        </tr>
                      ) : (
                        courses.map((course, index) =>
                          course && course._id ? ( // Basic check
                            <tr key={course._id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                      className="h-10 w-10 rounded-md object-cover"
                                      src={
                                        safeString(course.bannerImage) ||
                                        "https://via.placeholder.com/40"
                                      }
                                      alt={safeString(course.title)}
                                      onError={(e) => {
                                        e.target.src =
                                          "https://via.placeholder.com/40";
                                      }}
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {safeString(course.title)}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {safeString(course.type)}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {safeString(course.category)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-wrap gap-1">
                                  {course.recommended && (
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                      Recommended
                                    </span>
                                  )}
                                  {course.trending && (
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                      Trending
                                    </span>
                                  )}
                                  {course.mostPurchased && (
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                      Popular
                                    </span>
                                  )}
                                  {course.topRanked && (
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                      Top Ranked
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                  onClick={() => editCourse(course)}
                                  disabled={isLocked || loading}
                                  className={`mr-3 ${
                                    isLocked || loading
                                      ? "text-gray-400 cursor-not-allowed"
                                      : "text-indigo-600 hover:text-indigo-900"
                                  }`}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => deleteCourse(course._id)}
                                  disabled={isLocked || loading}
                                  className={`${
                                    isLocked || loading
                                      ? "text-gray-400 cursor-not-allowed"
                                      : "text-red-600 hover:text-red-900"
                                  }`}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ) : (
                            <tr key={index}>
                              <td
                                colSpan="4"
                                className="px-6 py-4 whitespace-nowrap text-sm text-red-500"
                              >
                                Invalid course data at index {index}
                              </td>
                            </tr>
                          )
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === "categories" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Manage Categories (Local Storage)
            </h2>
            <p className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded-md mb-4">
              <strong>Warning:</strong> These categories are saved only in your
              browser (Local Storage). They are <strong>NOT</strong> connected
              to the database. Categories must match exactly what you type in
              the course form.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <h3 className="text-md font-medium text-gray-700 mb-2">
                    Current Categories
                  </h3>
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {categories
                      .filter((cat) => cat !== "All Courses")
                      .map((category, index) => (
                        <li
                          key={index}
                          className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                        >
                          <div className="w-0 flex-1 flex items-center">
                            {editingCategory === category ? (
                              <input
                                type="text"
                                value={editCategoryValue}
                                onChange={(e) =>
                                  setEditCategoryValue(e.target.value)
                                }
                                className="ml-2 flex-1 w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                disabled={isLocked || loading}
                              />
                            ) : (
                              <span className="ml-2 flex-1 w-0 truncate">
                                {category}
                              </span>
                            )}
                          </div>
                          <div className="ml-4 flex-shrink-0 flex space-x-2">
                            {editingCategory === category ? (
                              <>
                                <button
                                  onClick={saveEditCategory}
                                  disabled={isLocked || loading}
                                  className={`font-medium ${
                                    isLocked || loading
                                      ? "text-gray-400 cursor-not-allowed"
                                      : "text-green-600 hover:text-green-500"
                                  }`}
                                >
                                  Save
                                </button>
                                <button
                                  onClick={cancelEditCategory}
                                  disabled={isLocked || loading}
                                  className={`font-medium ${
                                    isLocked || loading
                                      ? "text-gray-400 cursor-not-allowed"
                                      : "text-gray-600 hover:text-gray-500"
                                  }`}
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => startEditCategory(category)}
                                  disabled={isLocked || loading}
                                  className={`font-medium ${
                                    isLocked || loading
                                      ? "text-gray-400 cursor-not-allowed"
                                      : "text-indigo-600 hover:text-indigo-500"
                                  }`}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => removeCategory(category)}
                                  disabled={isLocked || loading}
                                  className={`font-medium ${
                                    isLocked || loading
                                      ? "text-gray-400 cursor-not-allowed"
                                      : "text-red-600 hover:text-red-500"
                                  }`}
                                >
                                  Remove
                                </button>
                              </>
                            )}
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-md font-medium text-gray-700 mb-2">
                    Add New Category
                  </h3>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      placeholder="Category name"
                      disabled={isLocked || loading}
                    />
                    <button
                      onClick={addCategory}
                      disabled={isLocked || loading || !newCategory.trim()}
                      className={`inline-flex items-center px-3 rounded-r-md border border-l-0 ${
                        isLocked || loading || !newCategory.trim()
                          ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                          : "bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700"
                      }`}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

// Wrap AdminPanel with ErrorBoundary
const WrappedAdminPanel = () => (
  <ErrorBoundary>
    <AdminPanel />
  </ErrorBoundary>
);

export default WrappedAdminPanel;
