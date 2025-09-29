"use client";
import { CgGym } from "react-icons/cg";
import { Button } from "@/components/ui";
import Image from "next/image";
import {
  MdLocalPhone,
  MdAccessTime,
  MdDateRange,
  MdAttachMoney,
  MdCalendarToday,
} from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import Dialog from "@/components/ui/dialog";
import { formatAmount } from "@/utils/formatData";

export const ClubModal = ({ club, open, onOpenChange , showButton = false , showMembership = false }) => {
  const translateDay = (day) => {
    const daysMap = {
      saturday: "شنبه",
      sunday: "یکشنبه",
      monday: "دوشنبه",
      tuesday: "سه شنبه",
      wednesday: "چهارشنبه",
      thursday: "پنجشنبه",
      friday: "جمعه",
    };
    return daysMap[day] || day;
  };

  if (!club) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      contentClassName="max-w-md p-0 bg-[#E4E4E4] !rounded-2xl border-0"
    >
      <div className="space-y-2">
        <div className="flex justify-center bg-blue-400 rounded-2xl p-7">
          <Image
            className="rounded-full"
            src={club?.main_img}
            width={120}
            height={60}
            alt={club?.title || "باشگاه"}
          />
        </div>

        <div className="p-5">
          <h3 className="font-bold text-center text-lg">{club.title}</h3>

          <div className="flex flex-col gap-5 mt-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#F6EEFF] rounded-xl p-2">
                <MdLocalPhone size={19} color="#1C3DBF" />
              </div>
              <div>
                <p className="text-gray-600">{club.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#F6EEFF] rounded-xl p-2">
                <TiLocation size={19} color="#1C3DBF" />
              </div>
              <div>
                <p className="text-gray-600">{club.address}</p>
              </div>
            </div>

            {club.facilities && (
              <div className="flex items-center gap-3">
                <div className="bg-[#F6EEFF] rounded-xl p-2">
                  <CgGym size={19} color="#1C3DBF" />
                </div>
                <div>
                  <p className="text-gray-600">امکانات: {club.facilities}</p>
                </div>
              </div>
            )}

            {club.work_days_per_week && (
              <div className="flex items-center gap-3">
                <div className="bg-[#F6EEFF] rounded-xl p-2">
                  <MdDateRange size={19} color="#1C3DBF" />
                </div>
                <div>
                  <p className="text-gray-600">
                    روزهای کاری در هفته: {translateDay(club.work_days_per_week)}
                  </p>
                </div>
              </div>
            )}

            {club.work_hours_per_day && (
              <div className="flex items-center gap-3">
                <div className="bg-[#F6EEFF] rounded-xl p-2">
                  <MdAccessTime size={19} color="#1C3DBF" />
                </div>
                <div>
                  <p className="text-gray-600">
                    ساعات کاری: {club.work_hours_per_day}
                  </p>
                </div>
              </div>
            )}
          </div>
 {showMembership &&club.membership_types && club.membership_types.length > 0 && (
              <div className="mt-2">
                <h4 className="font-semibold text-center mb-3 text-gray-800">انواع عضویت</h4>
                  <div className="space-y-3">
                    {club.membership_types.map((membership, index) => (
                      <div 
                        key={membership.id || index} 
                        className="bg-white rounded-xl p-3 shadow-sm border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <MdCalendarToday size={16} className="text-blue-500" />
                            <span className="font-semibold text-blue-600 text-sm">
                              {membership.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MdAttachMoney size={16} className="text-green-500" />
                            <span className="font-bold text-green-600 text-sm">
                              {formatAmount(membership.price)}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                         تعداد جلسات: {membership.days} روز
                        </div>
                      </div>
                    ))}
                  </div>

              </div>
            )}
          {showButton && (
        <div className=" mt-7 border-t rounded-b-2xl ">
          <Button variant="custom" color="#314DBAE8" className="w-full">
            ثبت نام در باشگاه
          </Button>
        </div>
      )}
        </div>
      </div>
    </Dialog>
  );
};
