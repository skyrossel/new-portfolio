import { Container } from "@/components/ui/container";
import { TextAnimation } from "@/components/ui/text-animation";

const SectionTwo = () => {
  return (
    <section className="py-[1.875rem]">
      <Container>
        <TextAnimation className="text-start text-[clamp(3.1875rem,16vw,25.625rem)]">
          All
          <br />
          Extremes
          <br />
          of Feeling
          <br />
          are Allied
        </TextAnimation>
      </Container>
    </section>
  );
};

export default SectionTwo;
