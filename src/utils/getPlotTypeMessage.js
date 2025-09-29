export default function getPlotTypeMessage(type) {
  const lower = type.toLowerCase();
  if (lower.includes("cum")) {
    return "Mixed-use development offering both commercial and residential opportunities.";
  } else if (lower.includes("residential")) {
    return "Premium residential space designed for modern living.";
  } else if (lower.includes("commercial")) {
    return "High-visibility commercial space ideal for thriving businesses.";
  } else {
    return "Explore our thoughtfully designed real estate offering.";
  }
}
