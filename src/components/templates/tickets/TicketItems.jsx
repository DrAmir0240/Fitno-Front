import { Button } from "@/components/ui";
import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi2";

function TicketItems() {
  return (
    <div>
      <ul className="flex justify-between items-center px-2">
        <li>عنوان</li>
        <li>تاریخ</li>
        <li>خلاصه</li>
        <li>وضعیت</li>
        <li>
          <Button size="icon" className="rounded-full  w-7 h-7">
            <HiPlus size={20} />
          </Button>
        </li>
      </ul>

      <div className="mt-8 ">
        <ul className="flex items-center justify-between mb-4 font-medium text-[#3B3B3B] bg-[#B4B4B4] p-4 py-5 rounded-[14px]">
          <li>عنوان</li>
          <li>تاریخ</li>
          <li>خلاصه</li>
          <li>
            <FaCheck size={22} color="#289DFC" />
          </li>

          <li>
            <BsExclamationCircleFill color="#1B72C0" size={27} />
          </li>
        </ul>
        <ul className="flex items-center justify-between mb-4 font-medium text-[#3B3B3B] bg-[#B4B4B4] p-4 py-5 rounded-[14px]">
          <li>عنوان</li>
          <li>تاریخ</li>
          <li>خلاصه</li>
          <li>
            <FaCheck size={22} color="#289DFC" />
          </li>

          <li>
            <BsExclamationCircleFill color="#1B72C0" size={27} />
          </li>
        </ul>
        <ul className="flex items-center justify-between mb-4 font-medium text-[#3B3B3B] bg-[#B4B4B4] p-4 py-5 rounded-[14px]">
          <li>عنوان</li>
          <li>تاریخ</li>
          <li>خلاصه</li>
          <li>
            <FaCheck size={22} color="#289DFC" />
          </li>

          <li>
            <BsExclamationCircleFill color="#1B72C0" size={27} />
          </li>
        </ul>
        <ul className="flex items-center justify-between mb-4 font-medium text-[#3B3B3B] bg-[#B4B4B4] p-4 py-5 rounded-[14px]">
          <li>عنوان</li>
          <li>تاریخ</li>
          <li>خلاصه</li>
          <li>
            <FaCheck size={22} color="#289DFC" />
          </li>

          <li>
            <BsExclamationCircleFill color="#1B72C0" size={27} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TicketItems;
