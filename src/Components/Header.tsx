"use client";
import { Menu } from "@/Data/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="h-[48px]">
      <header className="w-full z-50 fixed h-fit bg-white shadow-md">
        <nav className="w-[90%] max-w-6xl mx-auto h-[50px] bg-gray-50 text-gray-700 flex justify-between items-center rounded-lg px-4">
          {Menu.map((elem) => {
            return (
              <Link
                className={`w-1/5 max-sm:text-sm text-center py-2 px-3 rounded-md font-medium hover:bg-blue-600 max-sm:w-full  max-sm:rounded-none hover:text-white transition-all ease-in-out duration-200 ${
                  pathname === elem.href
                    ? "bg-blue-600 text-white max-sm:text-blue-600 max-sm:bg-white"
                    : "text-gray-700"
                }`}
                href={elem.href}
                key={elem.id}
              >
                {elem.title}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
};

export default Header;
