"use client"
import { BreadCrumb } from "@/components/shared";
import { SearchBar } from "@/components/navigation";
import {
  FilterButtons,
  SessionsList,
} from "@/components/templates/profile/services";
import { useGetServices } from "@/services/queries/Profile";

export default function ServicesPage() {
  const {data} = useGetServices()
  console.log(data)
  const sessions = data?.data?.results

  return (
    <div>
      {/* Header */}
      <BreadCrumb title="لیست سانس ها" />

      <h2 className="text-base font-semibold text-gray-700 mb-5">
        جستجوی باشگاه ها
      </h2>

      <SearchBar placeholder="جستجو کنید..." />

      {/* Filter Buttons */}
      <FilterButtons />

      {/* Services List */}
      <SessionsList sessions={sessions} />

     
    </div>
  );
}
