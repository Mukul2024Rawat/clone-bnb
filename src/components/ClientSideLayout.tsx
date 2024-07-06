"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

interface ClientSideLayoutProps {
  children: React.ReactNode;
}

const ClientSideLayout: React.FC<ClientSideLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const hideNavbarFooter =
    pathname.startsWith("/host/dashboard") ||
    pathname.startsWith("/user/dashboard") ||
    pathname.startsWith("/host/add-property") ||
    pathname.startsWith("/host/listings");

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default ClientSideLayout;
