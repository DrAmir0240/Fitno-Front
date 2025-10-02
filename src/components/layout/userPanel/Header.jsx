"use client";

import NotificationMenu from "@/components/shared/NotificationMenu";
import { useAuth } from "@/context/authContext";
import { useSidebar } from "@/context/SidebarContext";
import { useGetNotifications } from "@/services/queries/Profile";
import { formatDate } from "@/utils/formatData";
import { LuMenu } from "react-icons/lu";

export default function Header() {
  const { openSidebar } = useSidebar();
  const { user } = useAuth();
  const { data } = useGetNotifications();
  const messages = data?.data?.results
  const messageItems = messages?.map(notification => ({
    id: notification.id,
    title: notification.action, 
    content: notification.message, 
    time: formatDate(notification.created_at), 
    unread: !notification.is_read 
  })) || [];

  // داده‌های پیش‌فرض در صورت خالی بودن
  const defaultMessageItems = [
    {
      id: 1,
      title: "خوش آمدید",
      content: "به پنل کاربری خوش آمدید",
      time: "هم اکنون",
      unread: false,
    },
  ];

  const finalMessageItems = messageItems.length > 0 ? messageItems : defaultMessageItems;

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
          
          <NotificationMenu messageItems={finalMessageItems} />

          <div className="bg-[#289DFC38] w-[92px] h-[33px] rounded-2xl flex justify-center items-center">
            لوگو
          </div>
        </div>
      </section>
    </header>
  );
}