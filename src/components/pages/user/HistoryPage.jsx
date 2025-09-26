"use client"
import { BreadCrumb } from "@/components/shared";
import HistoryItems from "@/components/templates/profile/history/HistoryItems";
import { useGetSignedGyms } from "@/services/queries/Profile";

const HistoryPage = () => {
  const {data} = useGetSignedGyms()
  const gyms = data?.data
  console.log(data)
  const historyItems = [
    {
      id: 1,
      title: "یاشگاه مهر ایران",
      description: "مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان ",
      date: "1400/09/16",
      color: "bg-orange-500",
    },
    {
      id: 2,
      title: "یاشگاه مهر ایران",
      description: "مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان ",
      date: "1400/09/16",
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "یاشگاه مهر ایران",
      description: "مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان ",
      date: "1400/09/16",
      color: "bg-blue-500",
    },
    {
      id: 4,
      title: "یاشگاه مهر ایران",
      description: "مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان ",
      date: "1400/09/16",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen  ">
      <BreadCrumb title="تاریخچه" />
      <HistoryItems gyms={gyms} />
    </div>
  );
};

export default HistoryPage;
