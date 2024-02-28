"use client";
import { SessionProvider } from "next-auth/react";
function AppProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AppProvider;
