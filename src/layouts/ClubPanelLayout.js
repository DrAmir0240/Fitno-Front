import "@/app/globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import Header from "@/components/layout/clubPanel/Header";
import Sidebar from "@/components/layout/clubPanel/Sidebar";
import MobileMenu from "@/components/layout/userPanel/MobileMenu";

export default function ClubPanelLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="mx-auto w-full m-auto">
          <div className="flex ">
            {/* Sidebar Navigation */}
            <Sidebar />
            
            {/* Main Content */}
            <main className="flex-1 max-w-[1250px] mx-auto pb-30">
              <Header />
              <div className=" rounded-lg p-6  transition-colors duration-300">
                {children}
              </div>
            </main>
          </div>

          {/* Mobile Menu */}
          <MobileMenu className="md:hidden" />
        </div>
      </div>
    </SidebarProvider>
  );
}