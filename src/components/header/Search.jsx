"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Search() {
  const router = useRouter();
  const closeRef = useRef(null);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return;
    }

    router.push(`/projects?query=${encodeURIComponent(trimmedQuery)}`);

    closeRef.current?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Search</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-5">
            <DialogTitle>Search Projects</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3 mb-5">
              <Input
                name="query"
                placeholder="Search by name or status or location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" size="sm" type="button">
                Cancel
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <button ref={closeRef} className="hidden" type="button" />
            </DialogClose>

            <Button type="submit" size="sm">
              Search
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
