"use client";
import Link from "next/link";
import { Button } from "@/components/ui";
import { BiDumbbell, BiHome, BiSearch } from "react-icons/bi";
import { MdFitnessCenter } from "react-icons/md";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-10 from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <MdFitnessCenter className="text-white text-5xl" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>

        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              باشگاه مورد نظر یافت نشد!
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد. ممکن است آدرس را اشتباه وارد کرده باشید یا باشگاه حذف شده باشد.
            </p>
            
            {/* دکمه‌های اقدام */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Link href="/" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <BiHome className="ml-2" />
                  بازگشت به خانه
                </Button>
              </Link>
              
              <Link href="/clubs" className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  <BiSearch className="ml-2" />
                  جستجوی باشگاه‌ها
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <BiDumbbell className="text-blue-500" />
            راهنمایی
          </h3>
          <div className="text-sm text-gray-600 space-y-2 text-right">
            <p className="flex items-center  gap-2">
              <span>✓ از صحت آدرس وارد شده اطمینان حاصل کنید</span>
            </p>
            <p className="flex items-center gap-2">
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
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
          >
            تماس با پشتیبانی
          </Button>
        </div>
      </div>
    </div>
  );
}