"use client";
import Link from "next/link";
import { Button } from "@/components/ui";
import { BiDumbbell, BiHome, BiSearch } from "react-icons/bi";
import { MdFitnessCenter } from "react-icons/md";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-10 from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <MdFitnessCenter className="text-white text-5xl" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 dark:bg-yellow-500 rounded-full animate-pulse"></div>
        </div>

        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">404</h1>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
              باشگاه مورد نظر یافت نشد!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
              متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد. ممکن است آدرس را اشتباه وارد کرده باشید یا باشگاه حذف شده باشد.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Link href="/" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300">
                  <BiHome className="ml-2" />
                  بازگشت به خانه
                </Button>
              </Link>
              
              <Link href="/clubs" className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  <BiSearch className="ml-2" />
                  جستجوی باشگاه‌ها
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-2 transition-colors duration-300">
            <BiDumbbell className="text-blue-500 dark:text-blue-400" />
            راهنمایی
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-right transition-colors duration-300">
            <p className="flex items-center gap-2">
              <span>✓ از صحت آدرس وارد شده اطمینان حاصل کنید</span>
            </p>
            <p className="flex items-center  gap-2">
              <span>✓ می‌توانید از طریق صفحه جستجو باشگاه مورد نظر خود را پیدا کنید</span>
            </p>
            <p className="flex items-center  gap-2">
              <span>✓ در صورت مشکل با پشتیبانی تماس بگیرید</span>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Button 
            variant="ghost" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
          >
            تماس با پشتیبانی
          </Button>
        </div>
      </div>
    </div>
  );
}