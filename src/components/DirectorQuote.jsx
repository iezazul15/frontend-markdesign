import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function DirectorQuote() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
        Message from the Managing Director
      </h2>

      <div className="text-left text-muted-foreground text-base font-medium leading-8 tracking-wide space-y-5">
        <p>Dear Valued Clients and Partners,</p>
        <p>
          Welcome to Mark Design & Engineering Limited. Our journey is driven by
          a passion for innovation, quality, and sustainability in real estate,
          architecture, and engineering. We take immense pride in delivering
          projects that not only meet but exceed our clients’ expectations.
        </p>
        <p>
          Architecture and engineering are more than just construction; they
          shape communities, improve lifestyles, and contribute to economic
          growth. At Mark Design & Engineering Limited, we integrate creative
          designs with technical expertise to bring visionary projects to life.
        </p>
        <p>
          Our comprehensive services include land development, architectural
          design, structural engineering, project supervision, and real estate
          development. We are committed to maintaining the highest standards,
          ensuring efficiency, and promoting sustainable construction practices.
        </p>
        <p>
          Our success is built on the trust and support of our valued clients,
          and we look forward to forging strong partnerships for future growth
          and development.
        </p>
        <p>
          Thank you for choosing Mark Design & Engineering Limited. We look
          forward to serving you with excellence.
        </p>
      </div>

      <Separator className="my-10 max-w-xs mx-auto" />

      <div className="flex flex-col items-center space-y-2">
        <Avatar className="w-14 h-14">
          <AvatarImage src="" alt="Director" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="text-sm text-muted-foreground text-center leading-8">
          <span className="font-medium text-foreground">
            A T K Hoque (Mintu)
          </span>
          <br />
          Managing Director
          <br />
          Mark Design & Engineering Limited
        </div>
      </div>
    </section>
  );
}
