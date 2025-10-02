import { Button } from "@/components/ui";
import { formatAmount } from "@/utils/formatData";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { RxDownload } from "react-icons/rx";
import { useState } from "react";

export default function TransactionsList({ transactions }) {
  const [downloadingId, setDownloadingId] = useState(null);

  const handleDownload = async (transactionId) => {
    setDownloadingId(transactionId);
    // شبیه‌سازی دانلود
    await new Promise(resolve => setTimeout(resolve, 1000));
    setDownloadingId(null);
  };

  const getStatusConfig = (status) => {
    const configs = {
      'موفق': {
        color: 'text-green-700 dark:text-green-400',
        bg: 'bg-green-100 dark:bg-green-900/40',
        border: 'border-green-200 dark:border-green-800'
      },
      'ناموفق': {
        color: 'text-red-700 dark:text-red-400',
        bg: 'bg-red-100 dark:bg-red-900/40',
        border: 'border-red-200 dark:border-red-800'
      },
      'در حال پردازش': {
        color: 'text-yellow-700 dark:text-yellow-400',
        bg: 'bg-yellow-100 dark:bg-yellow-900/40',
        border: 'border-yellow-200 dark:border-yellow-800'
      }
    };
    return configs[status] || configs['در حال پردازش'];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/70 border border-gray-200 dark:border-gray-700 transition-all duration-500">
      {transactions?.map((transaction, index) => {
        const statusConfig = getStatusConfig(transaction.status);
        
        return (
          <div
            key={transaction.id}
            className={`px-6 py-5 border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 group ${
              index === 0 ? 'rounded-t-2xl' : ''
            } ${index === transactions.length - 1 ? 'rounded-b-2xl' : ''}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              {/* Right side - Transaction info */}
              <div className="flex items-center gap-4 space-x-reverse">
                {/* Arrow icon with animation */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 ${
                    transaction.type === 'increase' 
                      ? 'bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700' 
                      : 'bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700'
                  }`}
                >
                  {transaction.type === 'increase' ? (
                    <GoArrowUp className="w-6 h-6 text-white" />
                  ) : (
                    <GoArrowDown className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* Transaction details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className={`text-sm sm:text-lg font-bold transition-colors duration-300 ${
                      transaction.type === 'increase' 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {formatAmount(transaction?.price)}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full transition-colors duration-300">
                      {transaction?.payment_method}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    شناسه: <span className="font-mono">{transaction.id}</span>
                  </p>
                </div>
              </div>

              {/* Left side - Status and download */}
              <div className="flex flex-col items-end gap-2">
                <span className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  statusConfig.bg
                } ${statusConfig.color} ${statusConfig.border}`}>
                  {transaction.status}
                </span>
                
                <Button 
                  onClick={() => handleDownload(transaction.id)}
                  disabled={downloadingId === transaction.id}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    downloadingId === transaction.id
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
                  }`}
                  variant="ghost"
                >
                  <RxDownload className={`text-xl transition-all duration-300 ${
                    downloadingId === transaction.id ? 'animate-spin' : 'group-hover:scale-110'
                  }`} />
                </Button>
                
                <p className="text-xs text-gray-400 dark:text-gray-500 transition-colors duration-300 flex items-center gap-1">
                  <span>📅</span>
                  {transaction.date || '۱۴۰۳/۰۲/۰۲'}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}