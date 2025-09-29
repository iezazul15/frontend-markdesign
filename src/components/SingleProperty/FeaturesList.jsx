import Feature from "./Feature";

export default function FeaturesList({ features }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-foreground mb-4">Features</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {features.map((feat) => (
          <Feature key={feat.id} feat={feat} />
        ))}
      </div>
    </div>
  );
}
