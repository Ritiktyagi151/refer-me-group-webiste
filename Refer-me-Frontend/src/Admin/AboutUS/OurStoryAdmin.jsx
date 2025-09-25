import { useState, useEffect } from "react";
import { FaSave, FaLock, FaUnlock, FaPlus, FaTrash } from "react-icons/fa";
import {
  getAbout,
  saveOurStory,
  getCoreCommittee,
  addCoreMember,
  updateCoreMember,
  deleteCoreMember,
  savePaymentPolicy,
  addPaymentSection,
  updatePaymentSection,
  deletePaymentSection,
  saveWhatWeDo,
  addWhatWeDoItem,
  deleteWhatWeDoItem,
} from "../../api/aboutApi";

const AdminPanel = () => {
  const [editable, setEditable] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // ==================== Data States ====================
  const [heroSection, setHeroSection] = useState({
    title: "",
    highlightedText: "",
    description: "",
    videoUrl: "",
  });

  const [ourStory, setOurStory] = useState({
    title: "",
    content: [],
    stats: { years: "", yearsDescription: "" },
    credentials: [],
    impactStats: {
      trainedProfessionals: "",
      trainingHours: "",
      countries: "",
      corporateTrainings: "",
    },
    community: {
      title: "",
      telegram: "",
      whatsapp: "",
      linkedInGroups: "",
      facebookFollowers: "",
    },
    whyChooseUs: [],
  });

  const [coreCommittee, setCoreCommittee] = useState([]);
  const [paymentPolicy, setPaymentPolicy] = useState({
    header: {},
    sections: [],
    contactEmail: "",
  });
  const [whatWeDo, setWhatWeDo] = useState({
    title: "",
    description: "",
    items: [],
  });

  // ==================== Fetch About Data ====================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAbout();
        if (data.heroSection) setHeroSection(data.heroSection);
        if (data.ourStory) setOurStory(data.ourStory);
        if (data.coreCommittee) setCoreCommittee(data.coreCommittee);
        if (data.paymentPolicy) setPaymentPolicy(data.paymentPolicy);
        if (data.whatWeDo) setWhatWeDo(data.whatWeDo);
      } catch (err) {
        console.error("Error fetching About data:", err);
      }
    };
    fetchData();
  }, []);

  // ==================== Handlers ====================
  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroSection((prev) => ({ ...prev, [name]: value }));
  };

  const handleOurStoryChange = (e) => {
    const { name, value } = e.target;
    setOurStory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveOurStory = async () => {
    try {
      await saveOurStory(ourStory);
      alert("Our Story saved successfully!");
    } catch (err) {
      console.error("Error saving Our Story:", err);
    }
  };

  const handleAddCoreMember = async () => {
    const newMember = { name: "", role: "" };
    try {
      const updated = await addCoreMember(newMember);
      setCoreCommittee(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateCoreMember = async (id, field, value) => {
    try {
      const member = coreCommittee.find((m) => m._id === id);
      if (!member) return;
      const updated = await updateCoreMember(id, { ...member, [field]: value });
      setCoreCommittee(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCoreMember = async (id) => {
    try {
      const updated = await deleteCoreMember(id);
      setCoreCommittee(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddPaymentSection = async () => {
    const newSection = { title: "", icon: "", color: "", content: [] };
    try {
      const updated = await addPaymentSection(newSection);
      setPaymentPolicy((prev) => ({ ...prev, sections: updated }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePaymentSection = async (id) => {
    try {
      const updated = await deletePaymentSection(id);
      setPaymentPolicy((prev) => ({ ...prev, sections: updated }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddWhatWeDoItem = async () => {
    const item = "New Item";
    try {
      const updated = await addWhatWeDoItem(item);
      setWhatWeDo((prev) => ({ ...prev, items: updated }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteWhatWeDoItem = async (index) => {
    try {
      const updated = await deleteWhatWeDoItem(index);
      setWhatWeDo((prev) => ({ ...prev, items: updated }));
    } catch (err) {
      console.error(err);
    }
  };

  // ==================== Render ====================
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-purple-800 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <button
          onClick={() => setEditable(!editable)}
          className={`px-4 py-2 rounded-md flex items-center ${
            editable ? "bg-green-600" : "bg-gray-700"
          }`}
        >
          {editable ? (
            <FaUnlock className="mr-2" />
          ) : (
            <FaLock className="mr-2" />
          )}
          {editable ? "Editing" : "Locked"}
        </button>
      </header>

      <div className="container mx-auto p-4 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-lg shadow-md p-4 mr-4">
          <ul className="space-y-2">
            {[
              "hero",
              "ourStory",
              "coreCommittee",
              "paymentPolicy",
              "whatWeDo",
            ].map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => setActiveSection(sec)}
                  className={`w-full text-left p-2 rounded-md ${
                    activeSection === sec
                      ? "bg-purple-100 text-purple-800"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {sec === "hero"
                    ? "Hero Section"
                    : sec === "ourStory"
                    ? "Our Story"
                    : sec === "coreCommittee"
                    ? "Core Committee"
                    : sec === "paymentPolicy"
                    ? "Payment Policy"
                    : "What We Do"}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Hero Section */}
          {activeSection === "hero" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-800 border-b pb-2">
                Hero Section
              </h2>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  name="title"
                  value={heroSection.title}
                  onChange={handleHeroChange}
                  disabled={!editable}
                  className="w-full p-2 border rounded-md bg-gray-50"
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="highlightedText"
                  value={heroSection.highlightedText}
                  onChange={handleHeroChange}
                  disabled={!editable}
                  className="w-full p-2 border rounded-md bg-gray-50"
                  placeholder="Highlighted Text"
                />
                <textarea
                  name="description"
                  value={heroSection.description}
                  onChange={handleHeroChange}
                  disabled={!editable}
                  rows={5}
                  className="w-full p-2 border rounded-md bg-gray-50"
                  placeholder="Description"
                />
                <input
                  type="text"
                  name="videoUrl"
                  value={heroSection.videoUrl}
                  onChange={handleHeroChange}
                  disabled={!editable}
                  className="w-full p-2 border rounded-md bg-gray-50"
                  placeholder="Video URL"
                />
              </div>

              {/* Preview */}
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Preview
              </h3>
              <div className="p-4 border rounded bg-gray-50">
                <h4 className="font-bold">{heroSection.title}</h4>
                <p className="text-purple-600">{heroSection.highlightedText}</p>
                <p>{heroSection.description}</p>
                {heroSection.videoUrl && (
                  <a
                    href={heroSection.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600"
                  >
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Our Story Section */}
          {activeSection === "ourStory" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-800 border-b pb-2">
                Our Story
              </h2>
              <input
                type="text"
                name="title"
                value={ourStory.title}
                onChange={handleOurStoryChange}
                disabled={!editable}
                className="w-full p-2 border rounded-md bg-gray-50 mb-2"
                placeholder="Story Title"
              />
              <textarea
                name="content"
                value={ourStory.content.join("\n")}
                onChange={(e) =>
                  setOurStory((prev) => ({
                    ...prev,
                    content: e.target.value.split("\n"),
                  }))
                }
                disabled={!editable}
                rows={8}
                className="w-full p-2 border rounded-md bg-gray-50 mb-2"
                placeholder="Story Content (each line becomes array item)"
              />
              <button
                onClick={handleSaveOurStory}
                disabled={!editable}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center mb-4"
              >
                <FaSave className="mr-2" /> Save Our Story
              </button>

              {/* Preview */}
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Preview
              </h3>
              <div className="p-4 border rounded bg-gray-50">
                <h4 className="font-bold">{ourStory.title}</h4>
                {ourStory.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
                <p className="mt-2 text-sm text-gray-600">
                  {ourStory.stats.years} - {ourStory.stats.yearsDescription}
                </p>
              </div>
            </div>
          )}

          {/* Core Committee Section */}
          {activeSection === "coreCommittee" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-800 border-b pb-2">
                Core Committee
              </h2>
              <button
                onClick={handleAddCoreMember}
                disabled={!editable}
                className="px-3 py-1 bg-green-600 text-white rounded-md flex items-center mb-4"
              >
                <FaPlus className="mr-2" /> Add Member
              </button>

              {/* Editable List */}
              <div className="space-y-2 mb-6">
                {coreCommittee.map((member) => (
                  <div
                    key={member._id}
                    className="border p-2 rounded-md space-y-2"
                  >
                    <input
                      type="text"
                      value={member.name}
                      disabled={!editable}
                      onChange={(e) =>
                        handleUpdateCoreMember(
                          member._id,
                          "name",
                          e.target.value
                        )
                      }
                      className="w-full p-1 border rounded"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      value={member.role}
                      disabled={!editable}
                      onChange={(e) =>
                        handleUpdateCoreMember(
                          member._id,
                          "role",
                          e.target.value
                        )
                      }
                      className="w-full p-1 border rounded"
                      placeholder="Role"
                    />
                    <input
                      type="text"
                      value={member.image || ""}
                      disabled={!editable}
                      onChange={(e) =>
                        handleUpdateCoreMember(
                          member._id,
                          "image",
                          e.target.value
                        )
                      }
                      className="w-full p-1 border rounded"
                      placeholder="Image URL"
                    />
                    <input
                      type="text"
                      value={member.video || ""}
                      disabled={!editable}
                      onChange={(e) =>
                        handleUpdateCoreMember(
                          member._id,
                          "video",
                          e.target.value
                        )
                      }
                      className="w-full p-1 border rounded"
                      placeholder="Video URL"
                    />
                    <button
                      onClick={() => handleDeleteCoreMember(member._id)}
                      disabled={!editable}
                      className="px-2 py-1 bg-red-600 text-white rounded-md"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                ))}
              </div>

              {/* Preview */}
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Preview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreCommittee.map((member) => (
                  <div
                    key={member._id}
                    className="p-4 border rounded bg-gray-50 text-center"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
                    />
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    {member.video && (
                      <a
                        href={member.video}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-blue-600 mt-2"
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payment Policy Section */}
          {activeSection === "paymentPolicy" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-800 border-b pb-2">
                Payment Policy
              </h2>
              <button
                onClick={handleAddPaymentSection}
                disabled={!editable}
                className="px-3 py-1 bg-green-600 text-white rounded-md flex items-center mb-4"
              >
                <FaPlus className="mr-2" /> Add Section
              </button>
              <div className="space-y-2 mb-6">
                {paymentPolicy.sections.map((sec) => (
                  <div
                    key={sec._id}
                    className="border p-2 rounded-md flex justify-between items-center"
                  >
                    <span>{sec.title || "Untitled Section"}</span>
                    <button
                      onClick={() => handleDeletePaymentSection(sec._id)}
                      disabled={!editable}
                      className="px-2 py-1 bg-red-600 text-white rounded-md"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>

              {/* Preview */}
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Preview
              </h3>
              <div className="space-y-3">
                {paymentPolicy.sections.map((sec) => (
                  <div key={sec._id} className="p-3 border rounded bg-gray-50">
                    <h4 className="font-bold">{sec.title}</h4>
                    <p className="text-sm text-gray-600">
                      Icon: {sec.icon}, Color: {sec.color}
                    </p>
                    <ul className="list-disc pl-4 text-sm">
                      {sec.content?.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What We Do Section */}
          {activeSection === "whatWeDo" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-800 border-b pb-2">
                What We Do
              </h2>
              <button
                onClick={handleAddWhatWeDoItem}
                disabled={!editable}
                className="px-3 py-1 bg-green-600 text-white rounded-md flex items-center mb-4"
              >
                <FaPlus className="mr-2" /> Add Item
              </button>
              <div className="space-y-2 mb-6">
                {whatWeDo.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="border p-2 rounded-md flex justify-between items-center"
                  >
                    <span>{item}</span>
                    <button
                      onClick={() => handleDeleteWhatWeDoItem(idx)}
                      disabled={!editable}
                      className="px-2 py-1 bg-red-600 text-white rounded-md"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>

              {/* Preview */}
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Preview
              </h3>
              <div className="p-4 border rounded bg-gray-50">
                <h4 className="font-bold">{whatWeDo.title}</h4>
                <p className="text-sm mb-2">{whatWeDo.description}</p>
                <ul className="list-disc pl-5">
                  {whatWeDo.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
