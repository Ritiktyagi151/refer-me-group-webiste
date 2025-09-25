import { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any existing token when login page loads
    localStorage.removeItem("adminToken");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          if (
            formData.email === "ReferMe@gmail.com" &&
            formData.password === "referme@123"
          ) {
            resolve({ success: true });
          } else {
            resolve({ success: false, message: "Invalid credentials" });
          }
        }, 1000)
      );

      if (response.success) {
        localStorage.setItem("adminToken", "valid-auth-token");

        navigate("/admin/dashboard", { replace: true });
        // window.location.href = "/admin/dashboard";
      } else {
        setError(response.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError("");

  //   if (!formData.email || !formData.password) {
  //     setError("Please fill in all fields");
  //     setIsLoading(false);
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/api/users/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: formData.email,
  //         password: formData.password,
  //       }),
  //     });

  //     // Log the response for debugging
  //     console.log("Response status:", response.status);

  //     const data = await response.json();
  //     console.log("Response data:", data);

  //     if (response.ok && data.success) {
  //       localStorage.setItem("adminToken", data.token);
  //       navigate("/admin/dashboard", { replace: true });
  //     } else {
  //       setError(data.message || "Login failed");
  //     }
  //   } catch (err) {
  //     console.error("Login error details:", err);
  //     setError("Network error. Please try again later.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Login form */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6 shadow-xl animate-pulse">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Admin Portal
            </h2>
            <p className="text-gray-600 text-lg">
              Secure administrative access
            </p>
            <div className="mt-4 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-700 font-medium">
                🔒 Authorized Personnel Only
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" />
              <input
                type="email"
                name="email"
                placeholder="Admin Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Admin Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none text-gray-800 placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors duration-300"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  This is a secure admin portal. All login attempts are logged
                  and monitored.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Authenticating...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Secure Admin Login
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Need admin access? Contact your system administrator.
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
              <span>🔐 SSL Secured</span>
              <span>•</span>
              <span>📊 Activity Monitored</span>
              <span>•</span>
              <span>⚡ 2FA Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
