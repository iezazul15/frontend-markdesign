// components/SingleProperty/ContactCard.js
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function ContactCard() {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">
          Interested in this Project?
        </h3>
        <p className="text-muted-foreground mb-6">
          Contact our team for more information or to schedule a meeting.
        </p>

        <div className="space-y-4">
          <Button variant="default" className="w-full" asChild>
            <a href="tel:+8809697456325">
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </a>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a href="mailto:markdesignbd@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
