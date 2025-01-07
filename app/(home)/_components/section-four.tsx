import { Container } from "@/components/ui/container";
import { TextAnimation } from "@/components/ui/text-animation";

const SectionFour = () => {
  return (
    <section className="py-[1.5625rem]">
      <Container>
        <TextAnimation className="text-end text-[clamp(3.1875rem,16vw,25.625rem)]">
          With
          <br />
          Madness
        </TextAnimation>
      </Container>
    </section>
  );
};

export default SectionFour;
