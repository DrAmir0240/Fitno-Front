import { ReusableTabs } from "@/components/ui/tabs";
import { formatAmount } from "@/utils/formatData";

export const PlanSelection = ({ onPlanChange, membershipTypes, clubTitle }) => {
  // ایجاد تب‌ها بر اساس membership_types
  const tabsData = membershipTypes?.map((membership, index) => ({
    value: membership.id.toString(),
    label: membership.title,
    content: <PlanContent membership={membership} />
  })) || [];

  // مقدار پیش‌فرض اولین تب
  const defaultValue = tabsData.length > 0 ? tabsData[0].value : '';

  return (
    <div className="border-2 bg-blue-50 dark:bg-gray-800 border-dashed border-blue-200 dark:border-gray-600 rounded-2xl p-3 mb-4 transition-colors duration-300">
      <div className="text-center mb-3">
        <div className="text-base font-bold text-gray-800 dark:text-white transition-colors duration-300">
          طرح اشتراک {clubTitle}
        </div>
      </div>
      
      {tabsData.length > 0 ? (
        <ReusableTabs
          tabs={tabsData}
          defaultValue={defaultValue}
          className="w-full"
          tabsListClassName="bg-[#F3F3F4] dark:bg-gray-700 flex gap-3 px-2 mx-auto rounded-full h-12 transition-colors duration-300"
          onValueChange={onPlanChange}
        />
      ) : (
        <div className="text-center p-4 text-gray-500 dark:text-gray-400 transition-colors duration-300">
          هیچ طرح عضویتی موجود نیست
        </div>
      )}
    </div>
  );
};

const PlanContent = ({ membership }) => (
  <div className="text-center p-4">
    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
      {membership.title} - {membership.days} روز
    </div>
    <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300" dir="rtl">
      {formatAmount(membership.price)}
    </div>
    {membership.description && (
      <div className="text-xs text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
        {membership.description}
      </div>
    )}
  </div>
);