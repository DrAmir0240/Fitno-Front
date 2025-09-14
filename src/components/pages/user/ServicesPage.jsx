import React from 'react';
import { UserLayout } from '@/layouts';
import { BreadCrumb } from '@/components/shared';
import { SearchBar } from '@/components/navigation';
import { FilterButtons, SessionsList } from '@/components/templates/profile/services';
import { Button } from '@/components/ui';



export default function ServicesPage() {
  const sessions = [
    {
      id: 1,
      title: 'سانس دوماهه',
      sessionsCount: "12 جلسه",
      fee: "۱۲/۰۰۰/۰۰۰ تومان",
    },
    {
      id: 2,
      title: 'سانس دوماهه',
      sessionsCount: "12 جلسه",
      fee: "۱۲/۰۰۰/۰۰۰ تومان",
    },
    {
      id: 3,
      title: 'سانس دوماهه',
      sessionsCount: "12 جلسه",
      fee: "۱۲/۰۰۰/۰۰۰ تومان",
    }
  ];

  return (
    <UserLayout>
      <div>
        {/* Header */}
        <BreadCrumb title="لیست سانس ها"/>

        <h2 className="text-base font-semibold text-gray-700 mb-5">
          جستجوی باشگاه ها
        </h2>
        
        <SearchBar placeholder="جستجو کنید..." />
        
        {/* Filter Buttons */}
        <FilterButtons />
        
        {/* Services List */}
        <SessionsList sessions={sessions} />
        
       <div className='mt-8'>
        <Button className="w-full h-14 text-xl font-semibold shadow-md rounded-2xl">
        پرداخت
      </Button>
       </div>
      </div>
    </UserLayout>
  );
}