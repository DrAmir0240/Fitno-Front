import { Button } from "@/components/ui";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { RxDownload } from "react-icons/rx";

export default function TransactionsList ({transactions}){
    return(
        <div className="bg-white rounded-xl">
        {transactions.map((transaction) => (
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
    )
}