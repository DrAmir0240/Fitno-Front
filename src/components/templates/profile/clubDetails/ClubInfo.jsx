import Image from "next/image";
import { MdAccessTime, MdCalendarToday } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";
import { Button } from "@/components/ui";
import { IoArrowForward } from "react-icons/io5";
import { formatAmount } from "@/utils/formatData";

export const ClubInfo =({ club }) =>{
  const handleRegister = () => {
    console.log("ثبت نام در باشگاه:", club?.title);
    // router.push(`/register/${club?.id}`);
  };

  return (
    <>
      {/* توضیحات */}
      {club?.description && (
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-[#3474A8] flex items-center gap-2">
            <div className="w-1 h-6 bg-[#3474A8] rounded-full"></div>
            <span>درباره باشگاه</span>
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">{club?.description}</p>
        </div>
      )}

      {/* ساعات کاری */}
      {club?.working_hours && (
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-5 text-[#3474A8] flex items-center gap-2">
            <MdAccessTime size={26} />
            <span>ساعات کاری</span>
          </h2>
          <div className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] rounded-2xl p-5 border border-[#3474A8]/10">
            <p className="text-base font-medium text-gray-800">{club?.working_hours}</p>
          </div>
        </div>
      )}

      {/* سانس های موجود */}
      {club?.membership_types && club?.membership_types?.length > 0 && (
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-[#3474A8] flex items-center gap-2">
            <MdCalendarToday size={26} />
            <span> سانس های موجود</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {club?.membership_types?.map((membership, index) => (
              <div
                key={membership?.id || index}
                className="relative bg-gradient-to-br from-[#F6EEFF] via-[#F0F0FF] to-[#E8F4FF] rounded-2xl p-6 border-2 border-[#3474A8]/20 hover:border-[#3474A8]/40 transition-all hover:shadow-xl group"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#576290] group-hover:text-[#3474A8] transition-colors">
                    {membership?.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/60 rounded-xl p-3">
                    <span className="text-sm text-gray-600">مدت زمان:</span>
                    <span className="font-bold text-base text-[#3474A8]">
                      {membership?.days} روز
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white/60 rounded-xl p-3">
                    <span className="text-sm text-gray-600">قیمت:</span>
                    <span className="font-bold text-base text-green-600">
                      {formatAmount(membership?.price)}
                    </span>
                  </div>
                  {membership?.description && (
                    <div className="bg-white/60 rounded-xl p-3 mt-3">
                      <p className="text-sm text-gray-700 leading-relaxed">
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

      {/* امکانات */}
      {club?.facilities && (
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-5 text-[#3474A8] flex items-center gap-2">
            <BiDumbbell size={26} />
            <span>امکانات</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {typeof club?.facilities === 'string' ? (
              club?.facilities?.split(',').map((facility, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] rounded-2xl p-4 text-center hover:shadow-md transition-shadow border border-[#3474A8]/10"
                >
                  <p className="text-sm font-medium text-gray-800">{facility.trim()}</p>
                </div>
              ))
            ) : (
              <div className="bg-gradient-to-br from-[#F6EEFF] to-[#E8F4FF] rounded-2xl p-4 text-center">
                <p className="text-sm font-medium text-gray-800">{club?.facilities}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* گالری تصاویر */}
      {club?.gallery && club?.gallery?.length > 0 && (
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-[#3474A8] flex items-center gap-2">
            <div className="w-1 h-6 bg-[#3474A8] rounded-full"></div>
            <span>گالری تصاویر</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {club?.gallery?.map((image, index) => (
              <div
                key={index}
                className="relative h-[220px] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-md hover:shadow-xl group"
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

      {/* دکمه ثبت نام */}
      <div className="bg-white rounded-3xl p-8 shadow-sm mb-8 border border-gray-100 text-center">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-[#3474A8]">
            عضویت در باشگاه {club?.title}
          </h3>
          <p className="text-gray-600 mb-6">
            همین حالا در باشگاه {club?.title} ثبت نام کنید و از امکانات ویژه بهره‌مند شوید
          </p>
          <Button
            onClick={handleRegister}
            className="bg-gradient-to-r w-full from-[#3474A8] to-[#5FA3D8] hover:from-[#2C6399] hover:to-[#4A8BC2] text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold"
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
