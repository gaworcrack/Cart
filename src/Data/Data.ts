interface TMenu {
  id: number;
  href: string;
  title: string;
}

export const Menu: TMenu[] = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/products",
    title: "Products",
  },
  {
    id: 3,
    href: "/about-us",
    title: "About Us",
  },
  {
    id: 4,
    href: "/contact",
    title: "Contact",
  },
];
