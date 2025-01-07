import SectionTwo from "@/app/(home)/_components/section-two";
import SectionFour from "@/app/(home)/_components/section-four";

export default function HomePage() {
  return (
    <>
      <section className="flex h-[calc(100dvh-3.875rem)] items-center justify-center py-[1.875rem] md:h-[calc(100dvh-3.375rem)]">
        <p className="text-xs uppercase text-[#848484]">Soon</p>
      </section>
      <SectionTwo />
      <SectionFour />
      <section className="flex h-[calc(100dvh-12.5rem)] items-center justify-center py-[1.875rem] md:h-[calc(100dvh-4.5rem)]">
        <p className="text-xs uppercase text-[#848484]">Soon</p>
      </section>
    </>
  );
}
