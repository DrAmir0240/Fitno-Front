import Link from "next/link";

import { ThemeToggle } from "../ui/ThemeToggle";

const Header = ({ className = "" }) => {

  return (
    <header className={`bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* منوی ناوبری */}
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            خانه
          </Link>
          <Link 
            href="/profile" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            پروفایل
          </Link>
          <Link 
            href="/club-panel" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            باشگاه
          </Link>
          <Link 
            href="/admin/users" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            مدیریت
          </Link>
          <Link 
            href="/auth" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            ثبت‌نام | ورود
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;