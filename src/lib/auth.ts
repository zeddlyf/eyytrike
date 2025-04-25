
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthState {
  session: Session | null;
  loading: boolean;
  setSession: (session: Session | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  loading: true,
  setSession: (session) => set({ session }),
  setLoading: (loading) => set({ loading }),
  logout: async () => {
    await supabase.auth.signOut();
    set({ session: null });
  },
}));
