"use client";

import { useAuth } from "@/context/authContext";
import { useSidebar } from "@/context/SidebarContext";
import { useAuthStatus } from "@/services/queries/Profile";
import { HiUser } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { TbWallet } from "react-icons/tb";

export default function Header() {
  const { openSidebar } = useSidebar();
  const { user } = useAuth();
  console.log(user);

  return (
    <header>
      <section className="flex  justify-between items-center mb-7">
        <div className="flex gap-2 items-center">
          <LuMenu
            size={24}
            className="z-10 cursor-pointer"
            onClick={openSidebar}
          />
          <p>{user?.name}</p>
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
