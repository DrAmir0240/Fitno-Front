"use client";
import { SearchBar } from "@/components/navigation";
import PageHeader from "@/components/shared/PageHeader";
import { AddBannerModal, BannerItem } from "@/components/templates/club-panel/banners";
import ClubPanelLayout from "@/layouts/ClubPanelLayout";
import { useState } from "react";


function BannersPage() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ClubPanelLayout>
      <PageHeader
        title="مدیریت بنر ها"
        buttonText="بنر جدید"
        showButton={true}
        onButtonClick={openModal}
      />
      <SearchBar placeholder="جستجو" />

      <h3 className="font-medium text-lg mt-7"> بنر های صفحه باشگاه من </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BannerItem src="/images/banner1.png" alt="banner 1" />
        <BannerItem src="/images/banner1.png" alt="banner 2" />
        <BannerItem src="/images/banner1.png" alt="banner 3" />
      </div>

      <AddBannerModal 
        open={isOpen} 
        onOpenChange={setIsOpen} 
      />
    </ClubPanelLayout>
  );
}

export default BannersPage;