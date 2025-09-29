import { Card, CardContent } from "@/components/ui/card";

export default function CounterCardSection() {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear - 1;

  return (
    <section className="py-10">
      <div className="mark-container mx-auto">
        <Card className="border-border shadow-sm">
          <CardContent className="w-[95%] text-center mx-auto p-6 flex flex-col md:flex-row justify-between items-center space-x-8">
            <div className="flex-1">
              <p className="text-muted-foreground mb-4">
                Mark Design and Engineering Limited is a modern architecture and
                construction company providing creative designs and high-quality
                building solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary">
                {yearsOfExperience}+
              </div>
              <p className="text-muted-foreground text-sm">
                Years of Experience
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
