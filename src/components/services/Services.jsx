import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services-data";

export function Services() {
  return (
    <section>
      <div className="mark-container mx-auto lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-pretty">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
