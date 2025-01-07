"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Container } from "@/components/ui/container";

const SOCIALS = [
  {
    id: 1,
    label: "GH",
    href: "https://github.com/takumihonjo",
  },
  {
    id: 2,
    label: "IG",
    href: "https://www.instagram.com/takumihonjo",
  },
  {
    id: 3,
    label: "TG",
    href: "https://t.me/takumihonjo",
  },
];

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-2.5">
      <Container>
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-5 md:grid-cols-3">
          <div className="flex flex-col items-center gap-y-3 md:items-start">
            <h3 className="text-xs uppercase">( Socials )</h3>
            <ul className="flex items-center">
              {SOCIALS.map((social) => (
                <li className="even:mx-3" key={social.id}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#848484] transition-colors duration-300 hover:text-[#efefee]"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-y-3">
            <h3 className="text-xs uppercase">( Copyright )</h3>
            <p className="text-xs text-[#848484]">&copy; {year} Takumi Honjo</p>
          </div>

          <div className="flex flex-col items-center gap-y-3 md:items-end">
            <h3 className="text-xs uppercase">( Reach out )</h3>
            <Link
              href="mailto:takumihonjo@gmail.com"
              className="text-xs text-[#848484] transition-colors duration-300 hover:text-[#efefee]"
            >
              takumihonjo@gmail.com
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
