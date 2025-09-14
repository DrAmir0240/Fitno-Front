import { Button } from "@/components/ui";
import { IoIosArrowBack } from "react-icons/io";

export default function ({historyItems}){
    return(
        <div className="px-4 pb-24">
        <div className="space-y-4">
          {historyItems.map((item) => (
            <div key={item.id} className="bg-[#F3F3F4] rounded-3xl min-h-[100px] p-4 shadow-sm">
              <div className="flex items-center justify-between">
                {/* Right side - Content */}
                <div className="flex items-center gap-3 space-x-reverse flex-1">
                  {/* Colored Circle */}
                  <div className={`w-16 h-16 ${item.color} rounded-3xl flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400 self-end">
                      {item.date}
                    </p>
                  </div>
                </div>

                {/* Left side - Arrow */}
                <Button className="text-gray-300" variant="link">
                <IoIosArrowBack size={28} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

    )
}