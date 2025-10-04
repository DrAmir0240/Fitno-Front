export const TransactionHistory = ({ transactionHistory }) => {
  return (
    <div className="space-y-4">
      {transactionHistory.map((transaction, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 transition-colors duration-300">
              {transaction.icon}
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
                {transaction.type}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                {transaction.date}
              </p>
            </div>
          </div>
          <span className="text-green-600 dark:text-green-400 font-medium transition-colors duration-300">
            {transaction.amount}
          </span>
        </div>
      ))}
    </div>
  );
};