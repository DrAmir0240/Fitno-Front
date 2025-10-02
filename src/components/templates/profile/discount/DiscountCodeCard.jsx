import React from 'react';
import { Button } from '@/components/ui';
import { FaQuestion } from "react-icons/fa";

const DiscountCodeCard = ({ item, type }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 transition-colors duration-300 hover:shadow-md dark:hover:shadow-gray-900/70">
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1 mr-3">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-right transition-colors duration-300">
          {item.description}
        </p>
      </div>
      <div className="w-10 h-10 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
        <FaQuestion className="text-white" />
      </div>
    </div>
    
    <div className="flex items-center justify-between">
      <Button 
        size="sm" 
        className="rounded-xl bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white transition-colors duration-300"
      >
        کپی کردن کد
      </Button>
      
      <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full transition-colors duration-300">
        <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
          {item.code} : کد تخفیف
        </span>
      </div>
    </div>
  </div>
);

export default DiscountCodeCard;