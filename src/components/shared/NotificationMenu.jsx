"use client";

import { LuBell } from "react-icons/lu";
import NavigationMenu from "@/components/ui/navigation-menu";
import { Button } from "../ui";

const NotificationMenu = ({ messageItems = [] }) => {
  const menuItems = [
    {
      triggerLabel: (
        <div className="relative">
          <LuBell 
            size={20} 
            className="text-gray-700 dark:text-gray-300 transition-colors duration-300" 
          />
          {messageItems.some(item => item.unread) && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-800"></span>
          )}
        </div>
      ),
      trigger: true,
      content: (
        <div className="max-w-80 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-gray-900/80 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex justify-between items-center mb-4 p-2 border-b border-gray-200 dark:border-gray-600">
            {messageItems.some(item => item.unread) && (
              <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
               جدید {messageItems.filter(item => item.unread).length} 
              </span>
            )}
            <h3 className="font-semibold text-gray-900 dark:text-white">پیام‌ها</h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {messageItems.length > 0 ? (
              messageItems.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                    message.unread ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-r-blue-500 dark:border-r-blue-400' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
                    <h4 className="font-medium text-sm text-gray-900 dark:text-white">{message.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 text-right">
                    {message.content}
                  </p>
                  {message.unread && (
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2"></div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <LuBell size={32} className="mx-auto mb-2 opacity-50" />
                <p>پیامی وجود ندارد</p>
              </div>
            )}
          </div>
          
          <div className="mt-4 p-2 border-t border-gray-200 dark:border-gray-600">
            <Button 
              variant="link" 
              className="w-full text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-0 transition-colors duration-300"
            >
              مشاهده همه پیام‌ها
            </Button>
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