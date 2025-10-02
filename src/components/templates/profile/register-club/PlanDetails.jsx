import { formatAmount, formatToJalali } from "@/utils/formatData";

export const PlanDetails = ({ selectedPlan, membershipTypes }) => {
  // پیدا کردن پلن انتخاب شده بر اساس ID
  const selectedMembership = membershipTypes?.find(
    membership => membership.id.toString() === selectedPlan
  );

  console.log(membershipTypes)
  // اگر پلنی انتخاب نشده یا داده وجود ندارد
  if (!selectedMembership) {
    return (
      <div className="bg-[#F3F3F4] dark:bg-gray-700 rounded-2xl p-4 mb-4 text-center transition-colors duration-300">
        <div className="text-gray-500 dark:text-gray-400">لطفاً یک طرح را انتخاب کنید</div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#F3F3F4] dark:bg-gray-700 rounded-2xl p-4 mb-4 transition-colors duration-300">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 text-center transition-colors duration-300">
          تعداد جلسات: {selectedMembership?.days} جلسه
        </h3>
        
        <div className="flex gap-3 mb-4">
          <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-3xl p-3 text-center transition-colors duration-300">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">تاریخ پایان</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">
              {formatToJalali(selectedMembership?.validity_date)}
            </div>
          </div>
          <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-3xl p-3 text-center transition-colors duration-300">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">تاریخ شروع</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">
              {formatToJalali(selectedMembership?.start_date)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center bg-[#F3F3F4] dark:bg-gray-700 py-2 rounded-2xl transition-colors duration-300">
        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
          قیمت {selectedMembership.days} جلسه
        </div>
        <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          {formatAmount(selectedMembership.price)}
        </div>
        {selectedMembership.description && (
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
            {selectedMembership.description}
          </div>
        )}
      </div>

    </>
  );
};