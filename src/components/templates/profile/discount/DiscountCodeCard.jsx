import React from 'react';
import { Button } from '@/components/ui';
import { FaQuestion } from "react-icons/fa";

const DiscountCodeCard = ({ item, type }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1 mr-3">
        <p className="text-sm text-gray-700 leading-relaxed text-right">
          {item.description}
        </p>
      </div>
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
        <FaQuestion className="text-white" />
      </div>
    </div>
    
    <div className="flex items-center justify-between">
      <Button size="sm" className="rounded-xl"> کپی کردن کد </Button>
      
      <div className="bg-gray-100 px-4 py-2 rounded-full">
        <span className="text-sm text-gray-600"> {item.code} : کد تخفیف  </span>
      </div>
    </div>
  </div>
);

export default DiscountCodeCard;