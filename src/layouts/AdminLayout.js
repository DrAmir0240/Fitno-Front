import "@/app/globals.css";
import { SidebarProvider } from "@/components/context/SidebarContext";
import Sidebar from "@/components/layout/Admin/Sidebar";
import Header from "@/components/layout/clubPanel/Header";

import MobileMenu from "@/components/layout/userPanel/MobileMenu";

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <div>
        <div className="mx-auto min-h-screen w-full   m-auto">
          <div className="flex gap-8">
            {/* Sidebar Navigation */}
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 max-w-[1250px] mx-auto pb-30">
              <Header />
              <div className="bg-white rounded-lg p-6">{children}</div>
            </main>
          </div>

          {/* Mobile Menu */}
          <MobileMenu className="md:hidden" />
        </div>
      </div>
    </SidebarProvider>
  );
}
