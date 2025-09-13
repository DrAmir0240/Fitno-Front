"use client";

import { Button } from '@/components/ui/button';
import { IoIosArrowBack } from "react-icons/io";
import { LuMenu } from 'react-icons/lu';
import { useSidebar } from '../context/SidebarContext';


export const BreadCrumb = ({ title, onBack }) => {
  const { openSidebar } = useSidebar();

  return (
    <div className="bg-white px-4 py-4 flex items-center justify-between mb-4">
      <LuMenu 
        size={24} 
        className='z-10 cursor-pointer' 
        onClick={openSidebar}
      />
    
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      <Button 
        className="bg-gradient-to-br w-14 h-14 from-gray-400 to-gray-200 rounded-full"
        onClick={onBack}
      >
        <IoIosArrowBack size={24} />
      </Button>
    </div>
  );
};