import CallToAction from "./CallToAction";
import CounterCardSection from "./CounterCard";

export default function HeroSection() {
  return (
    <section className="center pt-20 pb-24">
      <div>
        <h1 className="text-5xl md:text-7xl leading-14 md:leading-20 font-bold text-center text-gradient">
          You Dream It,
          <br />
          We Build It
        </h1>
        <div className="center">
          <p className="mt-10 w-4/5 lg:w-1/2 text-center text-muted-foreground">
            We believe that every great structure begins with a vision, whether
            it’s a dream home, a modern apartment, a commercial hub, or an
            innovative workspace, we transform your ideas into reality with
            precision and expertise.
          </p>
        </div>
        <div className="mt-10">
          <CallToAction />
        </div>
        <div className="mt-10">
          <CounterCardSection />
        </div>
      </div>
    </section>
  );
}
