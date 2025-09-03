import { UserLayout } from "../templates";
import SearchBar from "../molecules/SearchBar";
import UserMenu from "../molecules/UserMenu";

import Image from "next/image";
import Header from "../organisms/userPanel/Header";

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
