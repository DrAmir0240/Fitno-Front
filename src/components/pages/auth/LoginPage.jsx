import { Button, Input } from "@/components/ui";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-[#D0E4FF] min-h-screen max-w-[600px] mx-auto relative px-10 pb-5 flex flex-col">
      <Image
        src="/images/user/pattern2.svg"
        width={300}
        height={300}
        className="absolute top-0 right-0"
        alt="pattern"
      />
      <Image 
        src="/images/user/pattern.svg"
        width={300}
        height={300}
        className="absolute bottom-0 left-0"
        alt="pattern"
      />
      
      <div className="flex justify-center pt-30">
        <Image src="/images/user/frame.svg" width={48} height={48} alt="frame" />
      </div>
   

      <div className="mt-auto mb-15">
        <div className="my-10">
          <h4 className="font-semibold text-base md:text-xl ">ورود</h4>
          <p className="text-[12px] md:text-base mt-3">برای ورود  اطلاعات خود را وارد نمایید.</p>
        </div>
        
        <div className="flex flex-col gap-5">
          <Input 
            label="شماره همراه"
            type="text"
            className="z-10"
          />
          <Input 
            label="کد یکبار مصرف"
            type="text"
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