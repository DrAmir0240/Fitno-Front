"use client";
import { LuMenu } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/context/SidebarContext";

export default function Header() {
  const { openSidebar } = useSidebar();

  return (
    <header className="lg:hidden sticky top-0 z-40 bg-white shadow-sm">
      <section className="flex justify-between items-center p-4">
        <Button variant="ghost" size="icon" onClick={openSidebar}>
          <LuMenu size={24} />
        </Button>

        <div>
          <div className="bg-[#289DFC38] w-[92px] h-[33px] rounded-2xl flex justify-center items-center">
            لوگو
          </div>
        </div>
      </section>
    </header>
  );
}