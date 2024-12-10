"use client";
import { Menu } from "@/Data/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileFooter = () => {
  const pathname = usePathname();
  return (
    <div className="btm-nav lg:hidden">
      {Menu.map((elem) => {
        return (
          <Link
            href={elem.href}
            key={elem.id}
            className={` ${
              pathname === elem.href ? "text-info" : "text-gray-700"
            }`}
          >
            {elem.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileFooter;
