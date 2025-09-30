import PropertyList from "@/components/common/PropertyList";
import PropertyCardSkeletonList from "@/components/Skeleton/PropertyCardSkeletonList";
import { Suspense } from "react";

export const metadata = {
  title: "Projects - Mark Design & Engineering Ltd.",
  description: "All Projects",
};

export default async function PropertiesPage({ searchParams }) {
  const { query } = await searchParams;

  // const propertiesPromise = await fetch(
  //   `${process.env.STRAPI_URL}/api/projects?populate=*`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  //     },
  //     cache: "no-store",
  //   }
  // );

  return (
    <section className="py-16">
      <div className="center">
        <h2 className="text-3xl md:text-4xl font-bold">All Projects</h2>
      </div>
      <p className="mt-4 mb-12 text-center tracking-wide font-medium text-muted-foreground">
        You can see all of our projects here
      </p>

      <Suspense fallback={<PropertyCardSkeletonList length="6" />}>
        <PropertyList query={query} />
      </Suspense>
    </section>
  );
}
