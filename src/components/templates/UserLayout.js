import React from "react";
import Header from "../organisms/Header";
import Sidebar from "../organisms/Sidebar";

const UserLayout = ({
  children,

  className = "",
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      </div>
    </div>
  );
};

export default UserLayout;
