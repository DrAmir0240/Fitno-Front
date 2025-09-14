import { Button } from "@/components/ui";
import { FaCheck } from "react-icons/fa6";

export const DiscountSection = ({ discountCode }) => {
  return (
    <div className="bg-white rounded-xl p-4 mb-4">
      <div className="text-center mb-4">
        <h4 className="md:text-lg font-semibold text-gray-900 mb-2">
          کد تخفیف دارید؟
        </h4>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          کد تخفیف خود را وارد کنید تا روی شهریه باشگاه اعمال کنیم.
        </p>
      </div>
      
      <div className="flex gap-3 items-center justify-center">
        <Button variant="custom" color="#2563EBE8" className="rounded-2xl w-32">
          کد تخفیف :
        </Button>

        <div className="items-center gap-2 bg-gray-50 h-12 rounded-2xl w-32 flex justify-center">
          <span className="font-semibold">{discountCode}</span>
          <FaCheck size={24} color="#289DFC" className="mb-2" />
        </div>
      </div>
    </div>
  );
};