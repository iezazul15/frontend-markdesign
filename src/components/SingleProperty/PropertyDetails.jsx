import getPlotTypeMessage from "@/utils/getPlotTypeMessage";
import { BadgeAlert, BadgeCheck } from "lucide-react";

export default function PropertyDetails({
  name,
  location,
  projectStatus,
  plotCategory,
  plotType,
  unit,
  buildingHeight,
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Project Details
      </h2>
      <div className="flex items-center gap-8 text-muted-foreground mb-6">
        <div className="flex items-center">
          {plotCategory.toLowerCase().includes("preliminary") ? (
            <>
              <BadgeAlert className="h-5 w-5 mr-2 animate-pulse" />
              <span className="font-medium">Rajuk Preliminary Stage</span>
            </>
          ) : (
            <>
              <BadgeCheck className="h-5 w-5 mr-2" />
              <span className="font-medium">Rajuk Approved</span>
            </>
          )}
        </div>
      </div>
      <p className="text-muted-foreground mb-4">
        {getPlotTypeMessage(plotType)}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3 p-4 bg-mark-dark rounded-lg shadow-sm">
          <div className="h-2 w-2 bg-primary rounded-full flex items-center justify-center"></div>
          <span className="text-sm text-muted-foreground">
            Plot Type: {plotType}
          </span>
        </div>
        {unit && (
          <div className="flex items-center space-x-3 p-4 bg-mark-dark rounded-lg shadow-sm">
            <div className="h-2 w-2 bg-primary rounded-full flex items-center justify-center"></div>
            <span className="text-sm text-muted-foreground">{`Unit: ${unit}`}</span>
          </div>
        )}
        {buildingHeight && (
          <div className="flex items-center space-x-3 p-4 bg-mark-dark rounded-lg shadow-sm">
            <div className="h-2 w-2 bg-primary rounded-full flex items-center justify-center"></div>
            <span className="text-sm text-muted-foreground">{`G+${
              buildingHeight - 1
            }=${buildingHeight} storied`}</span>
          </div>
        )}
      </div>
    </div>
  );
}
