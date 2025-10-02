import MobileMenu from "@/components/layout/userPanel/MobileMenu";
import Header from "@/components/layout/userPanel/Header";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/userPanel/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

const UserLayout = ({ children, mainClass }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="mx-auto max-w-[700px] m-auto">
          <div className="flex gap-8">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <main className="flex-1 pb-30">
              <div className={cn(
                " rounded-lg p-6   transition-colors duration-300",
                mainClass
              )}>
                {children}
              </div>
            </main>
          </div>
          
          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default UserLayout;