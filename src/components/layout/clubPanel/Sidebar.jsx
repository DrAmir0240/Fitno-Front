"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RiHome6Line, RiCustomerService2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import {
  TbUserPlus,
  TbReportAnalytics,
  TbListSearch
} from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { IoImagesOutline } from "react-icons/io5";

import { BiBasket } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { PiUserCirclePlus, PiSignOut } from "react-icons/pi";

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  const pathname = usePathname();

  const links = [
    { icon: <RiHome6Line size={22} />, href: "/club-panel", label: "داشبورد" },
    {
      icon: <IoSettingsOutline size={24} />,
      href: "/club-panel/profile-setting",
      label: "تنظیمات پروفایل باشگاه"
    },
    {
      icon: <IoSettingsOutline size={24} />,
      href: "/club-panel/services",
      label: "لیست سانس ها",
    },
     {
      icon: <LiaMoneyBillWaveSolid size={24} />,
      href: "/club-panel/revenues",
      label: "درآمد ها",
    },
    {
      icon: <PiUserCirclePlus size={24} />,
      href: "/club-panel/club-register",
      label: "ثبت باشگاه",
    },
    {
      icon: <TbUserPlus size={24} />,
      href: "/club-panel/add-user",
      label: "افزودن کاربر",
    },
    {
      icon: <IoTicketOutline size={24} />,
      href: "/club-panel/tickets",
      label: "مدیریت تیکت ها",
    },
    {
      icon: <IoImagesOutline size={24} />,
      href: "/club-panel/banners",
      label: "مدیریت بنر ها",
    },
    {
      icon: <RiCustomerService2Line size={24} />,
      href: "/club-panel/support",
      label: " پشتیبانی",
    },
    {
      icon: <BiBasket size={24} />,
      href: "/club-panel/payment",
      label: " پرداخت",
    },
    {
      icon: <CgGym size={24} />,
      href: "/club-panel/attendance",
      label: " ورود و خروج",
    },
    {
      icon: <TbReportAnalytics size={24} />,
      href: "/club-panel/report",
      label: "گزارش عملکرد",
    },
    {
      icon: <HiOutlineMail size={24} />,
      href: "/club-panel/messages",
      label: "پیام ها",
    },
    {
      icon: <TbListSearch size={24} />,
      href: "/club-panel/history",
      label: "تاریخچه",
    },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#289DFC] text-white p-6 rounded-e-xl">
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center gap-2 py-4">
          <Image
            src="/images/profile.png"
            alt="profile"
            width={49}
            height={49}
            className="rounded-full"
          />
          <p className="text-xl">فیتنو</p>
        </div>

        <ScrollArea className="flex-1 mt-6" dir="rtl">
          <ul className="flex flex-col gap-3">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Button
                    variant="link"
                    href={link.href}
                    startIcon={link.icon}
                    className={cn(
                      "flex items-center w-full justify-start p-3 rounded-md transition-all duration-200",
                      isActive
                        ? "bg-white/20 backdrop-blur-sm text-white border border-white/30"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </ScrollArea>

        <div className="pt-4 border-t border-white/20">
          <Button
            variant="link"
            className="flex items-center gap-3 w-full justify-start text-white p-3"
          >
            <PiSignOut className="text-lg" />
            <span>خروج از حساب</span>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* mobile*/}
      <Sheet open={isOpen} onOpenChange={closeSidebar}>
        <SheetContent side="right" className="p-0 w-64 rounded-e-xl">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* desktop */}
      <aside className="hidden lg:block sticky top-0 right-0 min-w-[235px] bg-[#289DFC] h-screen rounded-e-xl">
        <SidebarContent />
      </aside>
    </>
  );
}
