import PropertyCardSkeletonList from "@/components/Skeleton/PropertyCardSkeletonList";

export default function PropertiesPageLoading() {
  return (
    <section className="py-16">
      <div className="center">
        <h2 className="text-3xl md:text-4xl font-bold">All Projects</h2>
      </div>
      <div className="flex justify-center">
        <p className="mt-4 mb-12 text-center tracking-wide font-medium text-muted-foreground">
          You can see all of our projects here
        </p>
      </div>

      <PropertyCardSkeletonList length={6} />
    </section>
  );
}
