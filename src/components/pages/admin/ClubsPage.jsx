import PageHeader from "@/components/shared/PageHeader";
import { ClubsList } from "@/components/templates/admin/clubs";

function ClubsPage() {
  const clubsData = [
    {
      name: "باشگاه ایرانشهر",
      image: "/images/Hs.svg",
      address: "تهران، خیابان پاسداران، بالاتر از نیستان نهم، پلاک ۳۰۲، طبقه دوم، شرکت صاب‌ملک",
      phone: "۰۹۲۱۷۷۸۳۵۲۴",
      facilities: "امکانات باشگاه: این یک نوشته آزمایشی برای امکانات باشگاه است.",
      workingHours: "روزهای کاری: شنبه تا پنج‌شنبه\nساعات کاری: ۱۰ تا ۱۸"
    },
    {
      name: "باشگاه ایرانشهر",
      image: "/images/Hs.svg",
      address: "تهران، خیابان پاسداران، بالاتر از نیستان نهم، پلاک ۳۰۲، طبقه دوم، شرکت صاب‌ملک",
      phone: "۰۹۲۱۷۷۸۳۵۲۴",
      facilities: "امکانات باشگاه: این یک نوشته آزمایشی برای امکانات باشگاه است.",
      workingHours: "روزهای کاری: شنبه تا پنج‌شنبه\nساعات کاری: ۱۰ تا ۱۸"
    },
    {
      name: "باشگاه ایرانشهر",
      image: "/images/Hs.svg",
      address: "تهران، خیابان پاسداران، بالاتر از نیستان نهم، پلاک ۳۰۲، طبقه دوم، شرکت صاب‌ملک",
      phone: "۰۹۲۱۷۷۸۳۵۲۴",
      facilities: "امکانات باشگاه: این یک نوشته آزمایشی برای امکانات باشگاه است.",
      workingHours: "روزهای کاری: شنبه تا پنج‌شنبه\nساعات کاری: ۱۰ تا ۱۸"
    }
  ];

  return (
    <>
      <PageHeader
        title="لیست باشگاه ها"
        buttonText="باشگاه جدید"
        showButton={true}
      />
      
      <ClubsList clubs={clubsData} />
    </>
  );
}

export default ClubsPage;