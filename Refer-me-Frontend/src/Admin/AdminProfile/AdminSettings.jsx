import { useState } from "react";
import { loginUser } from "../../api/useradmin";

const AdminSettings = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handlePasswordUpdate = async () => {
    try {
      // Just demo: we "login" with current email+password
      const res = await loginUser({
        email: "admin@example.com", // fetch from context / auth state
        password: passwords.currentPassword,
      });
      alert("Password updated (fake demo): " + JSON.stringify(res));
    } catch (err) {
      alert("Error: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          System Settings
        </h2>

        {/* Security Settings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Security Settings
          </h3>
          <div className="space-y-3">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={passwords.currentPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={passwords.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <button
              onClick={handlePasswordUpdate}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
