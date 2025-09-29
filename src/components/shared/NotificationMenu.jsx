"use client";

import { LuBell } from "react-icons/lu";
import NavigationMenu from "@/components/ui/navigation-menu";

const NotificationMenu = ({ messageItems = [] }) => {
  const menuItems = [
    {
      triggerLabel: (
        <div className="relative">
          <LuBell size={20} />
          {messageItems.some(item => item.unread) && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </div>
      ),
      trigger: true,
      content: (
        <div className="w-80 p-2">
          <div className="flex justify-between items-center mb-4 p-2 border-b">
            {messageItems.some(item => item.unread) && (
              <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
               جدید {messageItems.filter(item => item.unread).length} 
              </span>
            )}
            <h3 className="font-semibold">پیام‌ها</h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {messageItems.length > 0 ? (
              messageItems.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                    message.unread ? 'bg-blue-50 border-r-2 border-r-blue-500' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-gray-500">{message.time}</span>
                    <h4 className="font-medium text-sm">{message.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 text-right">
                    {message.content}
                  </p>
                  {message.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <LuBell size={32} className="mx-auto mb-2 opacity-50" />
                <p>پیامی وجود ندارد</p>
              </div>
            )}
          </div>
          
          <div className="mt-4 p-2 border-t">
            <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 py-2">
              مشاهده همه پیام‌ها
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <NavigationMenu
      items={menuItems}
      className="flex items-center"
    />
  );
};

export default NotificationMenu;