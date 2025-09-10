import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { UserLayout } from '@/layouts';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '@/components/ui';
import { BreadCrumb } from '@/components/shared';
import HistoryItems from '@/components/templates/history/HistoryItems';

const HistoryPage = () => {
  const historyItems = [
    {
      id: 1,
      title: 'یاشگاه مهر ایران',
      description: "مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان ",
      date: '1400/09/16',
      color: 'bg-orange-500'
    },
    {
      id: 2,
     title: 'یاشگاه مهر ایران',
      description: "مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان ",
      date: '1400/09/16',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'یاشگاه مهر ایران',
      description: "مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان ",
      date: '1400/09/16',
      color: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'یاشگاه مهر ایران',
      description: "مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان ",
      date: '1400/09/16',
      color: 'bg-purple-500'
    }
  ];


  return (
    <UserLayout>
        <div className="min-h-screen  ">
     
         <BreadCrumb title="تاریخچه" />
      {/* History Items */}
      <HistoryItems historyItems={historyItems} />
     
    </div>
    </UserLayout>
  );
};

export default HistoryPage;