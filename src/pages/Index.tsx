
import { useAuthStore } from "@/lib/auth";

const Index = () => {
  const { session } = useAuthStore();

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Welcome to EyyTrike Admin Dashboard</h1>
      {session ? (
        <p className="text-gray-600">
          Logged in as: {session.user.email}
        </p>
      ) : (
        <p className="text-gray-600">
          Please log in to access the dashboard.
        </p>
      )}
    </div>
  );
};

export default Index;
