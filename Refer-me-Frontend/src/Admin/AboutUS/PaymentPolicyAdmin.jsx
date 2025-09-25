import React, { useState, useEffect } from "react";

const AdminPaymentPolicy = () => {
  // Initial data structure
  const initialData = {
    header: {
      title: "Payment, Refund & Returns Policy",
      subtitle: "Clear guidelines for your transactions with us",
    },
    sections: [
      {
        id: 1,
        title: "Overview",
        icon: "info",
        color: "indigo",
        content: [
          "Our refund and returns policy lasts 1 or 2 days. If 2 days have passed since your purchase, we can't offer you a full refund or exchange.",
          "To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        ],
      },
      {
        id: 2,
        title: "Non-Returnable Items",
        icon: "cancel",
        color: "red",
        content: [
          "Several types of goods are exempt from being returned:",
          {
            type: "list",
            items: [
              "Hazardous materials or flammable liquids/gases",
              "Gift cards",
              "Downloadable software products",
            ],
          },
          "To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer.",
        ],
      },
      {
        id: 3,
        title: "Refunds",
        icon: "check",
        color: "green",
        content: [
          "Once your return is received and inspected, we will email you about receipt of your returned item and notify you of the approval or rejection of your refund.",
          "If approved, your refund will be processed and credited to your original payment method within a certain number of days.",
        ],
      },
      {
        id: 4,
        title: "Late or Missing Refunds",
        icon: "time",
        color: "blue",
        content: [
          "If you haven't received a refund:",
          {
            type: "ordered-list",
            items: [
              "Check your bank account again",
              "Contact your credit card company (processing time may be required)",
              "Contact your bank (processing time may be required)",
              "If still unresolved, contact us at contact@refermegroup.com",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Sale Items",
        icon: "sale",
        color: "purple",
        content: [
          "Only regular priced items may be refunded. Sale items cannot be refunded.",
        ],
      },
      {
        id: 6,
        title: "Exchanges",
        icon: "exchange",
        color: "cyan",
        content: [
          "We only replace items if they are defective or damaged. If you need to exchange for the same item, email us at contact@refermegroup.com.",
        ],
      },
      {
        id: 7,
        title: "Gifts",
        icon: "gift",
        color: "pink",
        content: [
          "If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift credit for the value of your return. Once received, a gift certificate will be mailed to you.",
          "If not marked as a gift or shipped to the gift giver first, we will refund the gift giver who will be notified of your return.",
        ],
      },
      {
        id: 8,
        title: "Need Help?",
        icon: "help",
        color: "gray",
        content: [
          "Contact us at contact@refermegroup.com for questions about refunds and returns.",
        ],
      },
    ],
    contactEmail: "contact@refermegroup.com",
  };

  const [policyData, setPolicyData] = useState(initialData);
  const [editingSection, setEditingSection] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Handle input changes for section content
  const handleContentChange = (sectionId, contentIndex, newValue) => {
    if (isLocked) return;

    setPolicyData((prev) => {
      const updatedSections = [...prev.sections];
      const sectionIndex = updatedSections.findIndex((s) => s.id === sectionId);

      if (
        typeof updatedSections[sectionIndex].content[contentIndex] === "object"
      ) {
        // For list items
        updatedSections[sectionIndex].content[contentIndex].items =
          newValue.split("\n");
      } else {
        // For regular text
        updatedSections[sectionIndex].content[contentIndex] = newValue;
      }

      return { ...prev, sections: updatedSections };
    });
  };

  // Handle header changes
  const handleHeaderChange = (field, value) => {
    if (isLocked) return;

    setPolicyData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        [field]: value,
      },
    }));
  };

  // Handle contact email change
  const handleEmailChange = (e) => {
    if (isLocked) return;

    setPolicyData((prev) => ({
      ...prev,
      contactEmail: e.target.value,
    }));
  };

  // Add a new section
  const addNewSection = () => {
    if (isLocked) return;

    const newId = Math.max(...policyData.sections.map((s) => s.id)) + 1;
    const newSection = {
      id: newId,
      title: "New Section",
      icon: "info",
      color: "gray",
      content: ["Edit this section content"],
    };

    setPolicyData((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
    }));
  };

  // Delete a section
  const deleteSection = (sectionId) => {
    if (isLocked) return;

    setPolicyData((prev) => ({
      ...prev,
      sections: prev.sections.filter((s) => s.id !== sectionId),
    }));
  };

  // Move section up
  const moveSectionUp = (sectionId) => {
    if (isLocked) return;

    setPolicyData((prev) => {
      const sections = [...prev.sections];
      const index = sections.findIndex((s) => s.id === sectionId);

      if (index > 0) {
        [sections[index], sections[index - 1]] = [
          sections[index - 1],
          sections[index],
        ];
      }

      return { ...prev, sections };
    });
  };

  // Move section down
  const moveSectionDown = (sectionId) => {
    if (isLocked) return;

    setPolicyData((prev) => {
      const sections = [...prev.sections];
      const index = sections.findIndex((s) => s.id === sectionId);

      if (index < sections.length - 1) {
        [sections[index], sections[index + 1]] = [
          sections[index + 1],
          sections[index],
        ];
      }

      return { ...prev, sections };
    });
  };

  // Save to JSON
  const saveToJson = () => {
    const dataStr = JSON.stringify(policyData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = "payment-policy.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  // Reset to initial data
  const resetData = () => {
    if (isLocked) return;
    setPolicyData(initialData);
  };

  // Get icon component
  const getIcon = (iconName) => {
    switch (iconName) {
      case "info":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "cancel":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        );
      case "check":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "time":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "sale":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        );
      case "exchange":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        );
      case "gift":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v13m8-8v8m-16-8v8M4 12l8-8 8 8"
            />
          </svg>
        );
      case "help":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  // Get color classes
  const getColorClasses = (color) => {
    const bgColors = {
      indigo: "bg-indigo-100",
      red: "bg-red-100",
      green: "bg-green-100",
      blue: "bg-blue-100",
      purple: "bg-purple-100",
      cyan: "bg-cyan-100",
      pink: "bg-pink-100",
      gray: "bg-gray-100",
    };

    const textColors = {
      indigo: "text-indigo-600",
      red: "text-red-600",
      green: "text-green-600",
      blue: "text-blue-600",
      purple: "text-purple-600",
      cyan: "text-cyan-600",
      pink: "text-pink-600",
      gray: "text-gray-600",
    };

    return {
      bg: bgColors[color] || "bg-gray-100",
      text: textColors[color] || "text-gray-600",
    };
  };

  // Render content input based on type
  const renderContentInput = (section, contentIndex, content) => {
    if (typeof content === "object" && content.type === "list") {
      return (
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            List Items (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            value={content.items.join("\n")}
            onChange={(e) =>
              handleContentChange(section.id, contentIndex, e.target.value)
            }
            disabled={isLocked}
          />
        </div>
      );
    } else if (typeof content === "object" && content.type === "ordered-list") {
      return (
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ordered List Items (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            value={content.items.join("\n")}
            onChange={(e) =>
              handleContentChange(section.id, contentIndex, e.target.value)
            }
            disabled={isLocked}
          />
        </div>
      );
    } else {
      return (
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
          value={content}
          onChange={(e) =>
            handleContentChange(section.id, contentIndex, e.target.value)
          }
          disabled={isLocked}
        />
      );
    }
  };

  // Render preview
  const renderPreview = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-indigo-700 px-6 py-8 sm:px-10 sm:py-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {policyData.header.title}
            </h1>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              {policyData.header.subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-12 space-y-12">
            {policyData.sections.map((section) => {
              const colors = getColorClasses(section.color);

              return (
                <section key={section.id} className="group">
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 ${colors.bg} p-2 rounded-lg`}
                    >
                      {getIcon(section.icon)}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        {section.title}
                      </h2>
                      <div className="space-y-4 text-gray-600">
                        {section.content.map((content, contentIndex) => {
                          if (
                            typeof content === "object" &&
                            content.type === "list"
                          ) {
                            return (
                              <div key={contentIndex}>
                                <p>{contentIndex === 0 ? content : ""}</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-indigo-400">
                                  {content.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            );
                          } else if (
                            typeof content === "object" &&
                            content.type === "ordered-list"
                          ) {
                            return (
                              <div key={contentIndex}>
                                <p>{contentIndex === 0 ? content : ""}</p>
                                <ol className="list-decimal pl-5 space-y-2 marker:font-medium marker:text-indigo-500">
                                  {content.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ol>
                              </div>
                            );
                          } else {
                            return <p key={contentIndex}>{content}</p>;
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Payment Policy Admin
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsLocked(!isLocked)}
              className={`px-4 py-2 rounded-md ${
                isLocked
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-yellow-500 hover:bg-yellow-600"
              } text-white`}
            >
              {isLocked ? "Unlock Editing" : "Lock Editing"}
            </button>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
            <button
              onClick={saveToJson}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md"
            >
              Save to JSON
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showPreview ? (
          renderPreview()
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            {/* Header Settings */}
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Header Settings
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    value={policyData.header.title}
                    onChange={(e) =>
                      handleHeaderChange("title", e.target.value)
                    }
                    disabled={isLocked}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    value={policyData.header.subtitle}
                    onChange={(e) =>
                      handleHeaderChange("subtitle", e.target.value)
                    }
                    disabled={isLocked}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    value={policyData.contactEmail}
                    onChange={handleEmailChange}
                    disabled={isLocked}
                  />
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="px-4 py-5 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Policy Sections
                </h3>
                <button
                  onClick={addNewSection}
                  className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-sm"
                  disabled={isLocked}
                >
                  Add Section
                </button>
              </div>

              <div className="space-y-6">
                {policyData.sections.map((section) => (
                  <div
                    key={section.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Section Title
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            value={section.title}
                            onChange={(e) => {
                              if (isLocked) return;
                              setPolicyData((prev) => {
                                const updatedSections = [...prev.sections];
                                const sectionIndex = updatedSections.findIndex(
                                  (s) => s.id === section.id
                                );
                                updatedSections[sectionIndex].title =
                                  e.target.value;
                                return { ...prev, sections: updatedSections };
                              });
                            }}
                            disabled={isLocked}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Icon
                            </label>
                            <select
                              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                              value={section.icon}
                              onChange={(e) => {
                                if (isLocked) return;
                                setPolicyData((prev) => {
                                  const updatedSections = [...prev.sections];
                                  const sectionIndex =
                                    updatedSections.findIndex(
                                      (s) => s.id === section.id
                                    );
                                  updatedSections[sectionIndex].icon =
                                    e.target.value;
                                  return { ...prev, sections: updatedSections };
                                });
                              }}
                              disabled={isLocked}
                            >
                              <option value="info">Info</option>
                              <option value="cancel">Cancel</option>
                              <option value="check">Check</option>
                              <option value="time">Time</option>
                              <option value="sale">Sale</option>
                              <option value="exchange">Exchange</option>
                              <option value="gift">Gift</option>
                              <option value="help">Help</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Color
                            </label>
                            <select
                              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                              value={section.color}
                              onChange={(e) => {
                                if (isLocked) return;
                                setPolicyData((prev) => {
                                  const updatedSections = [...prev.sections];
                                  const sectionIndex =
                                    updatedSections.findIndex(
                                      (s) => s.id === section.id
                                    );
                                  updatedSections[sectionIndex].color =
                                    e.target.value;
                                  return { ...prev, sections: updatedSections };
                                });
                              }}
                              disabled={isLocked}
                            >
                              <option value="indigo">Indigo</option>
                              <option value="red">Red</option>
                              <option value="green">Green</option>
                              <option value="blue">Blue</option>
                              <option value="purple">Purple</option>
                              <option value="cyan">Cyan</option>
                              <option value="pink">Pink</option>
                              <option value="gray">Gray</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Content
                          </label>
                          <div className="space-y-4 mt-2">
                            {section.content.map((content, contentIndex) => (
                              <div
                                key={contentIndex}
                                className="border border-gray-200 rounded p-3"
                              >
                                {renderContentInput(
                                  section,
                                  contentIndex,
                                  content
                                )}
                                <button
                                  onClick={() => {
                                    if (isLocked) return;
                                    setPolicyData((prev) => {
                                      const updatedSections = [
                                        ...prev.sections,
                                      ];
                                      const sectionIndex =
                                        updatedSections.findIndex(
                                          (s) => s.id === section.id
                                        );
                                      updatedSections[
                                        sectionIndex
                                      ].content.splice(contentIndex, 1);
                                      return {
                                        ...prev,
                                        sections: updatedSections,
                                      };
                                    });
                                  }}
                                  className="mt-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm"
                                  disabled={isLocked}
                                >
                                  Remove Content
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={() => {
                                if (isLocked) return;
                                setPolicyData((prev) => {
                                  const updatedSections = [...prev.sections];
                                  const sectionIndex =
                                    updatedSections.findIndex(
                                      (s) => s.id === section.id
                                    );
                                  updatedSections[sectionIndex].content.push(
                                    "New content"
                                  );
                                  return { ...prev, sections: updatedSections };
                                });
                              }}
                              className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm"
                              disabled={isLocked}
                            >
                              Add Content
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="ml-4 flex flex-col space-y-2">
                        <button
                          onClick={() => moveSectionUp(section.id)}
                          className="p-1 bg-gray-200 hover:bg-gray-300 rounded"
                          disabled={isLocked}
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => moveSectionDown(section.id)}
                          className="p-1 bg-gray-200 hover:bg-gray-300 rounded"
                          disabled={isLocked}
                        >
                          ↓
                        </button>
                        <button
                          onClick={() => deleteSection(section.id)}
                          className="p-1 bg-red-500 hover:bg-red-600 text-white rounded"
                          disabled={isLocked}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={resetData}
                className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                disabled={isLocked}
              >
                Reset
              </button>
              <button
                onClick={saveToJson}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save to JSON
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPaymentPolicy;
