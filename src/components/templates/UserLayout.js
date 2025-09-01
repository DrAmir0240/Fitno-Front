import React from "react";
import Header from "../organisms/Header";
import Sidebar from "../organisms/Sidebar";
import { MobileMenu } from "../molecules";

const UserLayout = ({
  children,
  className = "",
}) => {
  return (
    <div className={`  ${className}`}>
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto  max-w-[700px] m-auto">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg p-6">
              {children}
            </div>
          </main>
        </div>

        
      {/* Mobile Menu */}
      <MobileMenu />
      </div>
    </div>
  );
};

export default UserLayout;
