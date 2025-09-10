import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { PiChartPieSlice, PiSignOut, PiUsers } from "react-icons/pi";

export default function Sidebar() {
  const links = [
    { icon: <GrHomeRounded size={22} />, href: "/club-panel", label: "عمومی" },
    {
      icon: <PiChartPieSlice size={24} />,
      href: "/club-panel/setting",
      label: "تنظیمات",
    },
    {
      icon: <PiUsers size={24} />,
      href: "/club-panel/users",
      label: "کاربران",
    },
  ];

  return (
    <aside className="sticky top-0 right-0 min-w-[235px] bg-[#289DFC]  h-screen rounded-e-4xl hidden lg:flex flex-col p-8 justify-between ">
      <div>
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/images/profile.png"
            alt="profile"
            width={49}
            height={49}
            className="rounded-full"
          />
          <p className="text-xl">فیتنو</p>
        </div>

        <ul className="flex flex-col gap-7 mt-10">
          {links.map((link) => (
            <li key={link.href}>
              <Button variant="link" className="flex items-center gap-3  ">
                {link.icon}
                <Link href={link.href}>{link.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className=" pt-2 border-t border-white/20">
        <Button variant="link" className="flex items-center gap-3  w-full ">
          <PiSignOut className="text-lg" />
          <span>خروج از حساب</span>
        </Button>
      </div>
    </aside>
  );
}
