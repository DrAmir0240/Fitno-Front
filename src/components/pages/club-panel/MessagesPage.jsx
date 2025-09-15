"use client"
import { SearchBar } from "@/components/navigation"
import MessagesList from "@/components/templates/profile/messages/MessagesList";
import { Button } from "@/components/ui"
import { ReusableTabs } from "@/components/ui/tabs";
import ClubPanelLayout from "@/layouts/ClubPanelLayout"
import { LuCircleFadingPlus } from "react-icons/lu"
import { useState } from "react";
import { MessagesContent, MessagesHeader } from "@/components/templates/club-panel/messages";

function MessagesPage() {
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


  const handleEditMessage = (message) => {
    console.log('ویرایش پیام:', message);
  };

  const handleDeleteMessage = (messageId) => {
    console.log('حذف پیام:', messageId);
    setAllMessages(allMessages.filter(msg => msg.id !== messageId));
  };

  const tabsData = [
    {
      value: "all",
      label: "همه",
      content: (
        <MessagesList
          messages={allMessages.filter((msg) => msg.type === "all")}
          onEdit={handleEditMessage}
          onDelete={handleDeleteMessage}
        />
      ),
    },
    {
      value: "notification",
      label: "اطلاع رسانی",
      content: (
        <MessagesList
          messages={allMessages.filter((msg) => msg.type === "notification")}
          onEdit={handleEditMessage}
          onDelete={handleDeleteMessage}
        />
      ),
    },
    {
      value: "learn",
      label: "آموزش",
      content: (
        <MessagesList
          messages={allMessages.filter((msg) => msg.type === "learn")}
          onEdit={handleEditMessage}
          onDelete={handleDeleteMessage}
        />
      ),
    },
    {
      value: "financial",
      label: "مالی",
      content: (
        <MessagesList
          messages={allMessages.filter((msg) => msg.type === "financial")}
          onEdit={handleEditMessage}
          onDelete={handleDeleteMessage}
        />
      ),
    },
  ];

  return (
    <ClubPanelLayout>
      <MessagesHeader />
      <SearchBar placeholder="جستجو کنید..." />
      <MessagesContent tabsData={tabsData} />
    </ClubPanelLayout>
  )
}

export default MessagesPage