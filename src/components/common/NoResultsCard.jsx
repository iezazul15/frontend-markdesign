import { SearchX } from "lucide-react";

export default function NoResultsCard({}) {
  return (
    <div className="w-full border border-border rounded-md p-6 text-center text-muted-foreground bg-mark-dark">
      <SearchX className="mx-auto mb-4 text-muted-foreground" />
      <p>No projects matched your search</p>
    </div>
  );
}
