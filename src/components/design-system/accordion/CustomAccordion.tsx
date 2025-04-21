
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface CustomAccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  id?: string;
}

const CustomAccordionItem = ({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  id,
}: CustomAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const uniqueId = id || `accordion-${Math.random().toString(36).substring(2, 11)}`;
  const contentId = `content-${uniqueId}`;
  const headerId = `header-${uniqueId}`;

  return (
    <div
      className={cn(
        "border-b border-border transition-colors",
        disabled && "opacity-60 cursor-not-allowed"
      )}
    >
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          className={cn(
            "flex w-full items-center justify-between py-4 text-left text-base font-medium transition-all hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            disabled && "cursor-not-allowed"
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          aria-controls={contentId}
          id={headerId}
        >
          <span>{title}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "animate-accordion-down" : "animate-accordion-up h-0"
        )}
        hidden={!isOpen}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    </div>
  );
};

export interface CustomAccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: "single" | "multiple";
}

const CustomAccordion = React.forwardRef<HTMLDivElement, CustomAccordionProps>(
  ({ children, className, type = "multiple", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("divide-y divide-border rounded-md", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomAccordion.displayName = "CustomAccordion";
CustomAccordionItem.displayName = "CustomAccordionItem";

export { CustomAccordion, CustomAccordionItem };
