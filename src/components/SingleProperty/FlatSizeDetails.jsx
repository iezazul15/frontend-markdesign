export default function FlatSizeDetails({
  residentialSizeText,
  commercialSizeText,
}) {
  return (
    (residentialSizeText || commercialSizeText) && (
      <div className="mb-8">
        <h3 className="text-xl font-bold text-foreground mb-4">
          Flat Size Details
        </h3>
        <div className="grid grid-cols-1 lg:grid-col-2 gap-6">
          {residentialSizeText && (
            <div className="flex items-center space-x-3 p-4 bg-mark-dark rounded-lg shadow-sm">
              <div className="h-2 w-2 bg-primary rounded-full flex items-center justify-center"></div>
              <span className="text-sm text-muted-foreground">{`Residential: ${residentialSizeText}`}</span>
            </div>
          )}
          {commercialSizeText && (
            <div className="flex items-center space-x-3 p-4 bg-mark-dark rounded-lg shadow-sm">
              <div className="h-2 w-2 bg-primary rounded-full flex items-center justify-center"></div>
              <span className="text-sm text-muted-foreground">
                {commercialSizeText}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  );
}
