
import React from "react";
import { cn } from "@/lib/utils";

type ColorSwatch = {
  name: string;
  variable: string;
  className: string;
  textClass?: string;
};

interface ColorGroupProps {
  title: string;
  swatches: ColorSwatch[];
}

const ColorGroup: React.FC<ColorGroupProps> = ({ title, swatches }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {swatches.map((swatch) => (
          <div key={swatch.name} className="space-y-2">
            <div
              className={cn(
                "h-16 rounded-md flex items-end p-2",
                swatch.className
              )}
            >
              <span className={cn("text-xs font-mono", swatch.textClass)}>
                {swatch.variable}
              </span>
            </div>
            <p className="text-sm font-medium">{swatch.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ColorShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-background">
      <h2 className="text-2xl font-bold mb-6">Color System</h2>
      
      <ColorGroup
        title="Primary Colors"
        swatches={[
          { name: "Primary 50", variable: "--primary-50", className: "bg-primary-50", textClass: "text-neutral-900" },
          { name: "Primary 100", variable: "--primary-100", className: "bg-primary-100", textClass: "text-neutral-900" },
          { name: "Primary 200", variable: "--primary-200", className: "bg-primary-200", textClass: "text-neutral-900" },
          { name: "Primary 300", variable: "--primary-300", className: "bg-primary-300", textClass: "text-neutral-900" },
          { name: "Primary 400", variable: "--primary-400", className: "bg-primary-400", textClass: "text-neutral-900" },
          { name: "Primary 500", variable: "--primary-500", className: "bg-primary-500", textClass: "text-neutral-50" },
          { name: "Primary 600", variable: "--primary-600", className: "bg-primary-600", textClass: "text-neutral-50" },
          { name: "Primary 700", variable: "--primary-700", className: "bg-primary-700", textClass: "text-neutral-50" },
          { name: "Primary 800", variable: "--primary-800", className: "bg-primary-800", textClass: "text-neutral-50" },
          { name: "Primary 900", variable: "--primary-900", className: "bg-primary-900", textClass: "text-neutral-50" },
        ]}
      />
      
      <ColorGroup
        title="Secondary Colors"
        swatches={[
          { name: "Secondary 50", variable: "--secondary-50", className: "bg-secondary-50", textClass: "text-neutral-900" },
          { name: "Secondary 100", variable: "--secondary-100", className: "bg-secondary-100", textClass: "text-neutral-900" },
          { name: "Secondary 200", variable: "--secondary-200", className: "bg-secondary-200", textClass: "text-neutral-900" },
          { name: "Secondary 300", variable: "--secondary-300", className: "bg-secondary-300", textClass: "text-neutral-900" },
          { name: "Secondary 400", variable: "--secondary-400", className: "bg-secondary-400", textClass: "text-neutral-900" },
          { name: "Secondary 500", variable: "--secondary-500", className: "bg-secondary-500", textClass: "text-neutral-50" },
          { name: "Secondary 600", variable: "--secondary-600", className: "bg-secondary-600", textClass: "text-neutral-50" },
          { name: "Secondary 700", variable: "--secondary-700", className: "bg-secondary-700", textClass: "text-neutral-50" },
          { name: "Secondary 800", variable: "--secondary-800", className: "bg-secondary-800", textClass: "text-neutral-50" },
          { name: "Secondary 900", variable: "--secondary-900", className: "bg-secondary-900", textClass: "text-neutral-50" },
        ]}
      />
      
      <ColorGroup
        title="Tertiary Colors"
        swatches={[
          { name: "Tertiary 50", variable: "--tertiary-50", className: "bg-tertiary-50", textClass: "text-neutral-900" },
          { name: "Tertiary 100", variable: "--tertiary-100", className: "bg-tertiary-100", textClass: "text-neutral-900" },
          { name: "Tertiary 200", variable: "--tertiary-200", className: "bg-tertiary-200", textClass: "text-neutral-900" },
          { name: "Tertiary 300", variable: "--tertiary-300", className: "bg-tertiary-300", textClass: "text-neutral-900" },
          { name: "Tertiary 400", variable: "--tertiary-400", className: "bg-tertiary-400", textClass: "text-neutral-900" },
          { name: "Tertiary 500", variable: "--tertiary-500", className: "bg-tertiary-500", textClass: "text-neutral-50" },
          { name: "Tertiary 600", variable: "--tertiary-600", className: "bg-tertiary-600", textClass: "text-neutral-50" },
          { name: "Tertiary 700", variable: "--tertiary-700", className: "bg-tertiary-700", textClass: "text-neutral-50" },
          { name: "Tertiary 800", variable: "--tertiary-800", className: "bg-tertiary-800", textClass: "text-neutral-50" },
          { name: "Tertiary 900", variable: "--tertiary-900", className: "bg-tertiary-900", textClass: "text-neutral-50" },
        ]}
      />
      
      <ColorGroup
        title="Neutral Colors"
        swatches={[
          { name: "Neutral 50", variable: "--neutral-50", className: "bg-neutral-50", textClass: "text-neutral-900" },
          { name: "Neutral 100", variable: "--neutral-100", className: "bg-neutral-100", textClass: "text-neutral-900" },
          { name: "Neutral 200", variable: "--neutral-200", className: "bg-neutral-200", textClass: "text-neutral-900" },
          { name: "Neutral 300", variable: "--neutral-300", className: "bg-neutral-300", textClass: "text-neutral-900" },
          { name: "Neutral 400", variable: "--neutral-400", className: "bg-neutral-400", textClass: "text-neutral-900" },
          { name: "Neutral 500", variable: "--neutral-500", className: "bg-neutral-500", textClass: "text-neutral-50" },
          { name: "Neutral 600", variable: "--neutral-600", className: "bg-neutral-600", textClass: "text-neutral-50" },
          { name: "Neutral 700", variable: "--neutral-700", className: "bg-neutral-700", textClass: "text-neutral-50" },
          { name: "Neutral 800", variable: "--neutral-800", className: "bg-neutral-800", textClass: "text-neutral-50" },
          { name: "Neutral 900", variable: "--neutral-900", className: "bg-neutral-900", textClass: "text-neutral-50" },
        ]}
      />
      
      <ColorGroup
        title="Semantic Colors"
        swatches={[
          { name: "Success", variable: "--success", className: "bg-success", textClass: "text-success-foreground" },
          { name: "Success Light", variable: "--success-50", className: "bg-success-50", textClass: "text-neutral-900" },
          { name: "Info", variable: "--info", className: "bg-info", textClass: "text-info-foreground" },
          { name: "Info Light", variable: "--info-50", className: "bg-info-50", textClass: "text-neutral-900" },
          { name: "Warning", variable: "--warning", className: "bg-warning", textClass: "text-warning-foreground" },
          { name: "Warning Light", variable: "--warning-50", className: "bg-warning-50", textClass: "text-neutral-900" },
          { name: "Destructive", variable: "--destructive", className: "bg-destructive", textClass: "text-destructive-foreground" },
          { name: "Destructive Light", variable: "--destructive-50", className: "bg-destructive-50", textClass: "text-neutral-900" },
        ]}
      />
      
      <ColorGroup
        title="Surface Colors"
        swatches={[
          { name: "Background", variable: "--background", className: "bg-background border border-border", textClass: "text-foreground" },
          { name: "Foreground", variable: "--foreground", className: "bg-foreground", textClass: "text-neutral-50" },
          { name: "Card", variable: "--card", className: "bg-card border border-border", textClass: "text-card-foreground" },
          { name: "Muted", variable: "--muted", className: "bg-muted", textClass: "text-muted-foreground" },
          { name: "Accent", variable: "--accent", className: "bg-accent", textClass: "text-accent-foreground" },
          { name: "Surface", variable: "--surface", className: "bg-surface border border-border", textClass: "text-surface-foreground" },
          { name: "Surface Elevated", variable: "--surface-elevated", className: "bg-surface-elevated border border-border", textClass: "text-surface-elevated-foreground" },
        ]}
      />
    </div>
  );
};
