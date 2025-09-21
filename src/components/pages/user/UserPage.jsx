import SearchBar from "../../navigation/SearchBar";
import UserMenu from "../../navigation/UserMenu";
import Image from "next/image";
import Header from "../../layout/userPanel/Header";

const UserHomePage = () => {
  return (
     <div className="relative"> 
       
      
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
      <Image
        src="/images/user/userBack.svg"
        alt="userBack"
        width={375}
        height={458}
       className="absolute top-75  left-1/12"
  
      />
      <Image
        src="/images/user/ellipse.svg"
        alt="userBack"
        width={375}
        height={458}
       className="absolute top-75  left-1/12 rounded-full blur-3xl" 
  
      />
      
     </div>
  );
};

export default UserHomePage;