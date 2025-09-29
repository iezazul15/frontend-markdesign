import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bath, Bed, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function PropertyCard({ property }) {
  const imageUrl = `${process.env.STRAPI_URL}${property.images[0].url}`;

  const { name, projectStatus, location, features, buildingHeight } = property;

  const bedrooms = features.find((f) => f.feature.toLowerCase() === "bedroom");
  const bathrooms = features.find(
    (f) => f.feature.toLowerCase() === "bathroom"
  );

  return (
    <Card className="pt-0 pb-2">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={name}
          width={800}
          height={400}
          className="h-96 object-cover rounded-t-xl"
        />
        <Badge variant="secondary" className="absolute top-2 right-2">
          {projectStatus}
        </Badge>
      </div>

      <CardContent className="pb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>

        <div className="flex items-center text-muted-foreground mb-3">
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{bedrooms?.value || "-"}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms?.value || "-"}</span>
          </div>
          <div className="flex items-center">
            <Building className="h-4 w-4 mr-1" />
            <span>{`G+${buildingHeight - 1}=${buildingHeight}`} storied</span>
          </div>
        </div>

        <Link href={`/projects/${property.documentId}`}>
          <Button variant="outline" className="w-full group bg-transparent">
            View Details
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
