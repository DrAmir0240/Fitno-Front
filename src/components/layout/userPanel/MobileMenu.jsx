"use client"
import React, { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { PiChatsThin } from "react-icons/pi";
import { RiHome3Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { MdHistory } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = ({ className = "" }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  const menuItems = [
    {
      id: 1,
      title: "پشتیبانی",
      icon: <PiChatsThin size={30} />,
      href: "/",
      gradient: "linear-gradient(180deg, #289DFC 59.13%, #2563EB 100%)",
    },
    {
      id: 2,
      title: "سابقه",
      icon: <MdHistory size={30} />,
      href: "/profile/history",
      gradient: "linear-gradient(180deg, #AEAFF7 62.98%, #9D9ED6 100%)",
    },
    {
      id: 3,
      title: "خانه",
      icon: <RiHome3Line size={30} />,
      href: "/profile",
      gradient: "linear-gradient(180deg, #F09E54 67.31%, #D28A48 100%)",
    },
    {
      id: 4,
      title: "باشگاه من",
      icon: <HiQuestionMarkCircle size={30} />,
      href: "/profile/my-club",
      gradient: "linear-gradient(180deg, #A0E3E2 74.52%, #7EBFBD 100%)",
    },
    {
      id: 5,
      title: "اطلاعیه ها",
      icon: <HiOutlineMail size={30} />,
      href: "/profile/messages",
      gradient: "linear-gradient(180deg, #EF5DA8 44.71%, #B94782 100%)",
    },
  ];

  return (
    <div
      className={`fixed bottom-0 inset-x-0 rounded-t-[35px] max-w-[700px] m-auto bg-gray-300 dark:bg-gray-800 shadow-lg dark:shadow-gray-900/80 border-t border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 ${className}`}
    >
      <div className="flex justify-around items-end py-2 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.href)}
            className="flex flex-col items-center group"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-2 -mt-6 shadow-lg dark:shadow-gray-900/50 transition-all duration-200 group-hover:scale-110 "
                style={{ background: item.gradient }}
              >
                {item.icon}
              </div>
              <div
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 
                  ${
                    activeTab === item.href
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
                      : "text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                  }`}
              >
                <span className="text-xs font-medium text-center">
                  {item.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;