import ClubMenu from "@/components/navigation/ClubMenu";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/images/banner.svg"
          alt="banner"
          width={800}
          height={180}
          priority
          className="w-full h-auto max-w-4xl mx-auto rounded-lg "
        />
        <ClubMenu />
      </div>
    </div>
  );
}