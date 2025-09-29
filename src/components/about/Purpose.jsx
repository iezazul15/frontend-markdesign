import { Eye, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Purpose() {
  return (
    <section className="py-16 bg-mark-dark">
      <div className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Purpose
          </h2>
          <p className="font-medium text-muted-foreground tracking-wide leading-8 mx-auto">
            Your dream is our inspiration, and we take pride in bringing it to
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Mission Card */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Flag className="w-5 h-5 text-primary" />
                </div>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-medium leading-8 tracking-wide">
                To transform dreams into reality by delivering exceptional
                construction and engineering solutions. We are committed to
                creating spaces that inspire, endure, and exceed expectations
                through innovative design, superior craftsmanship, and
                unwavering dedication to quality.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-medium leading-8 tracking-wide">
                To be the leading force in luxury construction and engineering,
                setting new standards for innovation and sustainability. We
                envision a future where every project we undertake becomes a
                landmark of excellence, contributing to communities and leaving
                a lasting legacy for generations to come.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
