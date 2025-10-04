import { LuTrash2, LuChevronLeft, LuCircleHelp } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { Button } from "@/components/ui";

const DiscountCard = ({ code }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 dark:border-gray-700 my-3 transition-colors duration-300">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex items-center justify-end gap-4 mb-3">
          <span className="text-base font-bold text-gray-900 dark:text-white">
            75,000 تومان
          </span>
          <button className="p-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full transition-colors flex-shrink-0">
            <LuCircleHelp className="w-4 h-4 text-white" />
          </button>
        </div>
        
        <p className="text-xs text-gray-600 dark:text-gray-300 text-right leading-relaxed mb-3 transition-colors duration-300">
          {code.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 justify-end mb-3">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs text-center transition-colors duration-300">
            تاریخ پایان: 1404/02/02
          </span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs text-center transition-colors duration-300">
            تاریخ شروع: 1404/02/02
          </span>
        </div>

        <div className="flex items-center gap-2 justify-start">
          <Button variant="link" size="icon" className="hover:bg-gray-200 dark:hover:bg-gray-600 w-7 h-7 rounded-lg transition-colors duration-300">
            <LuChevronLeft size={16} className="text-gray-400 dark:text-gray-500" />
          </Button>
          <Button variant="link" size="icon" className="hover:bg-red-100 dark:hover:bg-red-900/30 w-7 h-7 rounded-lg transition-colors duration-300">
            <LuTrash2 size={16} className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400" />
          </Button>
          <Button variant="link" size="icon" className="hover:bg-blue-100 dark:hover:bg-blue-900/30 w-7 h-7 rounded-lg transition-colors duration-300">
            <FiEdit size={16} className="text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400" />
          </Button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="link" size="icon" className="hover:bg-gray-200 dark:hover:bg-gray-600 w-7 h-7 rounded-lg transition-colors duration-300">
            <LuChevronLeft size={20} className="text-gray-400 dark:text-gray-500" />
          </Button>
          <Button variant="link" size="icon" className="hover:bg-red-100 dark:hover:bg-red-900/30 w-7 h-7 rounded-lg transition-colors duration-300">
            <LuTrash2 size={16} className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400" />
          </Button>
          <Button variant="link" size="icon" className="hover:bg-blue-100 dark:hover:bg-blue-900/30 w-7 h-7 rounded-lg transition-colors duration-300">
            <FiEdit size={16} className="text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400" />
          </Button>
        </div>

        <div className="flex-1 px-4">
          <div className="flex items-center justify-end gap-4 mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-300 text-right leading-relaxed transition-colors duration-300">
              {code.description}
            </p>
            <span className="text-lg font-bold text-gray-900 dark:text-white mr-4 flex-shrink-0 transition-colors duration-300">
              75,000 تومان
            </span>
          </div>

          <div className="flex gap-2 justify-end">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs transition-colors duration-300">
              تاریخ پایان: 1404/02/02
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs transition-colors duration-300">
              تاریخ شروع: 1404/02/02
            </span>
          </div>
        </div>

        <button className="p-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full transition-colors duration-300">
          <LuCircleHelp size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;