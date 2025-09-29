"use client";

import { Search } from "lucide-react";
import MarkButton from "../common/MarkButton";

export default function CallToAction() {
  return (
    <div className="center gap-5">
      <MarkButton link="/projects">
        <Search />
        Browse Properties
      </MarkButton>
    </div>
  );
}
