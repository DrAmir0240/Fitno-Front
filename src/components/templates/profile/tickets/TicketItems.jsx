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
    <div >
      <div className="max-w-5xl mx-auto ">
        {/* Header */}
        <div className="flex items-center justify-end mb-4 sm:mb-5 mx-2 sm:mx-0">
         <Button 
            endIcon={<FiPlus />} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-sm sm:text-base"
            onClick={() => setIsModalOpen(true)}
          >
            تیکت جدید
          </Button>
        </div>

        {/* Tickets Container */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-white/50 shadow-lg lg:shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="hidden sm:block bg-gradient-to-r from-slate-50 to-blue-50/30 px-4 md:px-6 lg:px-8 py-4 lg:py-6 border-b border-slate-100">
            <div className="grid grid-cols-4 gap-4 md:gap-6">
              <div className="text-sm font-medium text-slate-600">عنوان</div>
              <div className="text-sm font-medium text-slate-600">تاریخ</div>
              <div className="text-sm font-medium text-slate-600">پیام</div>
              <div className="text-sm font-medium text-slate-600 text-center">وضعیت</div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden bg-gradient-to-r from-slate-50 to-blue-50/30 px-4 py-3 border-b border-slate-100">
            <h3 className="text-base font-semibold text-slate-700 text-center">تیکت‌های پشتیبانی</h3>
          </div>

          {/* Ticket Items */}
          <div className="divide-y divide-slate-100">
            {tickets?.map((ticket) => (
              <div key={ticket.id} className="group hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-purple-50/30 transition-all duration-300">
                {/* Desktop View */}
                <div className="hidden sm:grid grid-cols-4 gap-4 md:gap-6 px-4 md:px-6 lg:px-8 py-4 lg:py-6 items-center">
                  <div className="font-medium text-slate-800 group-hover:text-slate-900 transition-colors text-sm lg:text-base">
                    {ticket?.title}
                  </div>
                  <div className="text-slate-600 text-sm font-light">
                    {formatToJalali(ticket?.send_time)}
                  </div>
                  <div className="text-slate-600 text-sm font-light">
                    {ticket?.message}
                  </div>
                  <div className="flex justify-center">
                    {ticket.status === "completed" ? (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>تکمیل</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span>انتظار</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile View */}
                <div className="sm:hidden p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-800 text-sm mb-2 line-clamp-2">{ticket.title}</h4>
                      <div className="text-xs text-slate-500 ">تاریخ: {formatToJalali(ticket?.send_time)}</div>
                    </div>
                    {ticket.status === "completed" ? (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium flex-shrink-0 ml-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span>تکمیل</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium flex-shrink-0 ml-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                        <span>انتظار</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm">{ticket?.message}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="sm:hidden fixed bottom-6 left-6 z-10">
         <Button 
            size="icon" 
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
            onClick={() => setIsModalOpen(true)}
          >
            <FiPlus size={18} />
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