
import ClubPanelLayout from "@/layouts/ClubPanelLayout";
import { SearchBar } from "@/components/navigation";
import ServicesHeader from "@/components/templates/club-panel/services/ServicesHeader";
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
    <ClubPanelLayout>
        <ServicesHeader />
        <SearchBar placeholder="جستحو کنید ..." />
         <ServicesList sessions={sessions} />
    </ClubPanelLayout>
  );
}

export default ServicesPage;
