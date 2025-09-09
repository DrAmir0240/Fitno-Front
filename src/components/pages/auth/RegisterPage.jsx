import { Button, Input } from "@/components/ui";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="bg-[#D0E4FF] min-h-screen max-w-[600px] mx-auto relative px-10 pb-5">
      <Image
        src="/images/pattern2.svg"
        width={300}
        height={300}
        className="absolute top-0 right-0 "
        alt="pattern"
      />
      <Image 
        src="/images/pattern.svg"
        width={300}
        height={300}
        className="absolute bottom-0 left-0 "
        alt="pattern"
      />
         <div className="flex justify-center pt-10">
        <Image src="/images/frame.svg" width={48} height={48} alt="frame" />
      </div>
   
      <div className="mt-10 ">
        <h4 className="font-semibold text-base md:text-xl">ثبت نام</h4>
        <p className="text-[12px] md:text-base mt-3">برای ثبت‌نام اطلاعات خود را وارد نمایید.</p>
        <div className="mt-5 flex flex-col gap-5 ">
          <Input 
           label="نام و نام خانوادگی"
           type="text"
           className="z-10"
            />
          <Input 
           label="شماره همراه / ایمیل"
           type="text"
            />
            <Input 
           label="جنسیت"
           type="text"
            />
          <Input
           label="کلمه عبور"
           type="text"
           required
            />
          <Input 
           label="تکرار کلمه عبور"
           type="text"
           className="z-12"
            required
            />
          <Button className="mt-5 z-10">
            تایید
          </Button>

        </div>
      </div>
    </div>
  );
}
