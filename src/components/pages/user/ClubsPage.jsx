"use client";
import { SearchBar } from "@/components/navigation";
import { BreadCrumb } from "@/components/shared";
import { useGetGyms } from "@/services/queries/Profile";
import { useState } from "react";
import {  UserClubCard } from "@/components/templates/profile/clubs";
import Link from "next/link";

function ClubsPage() {
  const { data } = useGetGyms();
  const clubs = data?.data?.results;
  console.log(clubs)

  return (
    <>
      <BreadCrumb title="لیست باشگاه ها" />
      <SearchBar placeholder="جستجوی باشگاه ها" />
      
      <div className="grid md:grid-cols-2 gap-10">
        {clubs?.map((club) => (
      <Link href={`/profile/clubs/${club?.id}`}>
          <UserClubCard 
            key={club?.id} 
            club={club} 

          />
      </Link>
        ))}
      </div>

   
    </>
  );
}

export default ClubsPage;