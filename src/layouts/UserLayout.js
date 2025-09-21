import MobileMenu from "@/components/layout/userPanel/MobileMenu";
import Header from "@/components/layout/userPanel/Header";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/userPanel/Sidebar";
import { SidebarProvider } from "@/components/context/SidebarContext";

const UserLayout = ({ children, mainClass }) => {
  return (
    <SidebarProvider>
      <div>
        <div className="mx-auto max-w-[700px] m-auto">
          <div className="flex gap-8">
            <Sidebar />
            <main className="flex-1 pb-30">
              <div className={cn("bg-white rounded-lg p-6", mainClass)}>
                {children}
              </div>
            </main>
          </div>
          <MobileMenu />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default UserLayout;
