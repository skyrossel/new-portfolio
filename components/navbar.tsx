"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { TextMorph } from "@/components/ui/text-morph";

const ROUTES = [
  {
    id: 1,
    label: "Home",
    shortLabel: "( H ME )",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    shortLabel: "( AB T )",
    href: "/about",
  },
  {
    id: 3,
    label: "Work",
    shortLabel: "( W RK )",
    href: "/work",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="ml-auto">
      <ul className="flex items-center">
        {ROUTES.map((route) => (
          <li key={route.id} className="min-w-[3.6125rem] shrink-0 text-center">
            <Link
              href={route.href}
              className={cn(
                "text-xs uppercase transition-colors hover:text-[#848484]",
                pathname === route.href && "text-[#848484]",
              )}
            >
              <TextMorph
                initialText={route.label}
                morphText={route.shortLabel}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
