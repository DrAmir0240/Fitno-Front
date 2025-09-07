import React from "react";
import {
  HiQuestionMarkCircle,
  HiGift,
} from "react-icons/hi2";
import { PiChatsThin } from "react-icons/pi";
import { GrBasket } from "react-icons/gr";
import { RiHome3Line } from "react-icons/ri";



const MobileMenu = ({ className = "" }) => {
  const menuItems = [
    {
      id: 1,
      title: "پشتیبانی",
      icon: <PiChatsThin size={38} />,
      href: "/",
      isActive: true,
      gradient: "linear-gradient(180deg, #289DFC 59.13%, #2563EB 100%)",
    },
    {
      id: 2,
      title: " پرداخت",
      icon: <GrBasket size={38} />,
      href: "/messages",
      isActive: false,
      gradient: "linear-gradient(180deg, #AEAFF7 62.98%, #9D9ED6 100%)",
    },
    {
      id: 3,
      title: "خانه",
      icon: <RiHome3Line size={38} />,
      href: "/payment",
      isActive: false,
      gradient: "linear-gradient(180deg, #F09E54 67.31%, #D28A48 100%)",
    },
    {
      id: 4,
      title: "پیام ها",
      icon: <HiQuestionMarkCircle size={38} />,
      href: "/support",
      isActive: false,
      gradient: "linear-gradient(180deg, #A0E3E2 74.52%, #7EBFBD 100%)",
    },
    {
      id: 5,
      title: "تخفیف ها",
      icon: <HiGift size={38} />,
      href: "/discounts",
      isActive: false,
      gradient: "linear-gradient(180deg, #EF5DA8 44.71%, #B94782 100%)",
    },
  ];

  return (
    <div
      className={`sticky bottom-0 left lg:hidden rounded-t-[35px] w-full m-auto mt-10  !bg-gray-300 shadow-lg z-50 ${className}`}
    >
      <div className="flex justify-around items-end py-2 px-4">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center relative">
            {/* Icon Container with Gradient Background - Positioned outside container */}
            <div
              className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-white mb-2 -mt-6 shadow-lg`}
              style={{ background: item.gradient }}
            >
              {item.icon}
            </div>

            {/* Menu Item Container */}
            <a
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                item.isActive
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span className="text-xs font-medium text-center">
                {item.title}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
