import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function AdminLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear all authentication data
    localStorage.removeItem("adminToken");

    // Redirect to login after short delay
    const timer = setTimeout(() => {
      navigate("/login", { replace: true });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <LoadingSpinner text="Logging out..." />
      <p className="mt-4 text-gray-600">You will be redirected to login page</p>
    </div>
  );
}
