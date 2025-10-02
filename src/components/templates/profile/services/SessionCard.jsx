"use client";
import { Button } from "@/components/ui";
import { formatAmount, formatToJalali } from "@/utils/formatData";
import React from "react";
import { PiPencilSimpleLine, PiTrash } from "react-icons/pi";

export const SessionCard = ({ session, onEdit, onDelete }) => {

  return (
    <div className="bg-[#F3F3F4] dark:bg-gray-700 rounded-3xl p-4 relative transition-colors duration-300">
      {(onEdit || onDelete) && (
        <div className="absolute top-3 left-3 flex gap-2">
          {onEdit && (
            <Button
              variant="outline"
              onClick={onEdit}
              className="rounded-full shadow-sm bg-white dark:bg-gray-600 border-gray-200 dark:border-gray-500"
              aria-label="ویرایش"
              size="icon"
            >
              <PiPencilSimpleLine className="text-base text-gray-600 dark:text-gray-300" />
            </Button>
          )}
          {onDelete && (
            <Button
              variant="outline"
              onClick={onDelete}
              className="rounded-full shadow-sm bg-white dark:bg-gray-600 border-gray-200 dark:border-gray-500"
              aria-label="حذف"
              size="icon"
            >
              <PiTrash className="text-base text-red-500 dark:text-red-400" />
            </Button>
          )}
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
            {session.gym_title || session.title}
          </h3>

          <div className="space-y-2">
            <div className="grid gap-3 md:grid-cols-2 ">
              <div className="flex items-center gap-2">
                <div className="bg-white dark:bg-gray-600 p-2 rounded-xl transition-colors duration-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  تعداد روزها: {session.days} روز
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-white dark:bg-gray-600 p-2 rounded-xl transition-colors duration-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  جلسات باقیمانده: {session.session_left} جلسه
                </span>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 ">
              <div className="flex items-center gap-2">
                <div className="bg-white dark:bg-gray-600 p-2 rounded-xl transition-colors duration-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  تاریخ شروع: {formatToJalali(session.start_date)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-white dark:bg-gray-600 p-2 rounded-xl transition-colors duration-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  تاریخ پایان: {formatToJalali(session.validity_date)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white dark:bg-gray-600 p-2 rounded-xl transition-colors duration-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                قیمت: {formatAmount(session.price)}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <span className="border border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-300 px-4 py-1 rounded-full text-sm transition-colors duration-300">
              {session.days
                ? `تعداد روز: ${session.days} روز`
                : "تعداد ماه: 2 ماه"}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                session.status === "فعال"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
              }`}
            >
              {session.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};