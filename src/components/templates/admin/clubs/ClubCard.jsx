import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { MdLocalPhone } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { Button } from "@/components/ui";

export const ClubCard = ({ club }) => {
  return (
    <div className="bg-[#E4E4E4] rounded-2xl">
      <div className="bg-[#289DFC] flex flex-col justify-center items-center p-5 rounded-2xl pt-15">
        <Image width={145} height={145} src={club.image || "/images/Hs.svg"} alt={club.name} />
        <div className="flex justify-between items-center w-full mt-7">
          <p className="font-bold">{club.name}</p>
          <FiEdit size={24} className="cursor-pointer" />
        </div>
      </div>

      <div className="m-5">
        <div className="flex items-center gap-7 mb-4">
          <div className="bg-[#F6EEFF] rounded-xl p-2 max-h-9">
            <TiLocation size={19} color="#1C3DBF" />
          </div>
          <p className="font-medium text-xs">{club.address}</p>
        </div>
        <div className="flex items-center gap-7 mb-4">
          <div className="bg-[#F6EEFF] rounded-xl p-2 max-h-9">
            <MdLocalPhone size={19} color="#1C3DBF" />
          </div>
          <p className="font-medium text-xs">{club.phone}</p>
        </div>
        <div className="flex items-center gap-7 mb-4">
          <div className="bg-[#F6EEFF] rounded-xl p-2 max-h-9">
            <TiLocation size={19} color="#1C3DBF" />
          </div>
          <p className="font-medium text-xs">{club.facilities}</p>
        </div>
        <div className="flex items-center gap-7 mb-4">
          <div className="bg-[#F6EEFF] rounded-xl p-2 max-h-9">
            <IoTime size={19} color="#1C3DBF" />
          </div>
          <p className="font-medium text-xs">{club.workingHours}</p>
        </div>
        <div className="flex gap-4 justify-center w-full">
          <Button className="w-full rounded-[20px] bg-[#0832DE]">
            مشاهده سانس ها
          </Button>
          <Button className="w-full rounded-[20px] bg-[#0832DE]">
            مشاهده تراکنش ها
          </Button>
        </div>
      </div>
    </div>
  );
};

