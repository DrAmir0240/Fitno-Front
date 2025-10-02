// components/clubs/ClubCard.jsx
"use client";
import { Button } from "@/components/ui";
import Image from "next/image";
import { MdLocalPhone, MdMoreVert } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

export const UserClubCard = ({ club }) => {
  return (
    <div
      className="bg-[#E4E4E4] dark:bg-gray-700 rounded-2xl relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-900/50 pb-1 border border-gray-200 dark:border-gray-600"
    >
      <div className="absolute top-4 right-4 z-10">
        <Button
          size="icon"
          className="bg-white dark:bg-gray-800 rounded-full w-7 h-7 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
        >
          <MdMoreVert size={20} className="text-[#3474A8] dark:text-blue-400" />
        </Button>
      </div>

      <div className="bg-[#3474A8] dark:bg-gray-800 rounded-2xl h-[140px] flex justify-center items-center relative transition-colors duration-300">
        <div className="relative">
          <Image
            className="rounded-full border-4 border-white dark:border-gray-700"
            src={club?.main_img}
            width={97}
            height={97}
            alt={club?.title || "باشگاه"}
          />
          <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/10 blur-md"></div>
        </div>
      </div>

      <div className="m-4">
        <p className="font-semibold text-lg text-gray-900 dark:text-white mb-3 transition-colors duration-300">
          {club?.title}
        </p>

        <div className="flex items-center gap-3 mb-3">
          <div className="bg-[#F6EEFF] dark:bg-blue-900/30 rounded-xl p-2 transition-colors duration-300">
            <MdLocalPhone size={19} className="text-[#1C3DBF] dark:text-blue-400" />
          </div>
          <p className="font-medium text-xs text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {club.phone}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#F6EEFF] dark:bg-blue-900/30 rounded-xl p-2 transition-colors duration-300">
            <TiLocation size={19} className="text-[#1C3DBF] dark:text-blue-400" />
          </div>
          <p className="font-medium text-xs text-gray-700 dark:text-gray-300 transition-colors duration-300 line-clamp-2">
            {club.address}
          </p>
        </div>
      </div>
    </div>
  );
};