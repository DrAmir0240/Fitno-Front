import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { PiPencilSimple, PiTrash } from "react-icons/pi";
import { TbMessageChatbot } from "react-icons/tb";

export default function MessagesList({ messages, onEdit, onDelete, error }) {
  if (error?.status === 404) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
            <TbMessageChatbot size={36} className="text-gray-500 dark:text-gray-400 transition-colors duration-300" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
            پیامی یافت نشد
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
            در حال حاضر هیچ پیامی برای نمایش وجود ندارد.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      {messages?.length === 0 ? (
        <div className="p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
              اطلاعیه ای وجود ندارد
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
              هنوز هیچ پیامی دریافت نکرده‌اید.
            </p>
          </div>
        </div>
      ) : (
        messages?.map((message) => (
          <div
            key={message.id}
            className="px-4 py-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 group transition-all duration-300 "
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
              <div className="flex items-center gap-2 w-full">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 sm:h-8 sm:w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/30 transition-colors duration-300"
                    onClick={() => onEdit?.(message)}
                    aria-label="جزئیات"
                  >
                    <IoIosArrowBack size={24} className="sm:size-5" />
                  </Button>
                  {onEdit && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 sm:h-8 sm:w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/30 transition-colors duration-300"
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
                      className="h-10 w-10 sm:h-8 sm:w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/30 transition-colors duration-300"
                      onClick={() => onDelete(message.id)}
                      aria-label="حذف پیام"
                    >
                      <PiTrash size={24} className="sm:size-5" />
                    </Button>
                  )}
                  <Button className="text-gray-300 dark:text-gray-600" variant="link"></Button>
                </div>

                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 transition-colors duration-300"></p>
              </div>

              <div className="flex items-center gap-3 justify-end w-full">
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex">
                    <span className="text-xs sm:text-base font-medium text-gray-900 dark:text-white transition-colors duration-300">
                      {message?.gym_title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
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