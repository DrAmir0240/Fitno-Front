"use client";
import { Button } from "@/components/ui";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { ClubModal } from "../clubs";

export default function GymList({ gyms }) {
  const [selectedGym, setSelectedGym] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGymClick = (gym) => {
    setSelectedGym(gym);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="px-4 pb-24">
        <div className="space-y-4">
          {gyms?.map((item) => (
            <div
              key={item.id}
              className="bg-[#F3F3F4] rounded-3xl min-h-[100px] p-4 shadow-sm cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => handleGymClick(item)}
            >
              <div className="flex items-center justify-between">
                {/* Right side - Content */}
                <div className="flex items-center gap-3 space-x-reverse flex-1">
                  {/* Colored Circle */}
                  <div className="w-16 h-16 rounded-3xl flex items-center justify-center">
                    <Image
                      src={item?.main_img}
                      width={64}
                      height={64}
                      className="rounded-full"
                      alt={item.title}
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400 self-end">
                      {item.status}
                    </p>
                  </div>
                </div>

                {/* Left side - Arrow */}
                <Button className="text-gray-300" variant="link">
                  <IoIosArrowBack size={28} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ClubModal
        club={selectedGym}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        showMembership={true}
      />
    </>
  );
}

