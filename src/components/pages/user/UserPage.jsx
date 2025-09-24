import SearchBar from "../../navigation/SearchBar";
import UserMenu from "../../navigation/UserMenu";
import Image from "next/image";
import Header from "../../layout/userPanel/Header";

const UserHomePage = () => {
  return (
    <div className="relative min-h-screen ">
      {/* Header */}
      <Header />
      
      {/* Search Bar */}
      <div className="md:px-6 lg:px-8 mt-4">
        <SearchBar placeholder="جستجوی باشگاه" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto  md:px-6 lg:px-8">
        {/* First Banner */}
        <div className="mt-5 md:mt-6 lg:mt-8">
          <Image
            src="/images/banner.svg"
            alt="banner"
            width={700}
            height={180}
            priority
            className="w-full h-auto max-w-4xl mx-auto"
          />
        </div>

        {/* User Menu */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          <UserMenu />
        </div>

        {/* Second Banner */}
        <div className="mt-5 md:mt-6 lg:mt-8">
          <Image
            src="/images/banner2.svg"
            alt="banner"
            width={700}
            height={180}
            priority
            className="w-full h-auto max-w-4xl mx-auto"
          />
        </div>
      </div>

      {/* Background Images */}
      <div className="relative">
        {/* User Back Image */}
        <Image
          src="/images/user/userBack.svg"
          alt="userBack"
          width={375}
          height={458}
          className="absolute hidden md:block -top-20 md:-top-30 lg:-top-40 left-4 md:left-8 lg:left-12 w-48 md:w-64 lg:w-80 h-auto opacity-60"
        />
        
        {/* Ellipse Background */}
        <Image
          src="/images/user/ellipse.svg"
          alt="userBack"
          width={375}
          height={458}
          className="absolute hidden md:block -top-20 md:-top-30 lg:-top-40 left-4 md:left-8 lg:left-12 w-48 md:w-64 lg:w-80 h-auto rounded-full blur-3xl opacity-40"
        />

        {/* Mobile Background Images */}
        <Image
          src="/images/user/userBack.svg"
          alt="userBack"
          width={200}
          height={250}
          className="absolute md:hidden -top-10 left-2 w-32 h-auto opacity-40"
        />
        
        <Image
          src="/images/user/ellipse.svg"
          alt="userBack"
          width={200}
          height={250}
          className="absolute md:hidden -top-10 left-2 w-32 h-auto rounded-full blur-2xl opacity-30"
        />
      </div>
    </div>
  );
};

export default UserHomePage;