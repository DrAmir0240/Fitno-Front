import { LuTrash2, LuChevronLeft, LuCircleHelp } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { Button } from "@/components/ui";

const DiscountCard = ({ code }) => {
  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 my-3">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex items-center justify-end gap-4 mb-3">
          <span className="text-base font-bold text-gray-900">
            75,000 تومان
          </span>
          <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors flex-shrink-0">
            <LuCircleHelp className="w-4 h-4 text-white" />
          </button>
        </div>
        
        <p className="text-xs text-gray-600 text-right leading-relaxed mb-3">
          {code.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 justify-end mb-3">
          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs text-center">
            تاریخ پایان: 1404/02/02
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs text-center">
            تاریخ شروع: 1404/02/02
          </span>
        </div>

        <div className="flex items-center gap-2 justify-start">
          <Button variant="link" size="icon" className="hover:bg-gray-200 w-7 h-7 rounded-lg">
            <LuChevronLeft size={16} className="text-gray-400" />
          </Button>
          <Button variant="link" size="icon" className="hover:bg-red-100 w-7 h-7 rounded-lg">
            <LuTrash2 size={16} className="text-gray-400 hover:text-red-500" />
          </Button>
          <Button variant="link" size="icon" className="hover:bg-blue-100 w-7 h-7 rounded-lg">
            <FiEdit size={16} className="text-gray-400 hover:text-blue-500" />
          </Button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="link" size="icon" className="hover:bg-gray-200 w-7 h-7 rounded-lg">
            <LuChevronLeft size={20} className="text-gray-400" />
          </Button>
          <Button variant="link" size="icon" className="hover:bg-red-100 w-7 h-7 rounded-lg">
            <LuTrash2 size={16} className="text-gray-400 hover:text-red-500" />
          </Button>
          <Button variant="link" size="icon" className="hover:bg-blue-100 w-7 h-7 rounded-lg">
            <FiEdit size={16} className="text-gray-400 hover:text-blue-500" />
          </Button>
        </div>

        <div className="flex-1 px-4">
          <div className="flex items-center justify-end gap-4 mb-2">
            <p className="text-sm text-gray-600 text-right leading-relaxed">
              {code.description}
            </p>
            <span className="text-lg font-bold text-gray-900 mr-4 flex-shrink-0">
              75,000 تومان
            </span>
          </div>

          <div className="flex gap-2 justify-end">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              تاریخ پایان: 1404/02/02
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              تاریخ شروع: 1404/02/02
            </span>
          </div>
        </div>

        <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
          <LuCircleHelp size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;