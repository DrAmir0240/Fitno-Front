"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebar } from "@/components/context/SidebarContext";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {  PiSignOut , PiUsers } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { RiDiscountPercentLine } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  const pathname = usePathname();

  const links = [
   
    {
      icon: <PiUsers size={24} />,
      href: "/admin/users",
      label: " کاربران",
    },
    {
      icon: <GrTransaction size={24} />,
      href: "/admin/transactions",
      label: " تراکنش ها",
    },
    {
      icon: <CgGym size={24} />,
      href: "/admin/Clubs",
      label: "باشگاه ها",
    },
    {
      icon: <MdOutlineAdminPanelSettings size={24} />,
      href: "/admin/administrator",
      label: "افزودن مدیر جدید",
    },
    {
      icon: <RiDiscountPercentLine size={24} />,
      href: "/admin/discount",
      label: "تخفیف ها",
    },
    {
      icon: <HiOutlineCurrencyDollar size={24} />,
      href: "/admin/commission",
      label: "کمیسیون ها",
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
