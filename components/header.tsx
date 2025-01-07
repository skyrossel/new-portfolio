import Link from "next/link";

import Navbar from "@/components/navbar";
import { Container } from "@/components/ui/container";
import { TextMorph } from "@/components/ui/text-morph";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 py-[0.9375rem]">
      <Container>
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-10">
          <Link
            href="/"
            className="w-full max-w-[2.71rem] text-center text-xs uppercase transition-colors hover:text-[#848484] md:max-w-fit"
          >
            <TextMorph initialText="Takumi Honjo" morphText="T K MI H NJ" />
          </Link>

          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
