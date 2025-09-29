// pages/singleProject/[id].js
import BackNavigation from "@/components/SingleProperty/BackNavigation";
import ContactCard from "@/components/SingleProperty/ContactCard";
import FeaturesList from "@/components/SingleProperty/FeaturesList";
import FlatSizeDetails from "@/components/SingleProperty/FlatSizeDetails";
import PropertyDetails from "@/components/SingleProperty/PropertyDetails";
import PropertyImage from "@/components/SingleProperty/PropertyImage";
import { Badge } from "@/components/ui/badge";
import { getFlatSizeText } from "@/utils/getFlatSizeText";
import { MapPin } from "lucide-react";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Project Details - Mark Design & Engineering Ltd.",
  description: "Single Project Details",
};

export default async function SingleProjectPage({ params }) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/projects/${id}?populate[images]=true&populate[features]=true&populate[flatSize][populate][residentials]=true&populate[flatSize][populate][commercials]=true`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );
  const responseData = await response.json();

  if (!responseData.data) {
    notFound();
  }

  const {
    name,
    location,
    unit,
    buildingHeight,
    projectStatus,
    images,
    plotCategory,
    plotType,
    features,
    flatSize,
  } = responseData.data;

  const imageUrl = `${process.env.STRAPI_URL}${images[0].url}`;

  // Get flat size details
  const { residentialSizeText, commercialSizeText } = getFlatSizeText(flatSize);

  return (
    <section className="bg-background">
      <div className="pt-8">
        <div className="mark-container mx-auto pb-6">
          <BackNavigation />
        </div>

        <div className="mark-container mx-auto pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {name}
              </h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <p>{location}</p>
              </div>
            </div>
            <Badge>{projectStatus}</Badge>
          </div>
        </div>

        <div className="mark-container mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <PropertyImage imageUrl={imageUrl} alt={name} />
          </div>
        </div>

        <div className="mark-container mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <PropertyDetails
                name={name}
                location={location}
                projectStatus={projectStatus}
                plotCategory={plotCategory}
                plotType={plotType}
                unit={unit}
                buildingHeight={buildingHeight}
              />

              <FlatSizeDetails
                residentialSizeText={residentialSizeText}
                commercialSizeText={commercialSizeText}
              />

              <FeaturesList features={features} />
            </div>

            <div className="lg:col-span-1">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
