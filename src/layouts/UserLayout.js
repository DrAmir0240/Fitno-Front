import React from "react";



import Sidebar from "@/components/layout/clubPanel/Sidebar";
import MobileMenu from "@/components/layout/userPanel/MobileMenu";
import Header from "@/components/layout/userPanel/Header";

const UserLayout = ({ children }) => {
  return (
    <div>
      <div className="mx-auto  max-w-[700px] m-auto">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
       

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg p-6">{children}</div>
          </main>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default UserLayout;
