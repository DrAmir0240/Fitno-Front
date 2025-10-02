import Image from "next/image";
import { MdAccessTime, MdCalendarToday } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";
import { Button } from "@/components/ui";
import { IoArrowForward } from "react-icons/io5";
import { formatAmount } from "@/utils/formatData";

export const ClubInfo = ({ club }) => {
  return (
    <>
      {club?.description && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-4 text-[#3474A8] dark:text-blue-400 flex items-center gap-2 transition-colors duration-300">
            <div className="w-1 h-6 bg-[#3474A8] dark:bg-blue-400 rounded-full transition-colors duration-300"></div>
            <span>درباره باشگاه</span>
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            {club?.description}
          </p>
        </div>
      )}

      {club?.working_hours && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-5 text-[#3474A8] dark:text-blue-400 flex items-center gap-2 transition-colors duration-300">
            <MdAccessTime size={26} className="text-[#3474A8] dark:text-blue-400 transition-colors duration-300" />
            <span>ساعات کاری</span>
          </h2>
          <div className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-5 border border-[#3474A8]/10 dark:border-blue-400/20 transition-colors duration-300">
            <p className="text-base font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
              {club?.working_hours}
            </p>
          </div>
        </div>
      )}

      {club?.membership_types && club?.membership_types?.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-6 text-[#3474A8] dark:text-blue-400 flex items-center gap-2 transition-colors duration-300">
            <MdCalendarToday size={26} className="text-[#3474A8] dark:text-blue-400 transition-colors duration-300" />
            <span> سانس های موجود</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {club?.membership_types?.map((membership, index) => (
              <div
                key={membership?.id || index}
                className="relative bg-gradient-to-br from-[#F6EEFF] via-[#F0F0FF] to-[#E8F4FF] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-2xl p-6 border-2 border-[#3474A8]/20 dark:border-blue-400/30 hover:border-[#3474A8]/40 dark:hover:border-blue-400/50 transition-all hover:shadow-xl dark:hover:shadow-gray-900/50 group"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#576290] dark:text-gray-200 group-hover:text-[#3474A8] dark:group-hover:text-blue-400 transition-colors duration-300">
                    {membership?.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/60 dark:bg-gray-600/60 rounded-xl p-3 transition-colors duration-300">
                    <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">مدت زمان:</span>
                    <span className="font-bold text-base text-[#3474A8] dark:text-blue-400 transition-colors duration-300">
                      {membership?.days} روز
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white/60 dark:bg-gray-600/60 rounded-xl p-3 transition-colors duration-300">
                    <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">قیمت:</span>
                    <span className="font-bold text-base text-green-600 dark:text-green-400 transition-colors duration-300">
                      {formatAmount(membership?.price)}
                    </span>
                  </div>
                  {membership?.description && (
                    <div className="bg-white/60 dark:bg-gray-600/60 rounded-xl p-3 mt-3 transition-colors duration-300">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                        {membership?.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {club?.facilities && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-5 text-[#3474A8] dark:text-blue-400 flex items-center gap-2 transition-colors duration-300">
            <BiDumbbell size={26} className="text-[#3474A8] dark:text-blue-400 transition-colors duration-300" />
            <span>امکانات</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {typeof club?.facilities === 'string' ? (
              club?.facilities?.split(',').map((facility, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] dark:from-gray-700 dark:to-gray-600 rounded-2xl p-4 text-center hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-300 border border-[#3474A8]/10 dark:border-gray-600"
                >
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    {facility.trim()}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] dark:from-gray-700 dark:to-gray-600 rounded-2xl p-4 text-center">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  {club?.facilities}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {club?.gallery && club?.gallery?.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-6 text-[#3474A8] dark:text-blue-400 flex items-center gap-2 transition-colors duration-300">
            <div className="w-1 h-6 bg-[#3474A8] dark:bg-blue-400 rounded-full transition-colors duration-300"></div>
            <span>گالری تصاویر</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {club?.gallery?.map((image, index) => (
              <div
                key={index}
                className="relative h-[220px] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-md hover:shadow-xl dark:hover:shadow-gray-900/50 group"
              >
                <Image
                  src={image}
                  fill
                  alt={`تصویر ${index + 1}`}
                  className="object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-8 border border-gray-100 dark:border-gray-700 text-center transition-colors duration-300">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-[#3474A8] dark:text-blue-400 transition-colors duration-300">
            عضویت در باشگاه {club?.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
            همین حالا در باشگاه {club?.title} ثبت نام کنید و از امکانات ویژه بهره‌مند شوید
          </p>
          <Button
            href={`/profile/sign-club/${club?.id}`}
            className="bg-gradient-to-r w-full from-[#3474A8] to-[#5FA3D8] hover:from-[#2C6399] hover:to-[#4A8BC2] dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold"
            size="lg"
          >
            <span className="flex items-center gap-2">
              ثبت نام در باشگاه
              <IoArrowForward className="mr-2" />
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}