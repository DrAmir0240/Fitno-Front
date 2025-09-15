import { SearchBar } from '@/components/navigation'
import { Button } from '@/components/ui'
import ClubPanelLayout from '@/layouts/ClubPanelLayout'
import React from 'react'
import { CiFilter } from 'react-icons/ci'
import { FaFileExport } from "react-icons/fa";

function RevenuesPage() {
  const reports= [
    {
      id: 1,
      title: "محموع درآمد",
      count : "430,000 تومان"
    },
    {
      id: 2,
      title: "درآمدحاصل از تراکنش‌ها",
      count : "130,000 تومان "
    },
    {
      id: 3,
      title: "درآمدحاصل از کمیسیون‌ها",
      count : "130,000 تومان "
    },
    {
      id: 4,
      title: "درآمد حاصل از بسته‌ها و سرویس‌ها",
      count : "130,000 تومان "
    },
    {
      id: 5,
      title: "مجموع تخفیفات",
      count : "130,000 تومان "
    },
    {
      id: 6,
      title: "تعداد تراکنش ها",
      count : "130,000 تومان "
    },
  ]

  const transactions = [
    {
      id: 1,
      type: "تراکنش ورودی",
      subject: "پرداخت شهریه",
      amount: "100,000 تومان",
      date: "1403/09/09",
      status: "پرداخت موفق",
      statusColor: "text-green-500"
    },
    {
      id: 2,
      type: "تخفیف",
      subject: "تخفیف مناسیتی",
      amount: "10,000 تومان",
      date: "1403/09/10",
      status: "کسر شده",
      statusColor: "text-red-500"
    },
    {
      id: 3,
      type: "تراکنش ورودی",
      subject: "پرداخت شهریه",
      amount: "100,000 تومان",
      date: "1403/09/09",
      status: "پرداخت موفق",
      statusColor: "text-green-500"
    },
   {
      id: 4,
      type: "تراکنش ورودی",
      subject: "پرداخت شهریه",
      amount: "100,000 تومان",
      date: "1403/09/09",
      status: "پرداخت موفق",
      statusColor: "text-green-500"
    },
  ]

  return (
   <ClubPanelLayout>
    <div className='mt-7'>
     <h1 className="text-xl font-bold text-gray-800 mb-6">
            گزارش گیری درآمد
          </h1>
    </div>

    {/* گزارشات خلاصه */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-7'>
     {reports.map(item =>(
      <div key={item.id} className='bg-[#F5F6F8] p-4 rounded-xl'>
       <h5 className='text-sm md:text-base'>{item.title} :</h5>
       <p className='text-transparent bg-clip-text bg-gradient-to-b from-[#1DB7C2] to-[#413B89] mt-1 font-medium text-lg md:text-xl'>
         {item.count}
       </p>
     </div>
     ))}
    </div>

    {/* جستجو و فیلترها */}
    <div className="mb-6">
      <SearchBar placeholder="جستجو کنید..." />
    </div>
    
    <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
      <div className='flex flex-wrap gap-2'>
        <Button 
          variant="outline" 
          size="sm"
          className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500"
        >
          همه
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500"
        >
          از تاریخ: ۱۴۰۴/۰۲/۰۲
        </Button>
        
        <Button 
          variant="default" 
          size="sm"
          className="rounded-xl px-4 py-3 text-xs md:text-base font-medium"
        >
          تا تاریخ: ۱۴۰۴/۰۲/۰۲
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500"
          endIcon={<CiFilter size={20} />}
        >
          فیلتر
        </Button>
      </div>

      <Button 
        variant="outline" 
        size="sm"
        className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500 whitespace-nowrap"
        endIcon={<FaFileExport size={16} />}
      >
        دریافت خروجی اکسل
      </Button>
    </div>
          
    <div>
 <div className="overflow-x-auto shadow-md rounded-xl">
  {/* جدول برای دسکتاپ */}
  <table className="w-full text-sm text-right text-gray-500 hidden md:table">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="px-4 py-3 whitespace-nowrap">درآمد ها</th>
        <th scope="col" className="px-4 py-3 whitespace-nowrap">موضوع</th>
        <th scope="col" className="px-4 py-3 whitespace-nowrap">مبلغ</th>
        <th scope="col" className="px-4 py-3 whitespace-nowrap">تاریخ</th>
        <th scope="col" className="px-4 py-3 whitespace-nowrap">وضعیت</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction) => (
        <tr key={transaction.id} className="bg-white border-b hover:bg-gray-50">
          <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
            {transaction.type}
          </td>
          <td className="px-4 py-4 whitespace-nowrap">
            {transaction.subject}
          </td>
          <td className={`px-4 py-4 whitespace-nowrap ${transaction.statusColor}`}>
            {transaction.amount}
          </td>
          <td className="px-4 py-4 whitespace-nowrap">
            {transaction.date}
          </td>
          <td className={`px-4 py-4 whitespace-nowrap ${transaction.statusColor}`}>
            {transaction.status}
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* نسخه موبایل (کارت‌ها) */}

</div>
  <div className="md:hidden mt-4  flex flex-col gap-4">
    {transactions.map((transaction) => (
      <div key={transaction.id} className="bg-white p-4 rounded-lg shadow border">
        <div className="flex justify-between items-start mb-3">
          <span className="font-medium text-gray-900">{transaction.type}</span>
          <span className={`text-sm ${transaction.statusColor}`}>{transaction.status}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">موضوع:</span>
            <span>{transaction.subject}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">مبلغ:</span>
            <span className={transaction.statusColor}>{transaction.amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">تاریخ:</span>
            <span>{transaction.date}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
   </ClubPanelLayout>
  )
}

export default RevenuesPage