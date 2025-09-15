import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { PiPencilSimple, PiTrash } from "react-icons/pi";

export default function MessagesList({ messages, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl">
      {messages.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          پیامی برای نمایش وجود ندارد.
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className="px-4 py-4 border-b border-gray-100 last:border-b-0 group transition-colors duration-200"
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
              <div className="flex items-center gap-2 w-full">
                <div className="flex  items-center gap-3">
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
                      {message.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {message.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    {message.date} | {message.time}
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
