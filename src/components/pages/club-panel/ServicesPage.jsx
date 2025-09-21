import { SearchBar } from "@/components/navigation";
import PageHeader from "@/components/shared/PageHeader";
import ServicesList from "@/components/templates/club-panel/services/ServicesList";

function ServicesPage() {
  const sessions = [
    {
      id: 1,
      title: "سانس دوماهه",
      sessionsCount: "12 جلسه",
      fee: "۱۲/۰۰۰/۰۰۰ تومان",
    },
    {
      id: 2,
      title: "سانس دوماهه",
      sessionsCount: "12 جلسه",
      fee: "۱۲/۰۰۰/۰۰۰ تومان",
    },
    {
      id: 3,
      title: "سانس دوماهه",
      sessionsCount: "12 جلسه",
      fee: "۱۲/۰۰۰/۰۰۰ تومان",
    },
  ];
  return (
    <>
      <PageHeader
        title="لیست سانس های باشگاه ایران مهر"
        buttonText="سانس جدید"
        showButton={true}
      />
      <SearchBar placeholder="جستحو کنید ..." />
      <ServicesList sessions={sessions} />
    </>
  );
}

export default ServicesPage;
