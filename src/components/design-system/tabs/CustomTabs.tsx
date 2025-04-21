
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const tabsListVariants = cva(
  "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-muted",
        outline: "bg-transparent border border-border",
        pills: "bg-transparent space-x-1",
      },
      fullWidth: {
        true: "flex w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      fullWidth: false,
    },
  }
);

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-background data-[state=active]:text-foreground",
        outline: "data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent",
        pills: "rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
      },
      fullWidth: {
        true: "flex w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      fullWidth: false,
    },
  }
);

type TabItem = {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export interface CustomTabsProps extends 
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tabsListVariants>,
  VariantProps<typeof tabsTriggerVariants> {
  tabs: TabItem[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const CustomTabs = React.forwardRef<HTMLDivElement, CustomTabsProps>(
  ({ 
    className, 
    tabs, 
    defaultValue, 
    variant, 
    fullWidth, 
    onValueChange,
    ...props 
  }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultValue || (tabs.length > 0 ? tabs[0].value : ''));

    const handleTabChange = (value: string) => {
      setActiveTab(value);
      onValueChange?.(value);
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className={cn(tabsListVariants({ variant, fullWidth }))}>
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              disabled={tab.disabled}
              aria-selected={activeTab === tab.value}
              role="tab"
              type="button"
              aria-controls={`tabpanel-${tab.value}`}
              id={`tab-${tab.value}`}
              tabIndex={activeTab === tab.value ? 0 : -1}
              className={cn(
                tabsTriggerVariants({ variant, fullWidth }),
                activeTab === tab.value ? 'data-[state=active]' : ''
              )}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-2">
          {tabs.map((tab) => (
            <div
              key={tab.value}
              role="tabpanel"
              id={`tabpanel-${tab.value}`}
              aria-labelledby={`tab-${tab.value}`}
              hidden={activeTab !== tab.value}
              tabIndex={0}
              className={cn(
                "rounded-md",
                activeTab === tab.value ? "animate-fade-in" : "hidden"
              )}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

CustomTabs.displayName = "CustomTabs";

export { CustomTabs };
