import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { MdLocalPhone } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { Button } from "@/components/ui";

export const ClubCard = ({ club }) => {
  return (
    <div className="bg-[#E4E4E4] dark:bg-gray-700 rounded-2xl transition-colors duration-300">
      <div className="bg-[#289DFC] dark:bg-blue-800 flex flex-col justify-center items-center p-5 rounded-2xl pt-15 transition-colors duration-300">
        <Image width={145} height={145} src={club.image || "/images/Hs.svg"} alt={club.name} />
        <div className="flex justify-between items-center w-full mt-7">
          <p className="font-bold text-white dark:text-white/90">{club.name}</p>
          <FiEdit size={24} className="cursor-pointer text-white dark:text-white/80 hover:text-white/90 dark:hover:text-white transition-colors duration-200" />
        </div>
      </div>

      <div className="m-5">
        <div className="flex items-center gap-7 mb-4">
          <div className="bg-[#F6EEFF] dark:bg-purple-900/30 rounded-xl p-2 max-h-9 transition-colors duration-300">
            <TiLocation size={19} color="#1C3DBF" className="dark:text-purple-400" />
          </div>
          <p className="font-medium text-xs text-gray-800 dark:text-gray-200 transition-colors duration-300">{club.address}</p>
        </div>
        <div className="flex items-center gap-7 mb-4">
          <div className="bg-[#F6EEFF] dark:bg-purple-900/30 rounded-xl p-2 max-h-9 transition-colors duration-300">
            <MdLocalPhone size={19} color="#1C3DBF" className="dark:text-purple-400" />
          </div>
          <p className="font-medium text-xs text-gray-800 dark:text-gray-200 transition-colors duration-300">{club.phone}</p>
        </div>
        <div className="flex items-center gap-7 mb-4">
          <div className="bg-[#F6EEFF] dark:bg-purple-900/30 rounded-xl p-2 max-h-9 transition-colors duration-300">
            <TiLocation size={19} color="#1C3DBF" className="dark:text-purple-400" />
          </div>
          <p className="font-medium text-xs text-gray-800 dark:text-gray-200 transition-colors duration-300">{club.facilities}</p>
        </div>
        <div className="flex items-center gap-7 mb-4">
          <div className="bg-[#F6EEFF] dark:bg-purple-900/30 rounded-xl p-2 max-h-9 transition-colors duration-300">
            <IoTime size={19} color="#1C3DBF" className="dark:text-purple-400" />
          </div>
          <p className="font-medium text-xs text-gray-800 dark:text-gray-200 transition-colors duration-300">{club.workingHours}</p>
        </div>
        <div className="flex gap-4 justify-center w-full">
          <Button className="w-full rounded-[20px] bg-[#0832DE] hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
            مشاهده سانس ها
          </Button>
          <Button className="w-full rounded-[20px] bg-[#0832DE] hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
            مشاهده تراکنش ها
          </Button>
        </div>
      </div>
    </div>
  );
};