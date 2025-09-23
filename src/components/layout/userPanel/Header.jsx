"use client"
import { useSidebar } from "@/context/SidebarContext";
import { HiUser } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { TbWallet } from "react-icons/tb";

export default function Header() {
  const { openSidebar } = useSidebar();
  return (
    <header>
        <section className="flex  justify-between items-center my-5">
          <div className="flex gap-2 items-center">
            <LuMenu size={24}
            className='z-10 cursor-pointer' 
            onClick={openSidebar}
            />
          </div>
          <div>
            <div className="bg-[#289DFC38] w-[92px] h-[33px] rounded-2xl flex justify-center items-center">
              لوگو
            </div>
          </div>
          
        </section>
      </header>
  );
}