import ClubMenu from "@/components/navigation/ClubMenu";
import ClubPanelLayout from "@/layouts/ClubPanelLayout";

import Image from "next/image";
export default function DashboardPage() {
  return (
    <ClubPanelLayout>
    <div >
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
    </ClubPanelLayout>
  );
}