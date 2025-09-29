import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            First Name
          </label>
          <Input placeholder="John" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Last Name
          </label>
          <Input placeholder="Doe" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <Input type="email" placeholder="john@example.com" />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Phone
        </label>
        <Input type="tel" placeholder="+1 (555) 123-4567" />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Subject
        </label>
        <Input placeholder="Property Inquiry" />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <Textarea
          placeholder="Tell us about your property requirements..."
          rows={4}
        />
      </div>

      <Button className="w-full" size="lg">
        Send Message
      </Button>
    </form>
  );
}
