import ContactForm from "@/components/contact/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact - Mark Design & Engineering Ltd.",
  description: "Contact Us",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mark-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground">
            Ready to make your dream project? Contact our expert team for
            personalized assistance and exclusive opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+880 9697 456 325</p>
                  <p className="text-muted-foreground">+8801671348325</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    markdesignbd@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Address
                  </h4>
                  <p className="text-muted-foreground">
                    House - 32, Road - 01 (C-D Avenue),
                  </p>
                  <p className="text-muted-foreground">
                    Block-C, Banasree, Rampura, Dhaka-1219.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground">
                    Sun - Thu: 10:00 AM - 6:00 PM
                  </p>
                  <p className="text-muted-foreground">Sat - Sun: Off</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send Us A Message
              </h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
