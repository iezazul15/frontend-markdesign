import { Skeleton } from "@/components/ui/skeleton";

export default function SingleProjectPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Skeleton className="w-32 h-5 rounded-md" />
        </div>

        {/* Project Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <Skeleton className="w-64 h-12 rounded-md mb-2" />
              <Skeleton className="w-40 h-6 rounded-md" />
            </div>
            <Skeleton className="w-24 h-8 rounded-full" />
          </div>
        </div>

        {/* Project Gallery */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Skeleton className="w-full h-96 lg:h-[500px] rounded-lg" />
          </div>
        </div>

        {/* Project Details */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Details Header */}
              <Skeleton className="w-48 h-8 rounded-md" />

              {/* Details Icons */}
              <div className="flex items-center gap-8">
                <Skeleton className="w-20 h-6 rounded-md" />
                <Skeleton className="w-20 h-6 rounded-md" />
                <Skeleton className="w-20 h-6 rounded-md" />
              </div>

              {/* Description */}
              <Skeleton className="w-full h-24 rounded-md" />

              {/* Features Header */}
              <Skeleton className="w-36 h-6 rounded-md" />

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="w-full h-10 rounded-lg" />
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Skeleton className="sticky top-24 p-6 rounded-lg h-[400px]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
