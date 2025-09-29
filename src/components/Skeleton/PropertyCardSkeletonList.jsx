import PropertyCardSkeleton from "./PropertyCardSkeleton";

export default function PropertyCardSkeletonList({ length }) {
  return (
    <div className="mark-container mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
      {Array.from({ length }).map((_, i) => (
        <PropertyCardSkeleton key={i} />
      ))}
    </div>
  );
}
