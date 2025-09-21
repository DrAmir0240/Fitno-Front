import ClubMenu from "@/components/navigation/ClubMenu";

import Image from "next/image";
export default function DashboardPage() {
  return (
    <div>
      <Image
        src="/images/banner.svg"
        alt="banner"
        width={800}
        height={180}
        priority
        className="mt-5 mx-auto"
      />
      <ClubMenu />
    </div>
  );
}
