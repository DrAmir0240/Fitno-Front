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
import { RiDiscountPercentLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import { useAuth } from "@/context/authContext";

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

  return (
    <>
      {/* Mobile sidebar */}
      <Sheet open={isOpen} onOpenChange={closeSidebar}>
        <SheetContent
          side="right"
          className="w-64 p-0 [&>button]:hidden rounded-l-xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/user/user.png"
                  width={50}
                  height={50}
                  alt="profile"
                  className="z-10 rounded-full border-4 border-white p-0 object-cover"
                />
                <div>
                  <h3 className="text-base font-semibold"> {user?.name}</h3>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={closeSidebar}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <ScrollArea className="flex-1" dir="rtl">
              <nav className="flex-1 p-2 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeSidebar}
                      className={cn(
                        isActive
                          ? "bg-slate-200 text-slate-900"
                          : "text-slate-600 hover:bg-slate-50",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <Icon
                        className={cn(
                          isActive
                            ? "text-slate-700"
                            : "text-slate-400 group-hover:text-slate-500",
                          "ml-3 flex-shrink-0 h-5 w-5"
                        )}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
