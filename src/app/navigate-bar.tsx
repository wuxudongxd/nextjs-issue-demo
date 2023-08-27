"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { label: "home", href: "/" },
  { label: "page1", href: "/page1" },
  { label: "page2", href: "/page2" },
  { label: "page3", href: "/page3" },
];

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <>
      {menus.map((menu) => (
        <Link
          key={menu.href}
          href={menu.href}
          className={`mx-10 rounded-lg px-4 py-2 text-lg font-medium leading-loose transition first:ml-0 ${
            pathname === menu.href
              ? "bg-slate-200/50 dark:bg-zinc-800/50"
              : null
          }`}
        >
          {menu.label}
        </Link>
      ))}
    </>
  );
};

export default NavigationBar;
