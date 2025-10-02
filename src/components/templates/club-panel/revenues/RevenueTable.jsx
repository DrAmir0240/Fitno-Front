import React from 'react'

export const RevenueTable = ({ transactions }) => {
  return (
    <div>
      <div className="overflow-x-auto shadow-md rounded-xl">
        {/* desktop */}
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400 hidden md:table">
          <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
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
              <tr key={transaction.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <td className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {transaction.type}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                  {transaction.subject}
                </td>
                <td className={`px-4 py-4 whitespace-nowrap ${transaction.statusColor}`}>
                  {transaction.amount}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
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

      {/* mobile */}
      <div className="md:hidden mt-4 flex flex-col gap-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border dark:border-gray-700 transition-colors duration-200">
            <div className="flex justify-between items-start mb-3">
              <span className="font-medium text-gray-900 dark:text-white">{transaction.type}</span>
              <span className={`text-sm ${transaction.statusColor}`}>{transaction.status}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">موضوع:</span>
                <span className="text-gray-900 dark:text-gray-200">{transaction.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">مبلغ:</span>
                <span className={transaction.statusColor}>{transaction.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">تاریخ:</span>
                <span className="text-gray-900 dark:text-gray-200">{transaction.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}