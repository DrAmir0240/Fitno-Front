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
      bgColor: "bg-[#009646B8]",
      label: "افزایش"
    },
    decrease: {
      bgColor: "bg-gray-400",
      label: "کاهش"
    }
  };

  const config = typeConfig[type] || typeConfig.increase;

  return (
    <div className="bg-white rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-start gap-3">
        <div className={`px-3 py-1 ${config.bgColor} text-white text-xs md:text-sm rounded-xl`}>
          {config.label}
        </div>
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <p className="text-sm md:text-lg font-medium text-gray-900">
              {amount} ریال
            </p>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
              {status}
            </span>
          </div>
          
          <p className="text-xs md:text-sm text-gray-500">{description}</p>
          <div className="flex justify-between items-center text-xs md:text-sm text-gray-400 mt-3">
            <p>{transactionType}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
      <Button variant="link" color="#2563EB" className="p-0">
        <IoIosArrowBack className="text-2x md:text-4xl" />
      </Button>
    </div>
  );
}