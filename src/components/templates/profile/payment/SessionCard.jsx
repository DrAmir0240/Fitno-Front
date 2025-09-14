export const SessionCard = ({ session }) => {
  return (
    <div className="bg-[#F3F3F4] rounded-3xl p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="w-16 h-16 bg-[#289DFC] rounded-3xl flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {session.title}
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className='bg-white p-2 rounded-xl'>
                <div className="w-2 h-2 bg-[#289DFC] rounded-full"></div>
              </div>
              <span className="text-sm md:text-base text-gray-600">
                تعداد جلسات سانس: {session.sessionsCount}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className='bg-white p-2 rounded-xl'>
                <div className="w-2 h-2 bg-[#289DFC] rounded-full"></div>
              </div>
              <span className="text-sm md:text-base text-gray-600">
                شهریه: {session.fee}
              </span>
            </div>
            
            <div className="flex items-start gap-2 mt-3">
              <div className='bg-white p-2 rounded-xl'>
                <div className="w-2 h-2 bg-[#289DFC] rounded-full"></div>
              </div>
              <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
                <p className="text-sm md:text-base text-gray-600">
                  تاریخ شروع: {session.startDate}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  تاریخ پایان: {session.endDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};