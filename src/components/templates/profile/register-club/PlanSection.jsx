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
    <div className="border-2 bg-blue-50 border-dashed border-blue-200 rounded-2xl p-3 mb-4">
      <div className="text-center mb-3">
        <div className="text-base font-bold">
          طرح اشتراک {clubTitle}
        </div>
      </div>
      
      {tabsData.length > 0 ? (
        <ReusableTabs
          tabs={tabsData}
          defaultValue={defaultValue}
          className="w-full"
          tabsListClassName="bg-[#F3F3F4] flex gap-3  px-2 mx-auto rounded-full h-12"
          onValueChange={onPlanChange}
        />
      ) : (
        <div className="text-center p-4 text-gray-500">
          هیچ طرح عضویتی موجود نیست
        </div>
      )}
    </div>
  );
};

const PlanContent = ({ membership }) => (
  <div className="text-center p-4">
    <div className="text-sm font-semibold text-gray-900 mb-2">
      {membership.title} - {membership.days} روز
    </div>
    <div className="text-xl font-bold text-gray-900" dir="rtl">
      {formatAmount(membership.price)}
    </div>
    {membership.description && (
      <div className="text-xs text-gray-600 mt-2">
        {membership.description}
      </div>
    )}
  </div>
);