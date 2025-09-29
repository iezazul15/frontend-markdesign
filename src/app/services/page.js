import { Services } from "@/components/services/Services";

export const metadata = {
  title: "Services - Mark Design & Engineering Ltd.",
  description: "Services We Provide",
};

export default function ServicesPage() {
  return (
    <section className="bg-background">
      <div className="py-16">
        <div className="mark-container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground font-medium tracking-wide leading-8 max-w-2xl mx-auto">
              We provide modern architectural and engineering solutions to turn
              your dream home into reality.
            </p>
          </div>
        </div>
        <Services />
      </div>
    </section>
  );
}
