import React from 'react';
import { UserLayout } from '@/layouts';
import { Button } from '@/components/ui';
import { RxDownload } from "react-icons/rx";
import { GoArrowDown , GoArrowUp   } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";

const TransactionsPage = () => {
  const transactions = [
    {
      id: 1,
      type: 'increase',
      title: 'افزایش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 2,
      type: 'increase',
      title: 'افزایش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 3,
      type: 'decrease',
      title: 'کاهش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 4,
      type: 'decrease',
      title: 'کاهش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 5,
      type: 'decrease',
      title: 'کاهش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 6,
      type: 'increase',
      title: 'افزایش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 7,
      type: 'increase',
      title: 'افزایش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    }
  ];

  return (
    <UserLayout >
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between ">
       <div className="w-10"></div>
        <h1 className="text-lg font-semibold text-gray-900">تراکنش‌ها</h1>
        
         <Button className="bg-gradient-to-br w-14 h-14 from-gray-700 to-gray-200 rounded-full ">
          <IoIosArrowBack size={24} />
        </Button>
      </div>

      {/* Date Header */}
      <div className='bg-[#EFEFEF] p-2 py-4 rounded-3xl'>
        <p className="text-sm font-[500] md:text-base text-gray-600 mb-3 mx-2 ">امروز</p>
       

      {/* Transactions List */}
      <div className="bg-white rounded-xl">
        {transactions.map((transaction, index) => (
          <div key={transaction.id} className="px-4 py-4 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center justify-between">
              {/* Right side - Transaction info */}
              <div className="flex items-center gap-3 space-x-reverse">
                {/* Arrow icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'increase' 
                    ? 'bg-green-500' 
                    : 'bg-red-500'
                }`}>
                  {transaction.type === 'increase' ? (
                    <GoArrowUp className="w-5 h-5 text-white" />
                  ) : (
                    <GoArrowDown className="w-5 h-5 text-white" />
                  )}
                </div>
                
                {/* Transaction details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-xs sm:text-base font-medium text-gray-900">
                      {transaction.title} - {transaction.amount} ریال
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 ">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-gray-400 ">
                   شناسه: ۱۲۲۳۴۵
                  </p>
                </div>
              </div>

              {/* Left side - Status and download */}
              <div className="flex flex-col items-end ">
                <span className="text-xs text-green-600 bg-green-50 px-2  rounded">
                  {transaction.status}
                </span>
                <Button className=" p-0" variant="link">
                  <RxDownload className='text-lg md:text-xl' />
                </Button>
                 <p className="text-xs text-gray-400 mt-1">
                 ۱۴۰۳/۰۲/۰۲
                  </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </UserLayout>
  );
};

export default TransactionsPage;