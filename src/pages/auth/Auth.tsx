
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuthStore } from "@/lib/auth";

export default function Auth() {
  const { session, loading } = useAuthStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (session && !loading) {
      navigate("/");
    }
  }, [session, loading, navigate]);

  // Don't render anything while checking authentication status
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  // Only render the auth form if not authenticated
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm />
    </div>
  );
}
