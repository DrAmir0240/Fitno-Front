// components/discounts/DiscountsTabs.jsx
import { ReusableTabs } from "@/components/ui/tabs";
import DiscountCodesList from "./DiscountCodesList";

const DiscountTabs = ({ discountCodes }) => {
  const activeCodes = discountCodes.filter(code => code.type === 'active');
  const usedCodes = discountCodes.filter(code => code.type === 'used');
  const newCodes = discountCodes.filter(code => code.type === 'new');

  const tabsData = [
    {
      value: 'active',
      label: 'کدهای اختصاصی',
      content: <DiscountCodesList codes={activeCodes} type="active" />
    },
    {
      value: 'used',
      label: 'کدهای استفاده شده',
      content: <DiscountCodesList codes={usedCodes} type="used" />
    },
    {
      value: 'new',
      label: 'تخفیفات جدید',
      content: <DiscountCodesList codes={newCodes} type="new" />
    }
  ];

  return (
    <div className="bg-[#F3F3F4] dark:bg-gray-800 rounded-2xl sm:rounded-3xl py-3 sm:py-4 px-2 sm:px-0">
      <ReusableTabs
        tabs={tabsData}
        defaultValue="active"
        className="w-full px-2 sm:px-3"
        tabsListClassName=" w-full  gap-3 "
      />
    </div>
  );
};

export default DiscountTabs;