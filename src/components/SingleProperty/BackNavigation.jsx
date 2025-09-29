"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function BackNavigation() {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      Back to Previous Page
    </Button>
  );
}
