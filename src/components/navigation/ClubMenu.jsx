import React from "react";
import { TbUserPlus  , TbUserHeart , TbReportAnalytics , TbListSearch} from "react-icons/tb";
import { BsPersonWalking } from "react-icons/bs";
import { BiChat , BiBasket } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { PiUserCirclePlus } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { RiDiscountPercentLine } from "react-icons/ri";


const ClubMenu = ({ className = "" }) => {
  const menuItems = [
    {
      id: 1,
      title: "افزودن کاربر",
      icon: <TbUserPlus color="#289DFC" className="text-3xl md:text-[50px]" />, 
      href: "#workouts",
    },
    {
      id: 2,
      title: " اعضای باشگاه",
      icon: <BsPersonWalking color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "#nutrition",
    },
    {
      id: 3,
      title: "ورود و خروج",
      icon: <CgGym color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "#progress",
    },
    {
      id: 4,
      title: "مدیریت کارکنان",
      icon: <IoSettings color="#289DFC" className="text-3xl md:text-[50px]"/>,
      href: "#goals",
    },
    {
      id: 5,
      title: "پشتیبانی",
      icon: <BiChat color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "#settings",
    },
    {
      id: 6,
      title: "پرداخت",
      icon: <BiBasket color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "#settings",
    },
    {
      id: 7,
      title: "ثبت نام",
      icon: <PiUserCirclePlus color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "#settings",
    },
    {
      id: 8,
      title: "مربی",
      icon: <TbUserHeart color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "#settings",
    },
    {
      id: 9,
      title: "گزارش عملکرد",
      icon: <TbReportAnalytics color="#289DFC"  className="text-3xl md:text-[50px]" />,
      href: "#settings",
    },
    {
      id: 10,
      title: "تاریخچه",
      icon: <TbListSearch color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "#settings",
    },
    {
      id: 11,
      title: "پیام ها",
      icon: <HiOutlineMail color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "settings",
    },
    {
      id: 12,
      title: "تخفیف ها",
      icon: <RiDiscountPercentLine color="#289DFC" className="text-3xl md:text-[50px]" />,
      href: "settings",
    },
  ];

  return (
    <div
      className={`grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6  mt-6 max-w-[800px] m-auto  ${className}`}
    >
      {menuItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <a
            href={item.href}
            className="w-16 h-16 md:w-26 md:h-26 bg-[#9595951C] rounded-2xl flex items-center justify-center text-white hover:scale-105 transition-transform duration-200 mb-2"
            
          >
            {item.icon}
          </a>
          <span className="text-sm font-[500] text-gray-700 dark:text-white text-center ">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClubMenu;
