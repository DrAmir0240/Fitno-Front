"use client";
import { BreadCrumb } from "@/components/shared";
import MessagesList from "@/components/templates/profile/messages/MessagesList";
import { ReusableTabs } from "@/components/ui/tabs";
import {
  useGetGymMessages,
  useGetPlatformMessages,
} from "@/services/queries/Profile";

const MessagesPage = () => {
  const { data: gym  ,error:gymError} = useGetGymMessages();
  const { data: platform  , error:platformError} = useGetPlatformMessages();
  const gymMessages = gym?.data?.results;
  const platformMessages = platform?.data?.results;
  console.log(gym);

  const tabsData = [
    {
      value: "gym",
      label: "باشگاه",
      content: <MessagesList messages={gymMessages} error={gymError} />,
    },
    {
      value: "platform",
      label: "پلتفرم",
      content: <MessagesList messages={platformMessages} error={platformError} />,
    },
  ];

  return (
    <div>
      <BreadCrumb title="اطلاعیه ها" />
      <div className="bg-[#EFEFEF] p-2 py-4 rounded-3xl">
        <div className="flex w-full justify-start">
          <ReusableTabs
            tabs={tabsData}
            defaultValue="gym"
            className="w-full px-3"
            tabsListClassName="bg-[#D6D6D6] min-w-[150px] gap-3 mx-auto rounded-full flex-row-reverse"
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
