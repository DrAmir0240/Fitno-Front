import { BreadCrumb } from "@/components/shared";
import MessagesList from "@/components/templates/messages/MessagesList";
import { ReusableTabs } from "@/components/ui/tabs";
import { UserLayout } from "@/layouts";

const MessagesPage = () => {
  const allMessages = [
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
      id: 4,
      title: "عنوان آموزش",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۴",
      date: "1404/02/02",
      time: "14:03",
      type: "learn",
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
      title: "عنوان مالی",
      description: "خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد. ۵",
      date: "1404/02/02",
      time: "14:03",
      type: "financial",
    },
  ];

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
            <ReusableTabs tabs={tabsData} defaultValue="all"  />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default MessagesPage;