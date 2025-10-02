import React from 'react';
import { HelpCircle } from 'lucide-react';
import DiscountCodeCard from './DiscountCodeCard';

const DiscountCodesList = ({ codes, type }) => {
  if (codes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
          <HelpCircle className="w-8 h-8 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          کدی در این بخش وجود ندارد
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
          هنوز هیچ کد تخفیفی در این دسته‌بندی ندارید
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 space-y-4">
      {codes.map((item) => (
        <DiscountCodeCard key={item.id} item={item} type={type} />
      ))}
    </div>
  );
};

export default DiscountCodesList;