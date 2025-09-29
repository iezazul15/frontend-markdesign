import { Overview } from "@/components/about/Overview";
import Purpose from "@/components/about/Purpose";

export const metadata = {
  title: "About - Mark Design & Engineering Ltd.",
  description: "About Us",
};

export default function AboutPage() {
  return (
    <section className="bg-background">
      <div className="py-16">
        <div className="mark-container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Us
            </h1>
            <p className="text-muted-foreground">
              Your dream is our inspiration, and we take pride in bringing it to
              life.
            </p>
          </div>
        </div>

        <Overview />

        <Purpose />
      </div>
    </section>
  );
}
