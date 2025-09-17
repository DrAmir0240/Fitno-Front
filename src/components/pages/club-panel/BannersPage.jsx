import { SearchBar } from "@/components/navigation";
import PageHeader from "@/components/shared/PageHeader";
import { BannerItem } from "@/components/templates/club-panel/banners/BannerItem";
import ClubPanelLayout from "@/layouts/ClubPanelLayout";

function BannersPage() {
  return (
    <ClubPanelLayout>
      <PageHeader
        title="مدیریت بنر ها"
        buttonText="بنر جدید"
        showButton={true}
      />
      <SearchBar placeholder="جستجو" />

      <h3 className="font-medium text-lg mt-7"> بنر های صفحه باشگاه من </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BannerItem src="/images/banner1.png" alt="banner 1" />
        <BannerItem src="/images/banner1.png" alt="banner 2" />
        <BannerItem src="/images/banner1.png" alt="banner 3" />
      </div>
    </ClubPanelLayout>
  );
}

export default BannersPage;