import Link from "next/link";

export default function ClubSidebar() {
  const links = [
    { href: "/clubPanel/dashboard", label: "داشبورد باشگاه" },
    { href: "/clubPanel/users", label: "مدیریت کاربران" },
    { href: "/clubPanel/classes", label: "مدیریت کلاس‌ها" },
    { href: "/clubPanel/reports", label: "گزارش‌ها" },
    { href: "/clubPanel/settings", label: "تنظیمات" },
  ];

  return (
    <nav className="w-64 bg-blue-800 text-white">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}