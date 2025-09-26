// components/clubs/ClubCard.jsx
"use client";
import { Button } from "@/components/ui";
import Image from "next/image";
import { MdLocalPhone, MdMoreVert } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

export const UserClubCard = ({ club, onCardClick }) => {
  return (
    <div
      className="bg-[#E4E4E4] rounded-2xl relative cursor-pointer transition-transform hover:scale-105"
      onClick={() => onCardClick(club)}
    >
      <div className="absolute top-4 right-4 z-10">
        <Button
          size="icon"
          className="bg-white rounded-full w-7 h-7 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <MdMoreVert size={20} color="#3474A8" />
        </Button>
      </div>

      <div className="bg-[#3474A8] rounded-2xl h-[140px] flex justify-center items-center relative">
        <Image
          className="rounded-full"
          src={club?.main_img}
          width={97}
          height={45}
          alt={club?.title || "باشگاه"}
        />
      </div>

      <div className="m-4">
        <p className="font-semibold text-lg">{club?.title}</p>
        <div className="flex items-center gap-4 mb-4 mt-3">
          <div className="bg-[#F6EEFF] rounded-xl p-2 max-h-9">
            <MdLocalPhone size={19} color="#1C3DBF" />
          </div>
          <p className="font-medium text-xs">{club.phone}</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#F6EEFF] rounded-xl p-2 max-h-9">
            <TiLocation size={19} color="#1C3DBF" />
          </div>
          <p className="font-medium text-xs">{club.address}</p>
        </div>
      </div>
    </div>
  );
};

