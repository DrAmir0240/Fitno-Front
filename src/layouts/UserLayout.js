import MobileMenu from "@/components/layout/userPanel/MobileMenu";
import Header from "@/components/layout/userPanel/Header";
import { cn } from "@/lib/utils";

const UserLayout = ({ children  , mainClass}) => {
  return (
    <div>
      <div className="mx-auto  max-w-[700px] m-auto">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
       

          {/* Main Content */}
          <main className="flex-1 pb-30">
            <div className={cn("bg-white rounded-lg p-6" , mainClass)}>{children}</div>
          </main>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default UserLayout;
