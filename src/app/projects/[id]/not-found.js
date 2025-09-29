import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
      <FileQuestion className="text-gray-400 mb-4" />
      <h2 className="text-xl font-semibold mb-2">Project not found</h2>
      <p className="text-muted-foreground mb-4">
        We couldn’t find the project you’re looking for.
      </p>
      <Link href="/projects">
        <Button variant="outline" size="sm">
          Back to Projects
        </Button>
      </Link>
    </div>
  );
}
