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
              className="bg-[#F3F3F4] dark:bg-gray-700 rounded-3xl min-h-[100px] p-4 shadow-sm dark:shadow-gray-900/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-gray-900/70 border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
              onClick={() => handleGymClick(item)}
            >
              <div className="flex items-center justify-between">
                {/* Right side - Content */}
                <div className="flex items-center gap-3 space-x-reverse flex-1">
                  {/* Image */}
                  <div className="w-16 h-16 rounded-3xl flex items-center justify-center bg-white dark:bg-gray-600 p-1">
                    <Image
                      src={item?.main_img}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                      alt={item.title}
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2 transition-colors duration-300">
                      {item.description}
                    </p>
                    <p className={`text-xs self-end px-2 py-1 rounded-full transition-colors duration-300 ${
                      item.status === 'فعال' 
                        ? 'text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400' 
                        : item.status === 'غیرفعال'
                        ? 'text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {item.status}
                    </p>
                  </div>
                </div>

                {/* Left side - Arrow */}
                <Button 
                  className="text-gray-300 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300" 
                  variant="link"
                >
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