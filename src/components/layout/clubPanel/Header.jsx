"use client";
import { LuMenu } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/context/SidebarContext";

export default function Header() {
  const { openSidebar } = useSidebar();

  return (
    <header className="lg:hidden sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-900/50 transition-colors duration-300">
      <section className="flex justify-between items-center p-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={openSidebar}
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          <LuMenu size={24} />
        </Button>

        <div>
          <div className="bg-[#289DFC38] dark:bg-blue-900/40 w-[92px] h-[33px] rounded-2xl flex justify-center items-center text-gray-700 dark:text-white/90 transition-colors duration-300">
            لوگو
          </div>
        </div>
      </section>
    </header>
  );
}