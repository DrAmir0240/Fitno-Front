import Image from "next/image";
import { Button } from "@/components/ui";
import { TbEdit } from "react-icons/tb";

export const BannerItem =({ src, alt })=>{
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={331}
        height={189}
        priority
        className="mt-5 w-full h-auto object-cover rounded-lg"
      />
      <Button 
        size="icon" 
        className="absolute top-3 right-3 "
      >
        <TbEdit size={22} />
      </Button>
    </div>
  );
}
