import NoResultsCard from "./NoResultsCard";
import PropertyCard from "./PropertyCard";

export default async function PropertyList({ isFeatured = false, query }) {
  const propertiesPromise = await fetch(
    `${process.env.STRAPI_URL}/api/projects?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );

  let properties;
  if (isFeatured) {
    const toBeFilteredProperties = await propertiesPromise.json();
    properties = toBeFilteredProperties.data.filter(
      (property) => property.featured
    );
  } else {
    if (query) {
      const toBeFilteredProperties = await propertiesPromise.json();
      properties = toBeFilteredProperties.data.filter((property) => {
        const projectStatus = property.projectStatus.toLowerCase();
        const location = property.location.toLowerCase();
        const name = property.name.toLowerCase();
        return (
          projectStatus.includes(query.toLowerCase()) ||
          location.includes(query.toLowerCase()) ||
          name.includes(query.toLowerCase())
        );
      });
    } else {
      const propertiesData = await propertiesPromise.json();
      properties = propertiesData.data;
    }
  }

  if (properties.length === 0) {
    return (
      <div className="mark-container mx-auto">
        <NoResultsCard />
      </div>
    );
  }

  return (
    <div className="mark-container mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.documentId} property={property} />
      ))}
    </div>
  );
}
