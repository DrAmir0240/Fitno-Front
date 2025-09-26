// app/clubs/page.jsx
"use client";
import { SearchBar } from "@/components/navigation";
import { BreadCrumb } from "@/components/shared";
import { useGetGyms } from "@/services/queries/Profile";
import { useState } from "react";
import { ClubModal, UserClubCard } from "@/components/templates/profile/clubs";

function ClubsPage() {
  const { data } = useGetGyms();
  const clubs = data?.data?.results;
  const [selectedClub, setSelectedClub] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClub(null);
  };

  return (
    <>
      <BreadCrumb title="لیست باشگاه ها" />
      <SearchBar placeholder="جستجوی باشگاه ها" />
      
      <div className="grid md:grid-cols-2 gap-10">
        {clubs?.map((club) => (
          <UserClubCard 
            key={club?.id} 
            club={club} 
            onCardClick={handleCardClick} 
          />
        ))}
      </div>

      <ClubModal
        club={selectedClub}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}

export default ClubsPage;