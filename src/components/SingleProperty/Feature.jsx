export default function Feature({ feat }) {
  if (feat.value === 0) {
    return null;
  }

  return (
    <div
      key={feat.id}
      className="flex items-center p-4 bg-mark-dark rounded-lg shadow-sm"
    >
      <div className="flex items-center">
        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
        <span className="text-sm">
          {feat.value === 1 ? feat.feature : `${feat.feature} - ${feat.value}`}
        </span>
      </div>
    </div>
  );
}
