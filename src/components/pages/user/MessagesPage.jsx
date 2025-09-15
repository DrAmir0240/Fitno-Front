"use client";

import { BreadCrumb } from "@/components/shared";
import MessagesList from "@/components/templates/profile/messages/MessagesList";
import { ReusableTabs } from "@/components/ui/tabs";
import { UserLayout } from "@/layouts";
import { useState } from "react";

const MessagesPage = () => {
  const [allMessages, setAllMessages] = useState([
    {
      id: 1,
      title: "عنوان پیام عمومی ۱",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۱",
      date: "1404/02/02",
      time: "14:03",
      type: "all",
    },
    {
      id: 2,
      title: "عنوان اطلاعیه",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۲",
      date: "1404/02/02",
      time: "14:03",
      type: "notification",
    },
    {
      id: 3,
      title: "عنوان پیام عمومی ۲",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۳",
      date: "1404/02/02",
      time: "14:03",
      type: "all",
    },
    {
      id: 4,
      title: "عنوان آموزش",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۴",
      date: "1404/02/02",
      time: "14:03",
      type: "learn",
    },
    {
      id: 5,
      title: "عنوان آموزش",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۵",
      date: "1404/02/02",
      time: "14:03",
      type: "learn",
    },
    {
      id: 6,
      title: "عنوان آموزش",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۶",
      date: "1404/02/02",
      time: "14:03",
      type: "learn",
    },
    {
      id: 7,
      title: "عنوان مالی",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۷",
      date: "1404/02/02",
      time: "14:03",
      type: "financial",
    },
  ]);

  const tabsData = [
    {
      value: "all",
      label: "همه",
      content: (
        <MessagesList
          messages={allMessages.filter((msg) => msg.type === "all")}
        />
      ),
    },
    {
      value: "notification",
      label: "اطلاع رسانی",
      content: (
        <MessagesList
          messages={allMessages.filter((msg) => msg.type === "notification")}
        />
      ),
    },
    {
      value: "learn",
      label: "آموزش",
      content: (
        <MessagesList
          messages={allMessages.filter((msg) => msg.type === "learn")}
        />
      ),
    },
    {
      value: "financial",
      label: "مالی",
      content: (
        <MessagesList
          messages={allMessages.filter((msg) => msg.type === "financial")}
        />
      ),
    },
  ];

  return (
    <UserLayout>
      <div>
        <BreadCrumb title="پیام ها" />
        <div className="bg-[#EFEFEF] p-2 py-4 rounded-3xl">
          <div className="flex w-full justify-start">
            <ReusableTabs
              tabs={tabsData}
              defaultValue="all"
              className="w-full px-3"
              tabsListClassName="bg-[#D6D6D6] min-w-[200px] gap-3 mx-auto rounded-full flex-row-reverse"
            />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default MessagesPage;
