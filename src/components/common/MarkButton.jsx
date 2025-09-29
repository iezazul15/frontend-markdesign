"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function MarkButton({ variant, size, link = "", children }) {
  const router = useRouter();
  return (
    <Button variant={variant} size={size} onClick={() => router.push(link)}>
      {children}
    </Button>
  );
}
