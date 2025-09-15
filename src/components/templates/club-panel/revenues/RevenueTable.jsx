import React from 'react'

export const RevenueTable = ({ transactions }) => {
  return (
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
      </div>

      {/* نسخه موبایل (کارت‌ها) */}
      <div className="md:hidden mt-4 flex flex-col gap-4">
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
  )
}

