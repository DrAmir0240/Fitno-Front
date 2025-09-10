
import SearchBar from "../navigation/SearchBar";
import UserMenu from "../navigation/UserMenu";
import Image from "next/image";

import { UserLayout } from "@/layouts";
import Header from "../layout/userPanel/Header";

const UserHomePage = () => {
  return (
    <UserLayout>
      
     <Header />
      <SearchBar placeholder="جستجوی باشگاه" />

      <Image
        src="/images/banner.svg"
        alt="banner"
        width={700}
        height={180}
        priority
        className="mt-5"
      />

      <UserMenu />

      <Image
        src="/images/banner2.svg"
        alt="banner"
        width={700}
        height={180}
        priority
        className="mt-5"
      />
    </UserLayout>
  );
};

export default UserHomePage;
