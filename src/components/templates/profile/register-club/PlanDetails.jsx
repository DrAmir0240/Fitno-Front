export const PlanDetails = ({ selectedPlan }) => {
  const planData = {
    '6month': {
      sessions: '۲۴ جلسه',
      startDate: '۱۴۰۳/۰۳/۰۴',
      endDate: '۱۴۰۳/۰۹/۰۴',
      price: '۲۰,۰۰۰,۰۰۰ تومان',
      priceLabel: 'قیمت ۲۴ جلسه'
    },
    'monthly': {
      sessions: '۱۲ جلسه',
      startDate: '۱۴۰۳/۰۳/۰۴',
      endDate: '۱۴۰۳/۰۴/۰۴',
      price: '۱۲,۰۰۰,۰۰۰ تومان',
      priceLabel: 'قیمت ۱۲ جلسه'
    }
  };

  const currentPlan = planData[selectedPlan];

  return (
    <>
      <div className="bg-[#F3F3F4] rounded-2xl p-4 mb-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">
          تعداد جلسات: {currentPlan.sessions}
        </h3>
        
        <div className="flex gap-3 mb-4">
          <div className="flex-1 bg-gray-200 rounded-3xl p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">تاریخ پایان</div>
            <div className="text-sm font-medium">{currentPlan.endDate}</div>
          </div>
          <div className="flex-1 bg-gray-200 rounded-3xl p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">تاریخ شروع</div>
            <div className="text-sm font-medium">{currentPlan.startDate}</div>
          </div>
        </div>
      </div>
      
      <div className="text-center bg-[#F3F3F4] py-2 rounded-2xl">
        <div className="text-sm font-semibold text-gray-900 mb-1">
          {currentPlan.priceLabel}
        </div>
        <div className="text-xl font-bold text-gray-900">
          {currentPlan.price}
        </div>
      </div>
    </>
  );
};