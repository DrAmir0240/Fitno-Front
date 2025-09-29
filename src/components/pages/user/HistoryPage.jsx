"use client"
import { BreadCrumb } from "@/components/shared";
import HistoryItems from "@/components/templates/profile/history/HistoryItems";
import { useGetSignedGyms } from "@/services/queries/Profile";

const HistoryPage = () => {
  const {data} = useGetSignedGyms()
  const gyms = data?.data
  return (
    <div className="min-h-screen  ">
      <BreadCrumb title="تاریخچه" />
      <HistoryItems gyms={gyms} />
    </div>
  );
};

export default HistoryPage;
