"use client";
import { Button, Input } from "@/components/ui";
import Image from "next/image";
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import { useRef, useState } from "react";
import { useAuth } from "@/context/authContext";
import { useUpgradeProfile } from "@/services/mutation/profile";

function SettingPage() {
  const {mutate} = useUpgradeProfile()
  const { user } = useAuth();
  const isManager = user?.is_gym_manager;
  console.log(isManager);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
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
    mutate(
      {
        national_code: "string",
        verification_code: "string",
        city: "string",
        invitation_code: "string",
      });
  };

  return (
    <>
      <div className="   bg-[#289DFC] min-h-[167px] rounded-b-4xl ">
        <div className="text-white px-4 py-4 flex items-center justify-between mb-4">
          <div className="w-10"></div>
          <h1 className="text-lg font-semibold ">تنظیمات پروفایل</h1>
          <Button variant="link">
            <FaArrowLeftLong size={24} color="white" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center -mt-16 z-10 relative">
        <div className="relative">
          <Image
            src={selectedImage || "/images/user/user.png"}
            width={125}
            height={125}
            alt="profile"
            className="z-10 rounded-full border-4 border-white p-0 object-cover"
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

      <form className="mt-5 flex flex-col gap-5 px-8">
        <Input label="نام و نام خانوادگی" type="text" className="rounded-2xl" />
        <Input
          label="شماره همراه / ایمیل"
          type="text"
          className="rounded-2xl"
        />
        <Input label="تاریح تولد" type="text" className="rounded-2xl" />
        <Input label="کد ملی" type="text" className="rounded-2xl" />
        <Input label="جنسیت" type="text" className="rounded-2xl" />
        <Input label="استان" type="text" className="rounded-2xl" />
        <Input label="شهر" type="text" className="rounded-2xl" />
        <Button className="h-14 mt-4">تایید</Button>
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
