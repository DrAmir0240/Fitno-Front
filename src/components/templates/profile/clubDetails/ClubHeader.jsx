import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

export const ClubHeader = ({ club }) => {
  return (
    <>
      <div className="relative bg-gradient-to-br from-[#3474A8] via-[#4A8BC2] to-[#5FA3D8] dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl h-[280px] flex justify-center items-center mb-8 overflow-hidden shadow-md transition-colors duration-500">
        <div className="absolute inset-0 bg-black/5 dark:bg-black/20"></div>
        <div className="relative">
          <div className="w-[180px] h-[180px] rounded-full border-4 border-white dark:border-gray-300 shadow-2xl overflow-hidden transition-colors duration-300">
            <Image
              src={club?.main_img}
              width={180}
              height={180}
              alt={club?.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md mb-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-6 text-[#3474A8] dark:text-blue-400 transition-colors duration-300">
          {club?.title}
        </h1>
        
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-4 shadow-sm transition-colors duration-300">
              <MdLocalPhone size={24} className="text-[#1C3DBF] dark:text-blue-400 transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">شماره تماس</p>
              <p className="font-semibold text-base text-gray-900 dark:text-white transition-colors duration-300">
                {club?.phone}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-4 shadow-sm transition-colors duration-300">
              <TiLocation size={24} className="text-[#1C3DBF] dark:text-blue-400 transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">آدرس</p>
              <p className="font-medium text-base leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
                {club?.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}