import React from 'react';
import { Button } from '@/components/ui';
import { CiFilter } from "react-icons/ci";

export const FilterButtons = () => {
  return (
    <div className="flex gap-2 mb-8">
      <Button 
        variant="outline" 
        size="sm"
        className="rounded-3xl text-gray-700 hover:bg-blue-500"
      >
        مدت زمان
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="rounded-3xl text-gray-700 hover:bg-blue-500"
      >
        تعداد جلسات
      </Button>
      
      <Button 
        variant="default" 
        size="sm"
        className="rounded-3xl font-medium"
      >
        شهریه
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="rounded-3xl text-gray-700 flex items-center gap-1 hover:bg-blue-500"
        endIcon={<CiFilter className="w-4 h-4" />}
      >
        فیلتر
      </Button>
    </div>
  );
};