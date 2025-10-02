import { Button } from "@/components/ui";
import { FaCheck } from "react-icons/fa6";

export const DiscountSection = ({ discountCode }) => {
  return (
    <div className="bg-white  dark:bg-gray-800 mt-5 rounded-xl p-4 mb-4 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="text-center mb-4">
        <h4 className="md:text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          کد تخفیف دارید؟
        </h4>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
          کد تخفیف خود را وارد کنید تا روی شهریه باشگاه اعمال کنیم.
        </p>
      </div>
      
      <div className="flex gap-3 items-center justify-center">
        <Button 
          variant="custom" 
          color="#2563EBE8" 
          className="rounded-2xl w-32 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
        >
          کد تخفیف :
        </Button>

        <div className="items-center gap-2 bg-gray-50 dark:bg-gray-700 h-12 rounded-2xl w-32 flex justify-center transition-colors duration-300 border border-gray-200 dark:border-gray-600">
          <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
            {discountCode}
          </span>
          <FaCheck size={24} color="#289DFC" className="mb-2 dark:text-blue-400 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};