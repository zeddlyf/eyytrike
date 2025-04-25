
import { NavLink } from "react-router-dom";
import { Home, Users, Car, CreditCard, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <nav className="space-y-6">
        <NavLink to="/" className="flex items-center space-x-2 hover:text-gray-300">
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/users" className="flex items-center space-x-2 hover:text-gray-300">
          <Users size={20} />
          <span>Users</span>
        </NavLink>
        <NavLink to="/trips" className="flex items-center space-x-2 hover:text-gray-300">
          <Car size={20} />
          <span>Trips</span>
        </NavLink>
        <NavLink to="/payments" className="flex items-center space-x-2 hover:text-gray-300">
          <CreditCard size={20} />
          <span>Payments</span>
        </NavLink>
        <Button
          variant="ghost"
          className="w-full justify-start text-white hover:text-gray-300"
          onClick={handleLogout}
        >
          <LogOut size={20} className="mr-2" />
          Logout
        </Button>
      </nav>
    </div>
  );
}
