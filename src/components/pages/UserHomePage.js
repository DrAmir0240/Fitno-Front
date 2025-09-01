import { UserLayout } from "../templates";
import { HiUser } from "react-icons/hi2";
import { TbWallet } from "react-icons/tb";
import SearchBar from "../molecules/SearchBar";
import UserMenu from "../molecules/UserMenu";

import Image from "next/image";

const UserHomePage = () => {
  return (
    <UserLayout>
      
      <header>
        <section className="flex  justify-between items-center mb-5">
          <div>
            <div className="bg-[#289DFC38] w-[92px] h-[33px] rounded-2xl flex justify-center items-center">
              لوگو
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <TbWallet size={24} />
            <HiUser size={24} />
          </div>
        </section>
      </header>
      <SearchBar placeholder="جستجوی باشگاه" />

      <Image
        src="/images/banner.svg"
        alt="banner"
        width={700}
        height={180}
        priority
        className="mt-5"
      />

      {/*  Menu Grid */}
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
