import React, { useState, useEffect } from "react";

// Mock API service using localStorage
const mockApi = {
  delay: (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms)),

  // Our Story
  getOurStory: async () => {
    await mockApi.delay();
    return (
      JSON.parse(localStorage.getItem("ourStory")) || {
        title: "",
        content: "",
        imageUrl: "",
      }
    );
  },

  saveOurStory: async (data) => {
    await mockApi.delay();
    localStorage.setItem("ourStory", JSON.stringify(data));
    return data;
  },

  // Core Committee
  getCoreCommittee: async () => {
    await mockApi.delay();
    return JSON.parse(localStorage.getItem("coreCommittee")) || [];
  },

  addCoreMember: async (data) => {
    await mockApi.delay();
    const members = JSON.parse(localStorage.getItem("coreCommittee")) || [];
    const newMember = { ...data, id: Date.now().toString() };
    members.push(newMember);
    localStorage.setItem("coreCommittee", JSON.stringify(members));
    return newMember;
  },

  deleteCoreMember: async (id) => {
    await mockApi.delay();
    let members = JSON.parse(localStorage.getItem("coreCommittee")) || [];
    members = members.filter((m) => m.id !== id);
    localStorage.setItem("coreCommittee", JSON.stringify(members));
    return { success: true };
  },

  // Payment Policy
  getPaymentPolicy: async () => {
    await mockApi.delay();
    return (
      JSON.parse(localStorage.getItem("paymentPolicy")) || {
        title: "",
        introduction: "",
      }
    );
  },

  savePaymentPolicy: async (data) => {
    await mockApi.delay();
    localStorage.setItem("paymentPolicy", JSON.stringify(data));
    return data;
  },

  // What We Do
  getWhatWeDo: async () => {
    await mockApi.delay();
    return (
      JSON.parse(localStorage.getItem("whatWeDo")) || {
        title: "",
        introduction: "",
        items: [],
      }
    );
  },

  saveWhatWeDo: async (data) => {
    await mockApi.delay();
    localStorage.setItem("whatWeDo", JSON.stringify(data));
    return data;
  },

  addWhatWeDoItem: async (item) => {
    await mockApi.delay();
    const whatWeDo = JSON.parse(localStorage.getItem("whatWeDo")) || {
      title: "",
      introduction: "",
      items: [],
    };
    whatWeDo.items.push(item);
    localStorage.setItem("whatWeDo", JSON.stringify(whatWeDo));
    return whatWeDo;
  },

  deleteWhatWeDoItem: async (index) => {
    await mockApi.delay();
    const whatWeDo = JSON.parse(localStorage.getItem("whatWeDo")) || {
      title: "",
      introduction: "",
      items: [],
    };
    whatWeDo.items.splice(index, 1);
    localStorage.setItem("whatWeDo", JSON.stringify(whatWeDo));
    return whatWeDo;
  },
};

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("our-story");
  const [ourStory, setOurStory] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });
  const [coreMembers, setCoreMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    position: "",
    bio: "",
    imageUrl: "",
    order: 0,
  });
  const [paymentPolicy, setPaymentPolicy] = useState({
    title: "",
    introduction: "",
  });
  const [whatWeDo, setWhatWeDo] = useState({
    title: "",
    introduction: "",
    items: [],
  });
  const [newItem, setNewItem] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchOurStory(),
          fetchCoreCommittee(),
          fetchPaymentPolicy(),
          fetchWhatWeDo(),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Image upload handler (simulated)
  const handleImageUpload = async (file) => {
    setUploading(true);
    try {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Create a URL for the uploaded file
      const url = URL.createObjectURL(file);
      setUploading(false);
      return url;
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
      throw error;
    }
  };

  // =================== Our Story ===================
  const fetchOurStory = async () => {
    try {
      const data = await mockApi.getOurStory();
      setOurStory(data);
    } catch (err) {
      console.error("Error fetching Our Story:", err);
    }
  };

  const handleOurStorySubmit = async (e) => {
    e.preventDefault();
    try {
      await mockApi.saveOurStory(ourStory);
      alert("Our Story saved successfully!");
    } catch (err) {
      console.error("Error saving Our Story:", err);
      alert("Error saving Our Story");
    }
  };

  // =================== Core Committee ===================
  const fetchCoreCommittee = async () => {
    try {
      const data = await mockApi.getCoreCommittee();
      setCoreMembers(data);
    } catch (err) {
      console.error("Error fetching Core Committee:", err);
    }
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    try {
      await mockApi.addCoreMember(newMember);
      setNewMember({ name: "", position: "", bio: "", imageUrl: "", order: 0 });
      fetchCoreCommittee();
      alert("Member added successfully!");
    } catch (err) {
      console.error("Error adding member:", err);
      alert("Error adding member");
    }
  };

  const handleDeleteMember = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await mockApi.deleteCoreMember(id);
        fetchCoreCommittee();
        alert("Member deleted successfully!");
      } catch (err) {
        console.error("Error deleting member:", err);
        alert("Error deleting member");
      }
    }
  };

  // =================== Payment Policy ===================
  const fetchPaymentPolicy = async () => {
    try {
      const data = await mockApi.getPaymentPolicy();
      setPaymentPolicy(data);
    } catch (err) {
      console.error("Error fetching Payment Policy:", err);
    }
  };

  const handlePaymentPolicySubmit = async (e) => {
    e.preventDefault();
    try {
      await mockApi.savePaymentPolicy(paymentPolicy);
      alert("Payment Policy saved successfully!");
    } catch (err) {
      console.error("Error saving Payment Policy:", err);
      alert("Error saving Payment Policy");
    }
  };

  // =================== What We Do ===================
  const fetchWhatWeDo = async () => {
    try {
      const data = await mockApi.getWhatWeDo();
      setWhatWeDo(data);
    } catch (err) {
      console.error("Error fetching What We Do:", err);
    }
  };

  const handleWhatWeDoSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockApi.saveWhatWeDo(whatWeDo);
      alert("What We Do saved successfully!");
    } catch (err) {
      console.error("Error saving What We Do:", err);
      alert("Error saving What We Do");
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      await mockApi.addWhatWeDoItem(newItem);
      setNewItem("");
      fetchWhatWeDo();
      alert("Item added successfully!");
    } catch (err) {
      console.error("Error adding item:", err);
      alert("Error adding item");
    }
  };

  const handleDeleteItem = async (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await mockApi.deleteWhatWeDoItem(index);
        fetchWhatWeDo();
        alert("Item deleted successfully!");
      } catch (err) {
        console.error("Error deleting item:", err);
        alert("Error deleting item");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Loading admin panel...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            About Page Admin Panel
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              "our-story",
              "core-committee",
              "payment-policy",
              "what-we-do",
            ].map((tab) => (
              <button
                key={tab}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ))}
          </nav>
        </div>

        {/* Our Story Section */}
        {activeTab === "our-story" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Our Story</h2>
            <form onSubmit={handleOurStorySubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ourStoryTitle"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="ourStoryTitle"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={ourStory.title}
                  onChange={(e) =>
                    setOurStory({ ...ourStory, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ourStoryContent"
                >
                  Content
                </label>
                <textarea
                  id="ourStoryContent"
                  rows="6"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={ourStory.content}
                  onChange={(e) =>
                    setOurStory({ ...ourStory, content: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Image URL"
                      value={ourStory.imageUrl}
                      onChange={(e) =>
                        setOurStory({ ...ourStory, imageUrl: e.target.value })
                      }
                    />
                  </div>
                  <span className="text-gray-500">or</span>
                  <div>
                    <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                      Upload Image
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={async (e) => {
                          if (e.target.files[0]) {
                            try {
                              const url = await handleImageUpload(
                                e.target.files[0]
                              );
                              setOurStory({ ...ourStory, imageUrl: url });
                            } catch (error) {
                              alert("Error uploading image");
                            }
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
                {uploading && (
                  <p className="text-gray-500 text-sm mt-2">
                    Uploading image...
                  </p>
                )}
                {ourStory.imageUrl && (
                  <div className="mt-2">
                    <img
                      src={ourStory.imageUrl}
                      alt="Preview"
                      className="h-40 object-cover rounded"
                    />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Our Story
              </button>
            </form>
          </div>
        )}

        {/* Core Committee Section */}
        {activeTab === "core-committee" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Core Committee</h2>

            {/* Add New Member Form */}
            <form
              onSubmit={handleAddMember}
              className="mb-8 p-4 border rounded-lg"
            >
              <h3 className="text-lg font-medium mb-3">Add New Member</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="memberName"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="memberName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={newMember.name}
                    onChange={(e) =>
                      setNewMember({ ...newMember, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="memberPosition"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    id="memberPosition"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={newMember.position}
                    onChange={(e) =>
                      setNewMember({ ...newMember, position: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="memberBio"
                >
                  Bio
                </label>
                <textarea
                  id="memberBio"
                  rows="3"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newMember.bio}
                  onChange={(e) =>
                    setNewMember({ ...newMember, bio: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Image URL"
                      value={newMember.imageUrl}
                      onChange={(e) =>
                        setNewMember({ ...newMember, imageUrl: e.target.value })
                      }
                    />
                  </div>
                  <span className="text-gray-500">or</span>
                  <div>
                    <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                      Upload
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={async (e) => {
                          if (e.target.files[0]) {
                            try {
                              const url = await handleImageUpload(
                                e.target.files[0]
                              );
                              setNewMember({ ...newMember, imageUrl: url });
                            } catch (error) {
                              alert("Error uploading image");
                            }
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
                {uploading && (
                  <p className="text-gray-500 text-sm mt-2">
                    Uploading image...
                  </p>
                )}
                {newMember.imageUrl && (
                  <div className="mt-2">
                    <img
                      src={newMember.imageUrl}
                      alt="Preview"
                      className="h-40 object-cover rounded"
                    />
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="memberOrder"
                >
                  Display Order
                </label>
                <input
                  type="number"
                  id="memberOrder"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newMember.order}
                  onChange={(e) =>
                    setNewMember({
                      ...newMember,
                      order: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Member
              </button>
            </form>

            {/* Members List */}
            <h3 className="text-lg font-medium mb-3">Committee Members</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {coreMembers.map((member) => (
                    <tr key={member.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {member.imageUrl && (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {member.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {member.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {member.order}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDeleteMember(member.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Payment Policy Section */}
        {activeTab === "payment-policy" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Policy</h2>

            {/* Main Policy Form */}
            <form onSubmit={handlePaymentPolicySubmit} className="mb-8">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="policyTitle"
                >
                  Policy Title
                </label>
                <input
                  type="text"
                  id="policyTitle"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={paymentPolicy.title}
                  onChange={(e) =>
                    setPaymentPolicy({
                      ...paymentPolicy,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="policyIntroduction"
                >
                  Introduction
                </label>
                <textarea
                  id="policyIntroduction"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={paymentPolicy.introduction}
                  onChange={(e) =>
                    setPaymentPolicy({
                      ...paymentPolicy,
                      introduction: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Payment Policy
              </button>
            </form>
          </div>
        )}

        {/* What We Do Section */}
        {activeTab === "what-we-do" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">What We Do</h2>

            {/* Main Content Form */}
            <form onSubmit={handleWhatWeDoSubmit} className="mb-8">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="whatWeDoTitle"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="whatWeDoTitle"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={whatWeDo.title}
                  onChange={(e) =>
                    setWhatWeDo({ ...whatWeDo, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="whatWeDoIntroduction"
                >
                  Introduction
                </label>
                <textarea
                  id="whatWeDoIntroduction"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={whatWeDo.introduction}
                  onChange={(e) =>
                    setWhatWeDo({ ...whatWeDo, introduction: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save What We Do
              </button>
            </form>

            {/* Add Item Form */}
            <form
              onSubmit={handleAddItem}
              className="mb-8 p-4 border rounded-lg"
            >
              <h3 className="text-lg font-medium mb-3">Add Activity Item</h3>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="itemText"
                >
                  Item Text
                </label>
                <input
                  type="text"
                  id="itemText"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Item
              </button>
            </form>

            {/* Items List */}
            <h3 className="text-lg font-medium mb-3">Activity Items</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {whatWeDo.items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{item}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDeleteItem(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
