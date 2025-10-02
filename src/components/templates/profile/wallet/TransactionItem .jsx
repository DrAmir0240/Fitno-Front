import { Button } from "@/components/ui";
import { IoIosArrowBack } from "react-icons/io";

export function TransactionItem({ 
  type, 
  amount, 
  status, 
  description, 
  transactionType, 
  date 
}) {
  const typeConfig = {
    increase: {
      bgColor: "bg-[#009646B8] dark:bg-green-700",
      label: "افزایش"
    },
    decrease: {
      bgColor: "bg-gray-400 dark:bg-gray-600",
      label: "کاهش"
    }
  };

  const statusConfig = {
    success: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    failed: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
  };

  const config = typeConfig[type] || typeConfig.increase;
  const statusStyle = statusConfig[status] || statusConfig.success;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between border border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:shadow-md dark:hover:shadow-gray-900/50">
      <div className="flex items-start gap-3 flex-1">
        <div className={`px-3 py-1 ${config.bgColor} text-white text-xs md:text-sm rounded-xl transition-colors duration-300`}>
          {config.label}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <p className="text-sm md:text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
              {amount} ریال
            </p>
            <span className={`text-xs ${statusStyle} px-2 py-0.5 rounded transition-colors duration-300`}>
              {status}
            </span>
          </div>
 
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            {description}
          </p>

          <div className="flex justify-between items-center text-xs md:text-sm text-gray-400 dark:text-gray-500 mt-3 transition-colors duration-300">
            <p>{transactionType}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>

      <Button 
        variant="link" 
        color="#2563EB" 
        className="p-0 hover:scale-110 transition-transform duration-200 dark:text-blue-400"
      >
        <IoIosArrowBack className="text-2xl md:text-4xl transition-colors duration-300" />
      </Button>
    </div>
  );
}