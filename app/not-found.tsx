import { Container } from "@/components/ui/container";

export default function NotFoundPage() {
  return (
    <div className="flex h-dvh items-center py-[1.5625rem]">
      <Container>
        <div className="flex justify-center">
          <p className="text-xs uppercase text-[#848484]">
            404 - Page Not Found
          </p>
        </div>
      </Container>
    </div>
  );
}