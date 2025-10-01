
"use client";
import { BreadCrumb } from "@/components/shared";
import { useGetGymDetail } from "@/services/queries/Profile";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { MdLocalPhone, MdAccessTime, MdCalendarToday } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { BiDumbbell } from "react-icons/bi";
import { Button } from "@/components/ui";
import { IoArrowForward } from "react-icons/io5";

function ClubDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { data, isLoading } = useGetGymDetail(params.id);
  const club = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3474A8]"></div>
      </div>
    );
  }

  if (!club) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">باشگاه یافت نشد</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <Button
          size="icon"
          onClick={() => router.back()}
          className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-gray-100"
        >
          <IoArrowForward size={24} color="#3474A8" />
        </Button>
        <BreadCrumb title={club?.title || "جزئیات باشگاه"} />
      </div>

      {/* تصویر اصلی */}
      <div className="bg-[#3474A8] rounded-2xl h-[250px] flex justify-center items-center mb-6 relative overflow-hidden">
        <Image
          src={club?.main_img}
          fill
          alt={club?.title}
          className="object-cover"
        />
      </div>

      {/* عنوان و اطلاعات تماس */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
        <h1 className="text-2xl font-bold mb-4 text-[#3474A8]">{club?.title}</h1>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-[#F6EEFF] rounded-xl p-3">
              <MdLocalPhone size={22} color="#1C3DBF" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">شماره تماس</p>
              <p className="font-medium text-sm">{club?.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#F6EEFF] rounded-xl p-3">
              <TiLocation size={22} color="#1C3DBF" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">آدرس</p>
              <p className="font-medium text-sm leading-relaxed">{club?.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* توضیحات */}
      {club?.description && (
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-xl font-bold mb-3 text-[#3474A8] flex items-center gap-2">
            <span>درباره باشگاه</span>
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{club?.description}</p>
        </div>
      )}

      {/* ساعات کاری */}
      {club?.working_hours && (
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-[#3474A8] flex items-center gap-2">
            <MdAccessTime size={24} />
            <span>ساعات کاری</span>
          </h2>
          <div className="bg-[#F6EEFF] rounded-xl p-4">
            <p className="text-sm font-medium">{club?.working_hours}</p>
          </div>
        </div>
      )}

      {/* سانس های موجود */}
      {club?.sessions && club?.sessions?.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-[#3474A8] flex items-center gap-2">
            <MdCalendarToday size={24} />
            <span>سانس های موجود</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {club?.sessions?.map((session, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#F6EEFF] to-[#E8F4FF] rounded-xl p-4 border border-[#3474A8]/20"
              >
                <p className="font-semibold text-sm mb-2">{session?.name}</p>
                <p className="text-xs text-gray-600">{session?.time}</p>
                {session?.capacity && (
                  <p className="text-xs text-gray-500 mt-1">
                    ظرفیت: {session?.capacity} نفر
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* امکانات */}
      {club?.facilities && club?.facilities?.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-[#3474A8] flex items-center gap-2">
            <BiDumbbell size={24} />
            <span>امکانات</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {club?.facilities?.map((facility, index) => (
              <div
                key={index}
                className="bg-[#F6EEFF] rounded-xl p-3 text-center"
              >
                <p className="text-sm font-medium">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* گالری تصاویر */}
      {club?.gallery && club?.gallery?.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-[#3474A8]">گالری تصاویر</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {club?.gallery?.map((image, index) => (
              <div
                key={index}
                className="relative h-[200px] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src={image}
                  fill
                  alt={`تصویر ${index + 1}`}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ClubDetailsPage;