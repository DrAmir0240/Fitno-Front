"use client";
import { Button, Input } from "@/components/ui";
import Image from "next/image";
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/authContext";
import { useUpdateProfile, useUpgradeProfile } from "@/services/mutation/profile";
import { useGetProfile } from "@/services/queries/Profile";
import { useForm } from "react-hook-form";

function SettingPage() {
  const { data } = useGetProfile();
  const userInfo = data?.data;
  const { mutate: updateProfile } = useUpdateProfile();
  const { mutate: upgradeProfile } = useUpgradeProfile();
  const { user } = useAuth();
  const isManager = user?.is_gym_manager;
  
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // استفاده از React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      full_name: userInfo?.full_name || "",
      national_code: userInfo?.national_code || "",
      city: userInfo?.city || "",
      gender: userInfo?.gender || "male",
    },
  });

  // وقتی userInfo تغییر کرد، مقادیر فرم را آپدیت کن
  useEffect(() => {
    if (userInfo) {
      setValue("full_name", userInfo.full_name || "");
      setValue("national_code", userInfo.national_code || "");
      setValue("city", userInfo.city || "");
      setValue("gender", userInfo.gender || "male");
    }
  }, [userInfo, setValue]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpgradeSubmit = (e) => {
    e.preventDefault();
    upgradeProfile({
      national_code: "string",
      verification_code: "string",
      city: "string",
      invitation_code: "string",
    });
  };

  const onSubmit = (formData) => {
    // ایجاد FormData برای ارسال فایل
    const submitData = new FormData();
    
    // اضافه کردن فیلدهای متنی
    submitData.append("full_name", formData.full_name);
    submitData.append("national_code", formData.national_code);
    submitData.append("city", formData.city);
    submitData.append("gender", formData.gender);
    
    // اضافه کردن فایل اگر انتخاب شده باشد
    if (selectedFile) {
      submitData.append("profile_photo", selectedFile);
    }

    console.log("Data to submit:", formData);
    updateProfile(submitData);
  };

  return (
    <>
      <div className="bg-[#289DFC] min-h-[167px] rounded-b-4xl">
        <div className="text-white px-4 py-4 flex items-center justify-between mb-4">
          <div className="w-10"></div>
          <h1 className="text-lg font-semibold">تنظیمات پروفایل</h1>
          <Button variant="link">
            <FaArrowLeftLong size={24} color="white" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center -mt-16 z-10 relative">
        <div className="relative">
          <Image
            src={selectedImage || userInfo?.profile_photo || "/images/user/user.png"}
            width={125}
            height={125}
            alt="profile"
            className="z-10 rounded-full border-4 w-[125px] h-[125px] border-white p-0 object-cover"
          />

          <div
            className="absolute bottom-0 left-0 bg-[#289DFC] rounded-full p-2 cursor-pointer border-2 border-white"
            onClick={handleAddIconClick}
          >
            <FaPlus size={16} color="white" />
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-5 px-4">
        <Input 
          label="نام و نام خانوادگی" 
          type="text" 
          className="rounded-2xl"
          {...register("full_name", {
            required: "نام و نام خانوادگی الزامی است",
          })}
          error={errors.full_name?.message}
        />
        
        <Input
          label="شماره همراه "
          type="text"
          className="rounded-2xl"
          value={userInfo?.phone || ""}
          disabled
        />
        <Input
          label=" ایمیل"
          type="text"
          className="rounded-2xl"
          value={userInfo?.email || ""}
          disabled
        />
        
        <Input 
          label="کد ملی" 
          type="text" 
          className="rounded-2xl"
          {...register("national_code", {
            required: "کد ملی الزامی است",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "کد ملی باید 10 رقم باشد"
            }
          })}
          error={errors.national_code?.message}
        />
        
        {/* برای جنسیت بهتر است از select استفاده کنید */}
        <div>
          <label className="block text-sm font-medium mb-2">جنسیت</label>
          <select 
            {...register("gender")}
            className="w-full p-3 border border-gray-300 rounded-2xl"
          >
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>
        
        <Input 
          label="شهر" 
          type="text" 
          className="rounded-2xl"
          {...register("city", {
            required: "شهر الزامی است"
          })}
          error={errors.city?.message}
        />
        
        <Button type="submit" className="h-14 mt-4">
          تایید و ذخیره تغییرات
        </Button>
        
        {!isManager ? (
          <Button onClick={handleUpgradeSubmit} className="h-14 mt-4 bg-indigo-500">
            ارتقای پروفایل به مدیر باشگاه
          </Button>
        ) : (
          <Button href="/club-panel" className="h-14 mt-4 bg-indigo-500">
            ورود به پنل باشگاه
          </Button>
        )}
      </form>
    </>
  );
}

export default SettingPage;