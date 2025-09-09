import { Button } from "@/components/ui";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-[500px] mx-auto">
          <Image
            src="/images/auth.jpg"
            alt="Authentication Background"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-[#289DFC30]"></div>
        </div>
        
      </div>
       <div className="absolute bottom-10 left-0 right-0 z-[999] p-6">
        <div className="max-w-[450px] mx-auto flex flex-col gap-4">
          <Button className="w-full " >
            ثبت نام
          </Button>
          <Button className="w-full" >
            ورود
          </Button>
          <Button 
            endIcon={<FcGoogle size={18} />}
            className="w-full "
            variant="outline"
          >
            ورود با اکانت گوگل
          </Button>
        </div>
      </div>
      
    </div>
  );
}