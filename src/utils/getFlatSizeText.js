export const getFlatSizeText = (flatSize) => {
  const residentialSizes = flatSize.residentials
    .map((res) => res.size)
    .filter(Boolean);
  const commercialSizes = flatSize.commercials
    .map((com) => com.size)
    .filter(Boolean);

  const residentialLabel = flatSize.residentials[0]?.label || "";
  const commercialLabel = flatSize.commercials[0]?.label || "";

  const residentialSizeText =
    residentialSizes.length > 0
      ? residentialSizes.join(", ") + ` ${residentialLabel}`
      : null;

  const commercialSizeText =
    commercialSizes.length > 0
      ? commercialSizes.join(", ") + ` ${commercialLabel}`
      : commercialSizes.length === 0
      ? null
      : "Upon Discussion";

  return { residentialSizeText, commercialSizeText };
};
