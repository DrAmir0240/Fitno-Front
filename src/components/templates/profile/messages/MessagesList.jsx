import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { PiPencilSimple, PiTrash } from "react-icons/pi";

import { TbMessageChatbot } from "react-icons/tb";

export default function MessagesList({ messages, onEdit, onDelete, error }) {
  if (error?.status === 404) {
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <TbMessageChatbot size={36} />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">
            پیامی یافت نشد
          </h3>
          <p className="text-gray-500 text-sm">
            در حال حاضر هیچ پیامی برای نمایش وجود ندارد.
          </p>
        </div>
      </div>
    );
  }


   if (!messages) {
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="text-gray-500">در حال بارگذاری پیام‌ها...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl">
      {messages.length === 0 ? (
        <div className="p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              اطلاعیه ای وجود ندارد
            </h3>
            <p className="text-gray-500 text-sm">
              هنوز هیچ پیامی دریافت نکرده‌اید.
            </p>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className="px-4 py-4 border-b border-gray-100 last:border-b-0 group transition-colors duration-200"
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
              <div className="flex items-center gap-2 w-full">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 sm:h-8 sm:w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => onEdit?.(message)}
                    aria-label="جزئیات"
                  >
                    <IoIosArrowBack size={24} className="sm:size-5" />
                  </Button>
                  {onEdit && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 sm:h-8 sm:w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                      onClick={() => onEdit(message)}
                      aria-label="ویرایش پیام"
                    >
                      <PiPencilSimple size={24} className="sm:size-5" />
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 sm:h-8 sm:w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => onDelete(message.id)}
                      aria-label="حذف پیام"
                    >
                      <PiTrash size={24} className="sm:size-5" />
                    </Button>
                  )}
                  <Button className="text-gray-300" variant="link"></Button>
                </div>

                <p className="text-xs text-gray-400 mt-1"></p>
              </div>

              <div className="flex items-center gap-3 justify-end w-full">
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex">
                    <span className="text-xs sm:text-base font-medium text-gray-900">
                      {message?.gym_title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {message?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
