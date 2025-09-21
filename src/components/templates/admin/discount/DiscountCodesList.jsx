// components/discounts/DiscountCodesList.jsx
import DiscountCard from "./DiscountCard";

const DiscountCodesList = ({ codes, type }) => {
  if (codes.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 text-gray-500 px-4">
        <p className="text-sm sm:text-base">
          {type === 'used' && 'هیچ کد تخفیف استفاده شده‌ای وجود ندارد'}
          {type === 'new' && 'هیچ تخفیف جدیدی وجود ندارد'}
          {type === 'active' && 'هیچ کد تخفیف فعالی وجود ندارد'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {codes.map((code) => (
        <DiscountCard key={code.id} code={code} />
      ))}
    </div>
  );
};

export default DiscountCodesList;