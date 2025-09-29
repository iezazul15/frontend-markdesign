import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PropertyCardSkeleton() {
  return (
    <Card className="pt-0 pb-2">
      {/* Image */}
      <div className="relative">
        <Skeleton className="h-96 w-full rounded-t-xl" />
        <Skeleton className="absolute top-2 right-2 h-6 w-20 rounded-full" />
      </div>

      <CardContent className="pb-6 space-y-4">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Location */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Features (beds, baths, height) */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}
