import SectionTwo from "@/app/(home)/_components/section-two";
import SectionFour from "@/app/(home)/_components/section-four";

export default function HomePage() {
  return (
    <>
      <section className="flex items-center justify-center py-[1.5625rem]">
        <p className="text-xs uppercase text-[#848484]">Soon</p>
      </section>
      <SectionTwo />
      <SectionFour />
      <section className="flex items-center justify-center py-[1.5625rem]">
        <p className="text-xs uppercase text-[#848484]">Soon</p>
      </section>
    </>
  );
}
