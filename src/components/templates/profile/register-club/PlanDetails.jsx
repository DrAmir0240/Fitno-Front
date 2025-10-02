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
      <div className="bg-[#F3F3F4] rounded-2xl p-4 mb-4 text-center">
        <div className="text-gray-500">لطفاً یک طرح را انتخاب کنید</div>
      </div>
    );
  }



  return (
    <>
      <div className="bg-[#F3F3F4] rounded-2xl p-4 mb-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">
          تعداد جلسات: {selectedMembership?.days} جلسه
        </h3>
        
        <div className="flex gap-3 mb-4">
          <div className="flex-1 bg-gray-200 rounded-3xl p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">تاریخ پایان</div>
            <div className="text-sm font-medium">{formatToJalali(selectedMembership?.validity_date)}</div>
          </div>
          <div className="flex-1 bg-gray-200 rounded-3xl p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">تاریخ شروع</div>
            <div className="text-sm font-medium">{formatToJalali(selectedMembership?.start_date)}</div>
          </div>
        </div>
      </div>
      
      <div className="text-center bg-[#F3F3F4] py-2 rounded-2xl">
        <div className="text-sm font-semibold text-gray-900 mb-1">
          قیمت {selectedMembership.days} جلسه
        </div>
        <div className="text-xl font-bold text-gray-900">
          {formatAmount(selectedMembership.price)}
        </div>
        {selectedMembership.description && (
          <div className="text-xs text-gray-600 mt-2">
            {selectedMembership.description}
          </div>
        )}
      </div>

      {/* اطلاعات اضافی اگر وجود داشته باشد */}
      {(selectedMembership.capacity || selectedMembership.session_left) && (
        <div className="bg-white rounded-2xl p-4 mt-4 shadow-sm">
          <div className="text-sm font-semibold mb-2">اطلاعات تکمیلی</div>
          <div className="space-y-2">
            {selectedMembership.capacity && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">ظرفیت:</span>
                <span className="font-medium">{selectedMembership.capacity} نفر</span>
              </div>
            )}
            {selectedMembership.session_left !== undefined && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">جلسات باقیمانده:</span>
                <span className="font-medium">{selectedMembership.session_left} جلسه</span>
              </div>
            )}
            {selectedMembership.type_title && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">نوع عضویت:</span>
                <span className="font-medium">{selectedMembership.type_title}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};