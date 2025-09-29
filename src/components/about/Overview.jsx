import { Card, CardContent } from "@/components/ui/card";
import { Building, Check, Hammer, TrendingUp } from "lucide-react";

export function Overview() {
  return (
    <section className="py-20 bg-mark-dark">
      <div className="mark-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              With a deep understanding of market dynamics and a passion for
              architectural beauty, we curate only the finest properties that
              meet our rigorous standards of quality, location, and investment
              potential.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Building />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">
                  Quality
                </p>
                <p className="text-sm text-muted-foreground">
                  Comprehensive Solutions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Check />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">
                  Innovation
                </p>
                <p className="text-sm text-muted-foreground">
                  Innovative Architecture
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Hammer />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">
                  Expertise
                </p>
                <p className="text-sm text-muted-foreground">
                  Experienced Team
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <TrendingUp />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">
                  Growth
                </p>
                <p className="text-sm text-muted-foreground">
                  Client-Centric Approach
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
