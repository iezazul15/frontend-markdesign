import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import MarkButton from "../common/MarkButton";
import PropertyList from "../common/PropertyList";
import PropertyCardSkeletonList from "../Skeleton/PropertyCardSkeletonList";

export default function FeaturedProperties() {
  return (
    <section className="bg-mark-dark py-20">
      <div className="center">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
      </div>
      <p className="mt-4 mb-12 text-center tracking-wide font-medium text-muted-foreground">
        These are some of our recent projects
      </p>

      <Suspense fallback={<PropertyCardSkeletonList length="3" />}>
        <PropertyList isFeatured={true} />
      </Suspense>

      <div className="text-center mt-14">
        <MarkButton link="/projects">
          View All Projects <ArrowRight />
        </MarkButton>
      </div>
    </section>
  );
}
