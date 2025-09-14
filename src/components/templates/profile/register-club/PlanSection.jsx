import { ReusableTabs } from "@/components/ui/tabs";
import { MonthlyContent, SixMonthContent } from ".";

export const PlanSelection = ({ selectedPlan, onPlanChange }) => {
  const tabsData = [
    {
      value: '6month',
      label: 'شش ماهه',
      content: <SixMonthContent />
    },
    {
      value: 'monthly',
      label: 'ماهانه',
      content: <MonthlyContent />
    }
  ];

  return (
    <div className="border-2 bg-blue-50 border-dashed border-blue-200 rounded-2xl p-3 mb-4">
      <div className="text-center mb-3">
        <div className="text-base font-bold">
          طرح اشتراک باشگاه ایران مهر
        </div>
      </div>
      
      <ReusableTabs
        tabs={tabsData}
        defaultValue="monthly"
        className="w-full"
        tabsListClassName="bg-[#F3F3F4] min-w-[200px] grid grid-cols-2 px-2 mx-auto rounded-full h-12"
        onValueChange={onPlanChange}
      />
    </div>
  );
};