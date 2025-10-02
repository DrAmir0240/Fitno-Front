"use client"
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui";
import { useGetTickets } from "@/services/queries/Profile";
import { formatToJalali } from "@/utils/formatData";
import TicketModal from "./TicketModal";

function TicketItems() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {data} = useGetTickets()
  const tickets = data?.data?.results

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="flex items-center justify-end mb-4 sm:mb-5 mx-2 sm:mx-0">
         <Button 
            endIcon={<FiPlus />} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            تیکت جدید
          </Button>
        </div>

        {/* Tickets Container */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-white/50 dark:border-gray-700/50 shadow-lg lg:shadow-xl shadow-slate-200/50 dark:shadow-gray-900/50 overflow-hidden transition-all duration-500">
          <div className="hidden sm:block bg-gradient-to-r from-slate-50 to-blue-50/30 dark:from-gray-700 dark:to-blue-900/20 px-4 md:px-6 lg:px-8 py-4 lg:py-6 border-b border-slate-100 dark:border-gray-600">
            <div className="grid grid-cols-4 gap-4 md:gap-6">
              <div className="text-sm font-medium text-slate-600 dark:text-gray-300 transition-colors duration-300">عنوان</div>
              <div className="text-sm font-medium text-slate-600 dark:text-gray-300 transition-colors duration-300">تاریخ</div>
              <div className="text-sm font-medium text-slate-600 dark:text-gray-300 transition-colors duration-300">پیام</div>
              <div className="text-sm font-medium text-slate-600 dark:text-gray-300 text-center transition-colors duration-300">وضعیت</div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden bg-gradient-to-r from-slate-50 to-blue-50/30 dark:from-gray-700 dark:to-blue-900/20 px-4 py-3 border-b border-slate-100 dark:border-gray-600">
            <h3 className="text-base font-semibold text-slate-700 dark:text-gray-200 text-center transition-colors duration-300">تیکت‌های پشتیبانی</h3>
          </div>

          {/* Ticket Items */}
          <div className="divide-y divide-slate-100 dark:divide-gray-700">
            {tickets?.map((ticket) => (
              <div key={ticket.id} className="group hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-purple-50/30 dark:hover:from-blue-900/10 dark:hover:to-purple-900/10 transition-all duration-300">
                {/* Desktop View */}
                <div className="hidden sm:grid grid-cols-4 gap-4 md:gap-6 px-4 md:px-6 lg:px-8 py-4 lg:py-6 items-center">
                  <div className="font-medium text-slate-800 dark:text-gray-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm lg:text-base">
                    {ticket?.title}
                  </div>
                  <div className="text-slate-600 dark:text-gray-400 text-sm font-light transition-colors duration-300">
                    {formatToJalali(ticket?.send_time)}
                  </div>
                  <div className="text-slate-600 dark:text-gray-400 text-sm font-light transition-colors duration-300">
                    {ticket?.message}
                  </div>
                  <div className="flex justify-center">
                    {ticket.status === "completed" ? (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium transition-colors duration-300">
                        <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
                        <span>تکمیل</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium transition-colors duration-300">
                        <div className="w-2 h-2 bg-amber-500 dark:bg-amber-400 rounded-full animate-pulse"></div>
                        <span>انتظار</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile View */}
                <div className="sm:hidden p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-800 dark:text-gray-200 text-sm mb-2 line-clamp-2 transition-colors duration-300">{ticket.title}</h4>
                      <div className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">تاریخ: {formatToJalali(ticket?.send_time)}</div>
                    </div>
                    {ticket.status === "completed" ? (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium flex-shrink-0 ml-2 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
                        <span>تکمیل</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-medium flex-shrink-0 ml-2 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-amber-500 dark:bg-amber-400 rounded-full animate-pulse"></div>
                        <span>انتظار</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-gray-400 transition-colors duration-300">{ticket?.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Button for Mobile */}
        <div className="sm:hidden fixed bottom-6 left-6 z-10">
         <Button 
            size="icon" 
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800 shadow-lg transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <FiPlus size={18} className="text-white" />
          </Button>
        </div>

        <TicketModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
    </div>
  );
}

export default TicketItems;