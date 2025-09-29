"use client";

import NotificationMenu from "@/components/shared/NotificationMenu";
import { useAuth } from "@/context/authContext";
import { useSidebar } from "@/context/SidebarContext";
import { LuMenu } from "react-icons/lu";

export default function Header() {
  const { openSidebar } = useSidebar();
  const { user } = useAuth();

  const messageItems = [
    {
      id: 1,
      title: "پیام جدید",
      content: "شما یک پیام جدید دارید",
      time: "۵ دقیقه پیش",
      unread: true,
    },
    {
      id: 2,
      title: "به‌روزرسانی سیستم",
      content: "سیستم در تاریخ ۱۴۰۳/۰۱/۱۵ به‌روز خواهد شد",
      time: "۱ ساعت پیش",
      unread: true,
    },
    {
      id: 3,
      title: "خوش آمدید",
      content: "به پنل کاربری خوش آمدید",
      time: "۲ روز پیش",
      unread: false,
    },
  ];

  return (
    <header>
      <section className="flex justify-between items-center mb-7">
        <div className="flex gap-2 items-center">
          <LuMenu
            size={24}
            className="z-10 cursor-pointer"
            onClick={openSidebar}
          />
          <p>{user?.name}</p>
        </div>

        <div className="flex items-center gap-4">
          <NotificationMenu messageItems={messageItems} />

          <div className="bg-[#289DFC38] w-[92px] h-[33px] rounded-2xl flex justify-center items-center">
            لوگو
          </div>
        </div>
      </section>
    </header>
  );
}
