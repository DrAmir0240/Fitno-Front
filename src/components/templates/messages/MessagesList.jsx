import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";

export default function MessagesList({ messages }) {
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
            className="px-4 py-4 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-end">
                <Button className="text-gray-300" variant="link">
                  <IoIosArrowBack color="#2563EB" size={28} />
                </Button>
                <p className="text-xs text-gray-400 mt-1"></p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex ">
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