"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CgGym } from "react-icons/cg";
import { RiHome6Line } from "react-icons/ri";
import { TbUser, TbMessages } from "react-icons/tb";
import {
  IoWalletOutline,
  IoTicketOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import { useTheme } from "@/hooks/useTheme";
import { LuLogOut, LuMoon, LuSun } from "react-icons/lu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const menuItems = [
  { name: "صفحه اصلی", href: "/", icon: RiHome6Line },
  { name: "پروفایل", href: "/profile", icon: TbUser },
  { name: "لیست باشگاه ها", href: "/profile/clubs", icon: CgGym },
  { name: "کیف پول", href: "/profile/wallet", icon: IoWalletOutline },
  {
    name: "کد های تخفیف",
    href: "/profile/discount",
    icon: RiDiscountPercentLine,
  },
  { name: "تراکنش ها", href: "/profile/transactions", icon: GrTransaction },
  { name: "تاریخچه", href: "/profile/history", icon: MdOutlineHistory },
  { name: "اطلاعیه ها", href: "/profile/messages", icon: TbMessages },
  {
    name: "لیست سانس ها",
    href: "/profile/services",
    icon: MdOutlineMiscellaneousServices,
  },
  { name: "تیکت ها", href: "/profile/tickets", icon: IoTicketOutline },
  {
    name: "تنظیمات پروفایل",
    href: "/profile/setting",
    icon: IoSettingsOutline,
  },
];

export function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  const pathname = usePathname();
  const { user } = useAuth();
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <>
      {/* Mobile sidebar */}
      <Sheet open={isOpen} onOpenChange={closeSidebar}>
        <SheetContent
          side="right"
          className="w-64 p-0 [&>button]:hidden rounded-l-xl bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 transition-colors duration-300"
        >
          <div className="flex flex-col h-full">
            {/* header */}
            <div className="  p-4 border-b rounded-l-xl border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
            <ThemeToggle />
             <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/images/user/user.png"
                    width={50}
                    height={50}
                    alt="profile"
                    className="z-10 rounded-full border-4 border-white dark:border-gray-800 p-0 object-cover transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {user?.name || "کاربر"}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    خوش آمدید
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeSidebar}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
              >
                <IoClose className="h-5 w-5" />
              </Button>
              </div>
      
            </div>

            <ScrollArea className="flex-1" dir="rtl">
              <nav className="flex-1 p-3 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeSidebar}
                      className={cn(
                        "group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-300",
                        isActive
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-r-4 border-blue-500 dark:border-blue-400 shadow-sm"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:translate-x-1"
                      )}
                    >
                      <Icon
                        className={cn(
                          "ml-3 flex-shrink-0 h-5 w-5 transition-colors duration-300",
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                        )}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </ScrollArea>
            {/* footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-3 transition-colors duration-300">
              <Button
                variant="ghost"
                size="default"
                className="w-full justify-start text-red-600 dark:text-red-400 hover:bg-red-50 hover:text-red-600"
                startIcon={<LuLogOut className="h-5 w-5" />}
              >
                خروج از حساب
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
