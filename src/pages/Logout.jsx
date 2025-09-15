import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Clear any auth tokens or session data here
    localStorage.clear(); // or remove specific keys like localStorage.removeItem("token")

    // ✅ Redirect to Register page
    navigate("/register");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="text-lg text-gray-600">Logging out...</p>
    </div>
  );
}