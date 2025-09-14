import React from 'react';

export const SessionCard = ({ session }) => {
  return (
    <div className="bg-[#F3F3F4] rounded-3xl p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {session.title}
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
           <div className='bg-white p-2 rounded-xl'>
               <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
           </div>
              <span className="text-sm text-gray-600">
              تعداد جلسات سانس :   {session.sessionsCount}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
            <div className='bg-white p-2 rounded-xl'>
               <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
           </div>
              <span className="text-sm text-gray-600">
                شهریه: {session.fee}
              </span>
            </div>
          </div>
          
          <div className='flex justify-end'>
            <span className="mt-3 border text-gray-600 px-4 py-1 rounded-full text-sm">
              تعداد ماه : 2 ماه
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};