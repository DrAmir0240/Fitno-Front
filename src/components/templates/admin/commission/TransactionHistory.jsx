
export const TransactionHistory =({transactionHistory})=> {
  return (
   <div className="space-y-4">
        {transactionHistory.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                {transaction.icon}
              </div>
              <div>
                <p className="font-medium">{transaction.type}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className="text-green-600 font-medium">
              {transaction.amount}
            </span>
          </div>
        ))}
      </div>
  )
}
