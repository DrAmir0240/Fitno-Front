import Link from "next/link";

const Header = ({ className = "" }) => {
  return (
    <header className={`bg-white  p-4 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-5">
        <Link href="/" >home</Link>
        <Link href="/profile" >profile</Link>
      </div>
    </header>
  );
};

export default Header;
