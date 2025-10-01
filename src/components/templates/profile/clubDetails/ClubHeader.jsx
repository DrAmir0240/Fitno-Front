import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

export const ClubHeader = ({ club })=> {


  return (
    <>
      <div className="relative bg-gradient-to-br from-[#3474A8] via-[#4A8BC2] to-[#5FA3D8] rounded-3xl h-[280px] flex justify-center items-center mb-8 overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative">
          <div className="w-[180px] h-[180px] rounded-full border-4 border-white shadow-2xl overflow-hidden">
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

      <div className="bg-white rounded-3xl p-8 shadow-md mb-8 border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-[#3474A8]">{club?.title}</h1>
        
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] rounded-2xl p-4 shadow-sm">
              <MdLocalPhone size={24} color="#1C3DBF" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">شماره تماس</p>
              <p className="font-semibold text-base">{club?.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] rounded-2xl p-4 shadow-sm">
              <TiLocation size={24} color="#1C3DBF" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">آدرس</p>
              <p className="font-medium text-base leading-relaxed text-gray-700">{club?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

