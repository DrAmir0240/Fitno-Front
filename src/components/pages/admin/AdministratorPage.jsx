"use client"
import PageHeader from "@/components/shared/PageHeader";
import { AdminSection } from "@/components/templates/admin/administrator";
import { ClubsSection } from "@/components/templates/admin/administrator";

function AdministratorPage() {
  const adminsData = [
    {
      name: "مریم فتحی",
      role: "مدیر باشگاه ایکس",
      image: "/images/user/user.png",
    },
  ];

  const handleAddAdmin = () => {
    console.log("افزودن مدیر جدید");
  };

  const handleAddClub = () => {
    console.log("افزودن باشگاه جدید");
  };

  return (
    <>
      <PageHeader title="افزودن مدیر جدید" showButton={false} />

      <AdminSection admins={adminsData} onAddAdmin={handleAddAdmin} />

      <PageHeader title="افزودن باشگاه جدید" showButton={false} />

      <ClubsSection onAddClub={handleAddClub} />
    </>
  );
}

export default AdministratorPage;
