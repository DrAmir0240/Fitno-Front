import React from "react";
import { LiaDumbbellSolid } from "react-icons/lia";
import { BiDumbbell } from "react-icons/bi";
import { TbListSearch } from "react-icons/tb";
import { RiUserHeartFill } from "react-icons/ri";
import { FaPersonWalking } from "react-icons/fa6";

const UserMenu = ({ className = "" }) => {
  const menuItems = [
    {
      id: 1,
      title: "باشگاه ها",
      icon: <BiDumbbell size={45} />,
      gradient: "linear-gradient(180deg, #3B86E3 62.98%, #00579E 100%)",
      href: "#workouts",
    },
    {
      id: 2,
      title: "باشگاه من",
      icon: <LiaDumbbellSolid size={45} />,
      gradient: "linear-gradient(180deg, #289DFC 59.13%, #2563EB 100%)",
      href: "#nutrition",
    },
    {
      id: 3,
      title: "تاریخچه ",
      icon: <TbListSearch size={45} />,
      gradient: "linear-gradient(180deg, #74B9B2 74.52%, #A3BC69 100%)",
      href: "#progress",
    },
    {
      id: 4,
      title: "مربی",
      icon: <RiUserHeartFill size={45} />,
      gradient: "linear-gradient(180deg, #028DFE 59.13%, #0142D1 100%)",
      href: "#goals",
    },
    {
      id: 5,
      title: "حرکات",
      icon: <FaPersonWalking size={45} />,
      gradient: "linear-gradient(180deg, #289DFC 59.13%, #2563EB 100%)",
      href: "#settings",
    },
  ];

  return (
    <div
      className={`grid grid-cols-3 md:grid-cols-5 gap-4 mt-6 justify-center w-[220px] m-auto sm:min-w-[400px] ${className}`}
    >
      {menuItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <a
            href={item.href}
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white hover:scale-105 transition-transform duration-200 mb-2"
            style={{ background: item.gradient }}
          >
            {item.icon}
          </a>
          <span className="text-sm font-[500] text-gray-700 text-center font-medium">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserMenu;
