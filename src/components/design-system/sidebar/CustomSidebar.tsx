
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SidebarItemType = {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
};

type SidebarSectionType = {
  title?: string;
  items: SidebarItemType[];
};

export interface CustomSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  sections: SidebarSectionType[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
}

const CustomSidebar = React.forwardRef<HTMLDivElement, CustomSidebarProps>(
  ({ 
    sections, 
    className, 
    collapsible = true, 
    defaultCollapsed = false, 
    logo, 
    footer,
    ...props 
  }, ref) => {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
          className
        )}
        {...props}
      >
        <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
          {!collapsed && <div className="flex-1">{logo}</div>}
          {collapsible && (
            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="px-3 py-2">
              {!collapsed && section.title && (
                <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-sidebar-foreground/60 uppercase">
                  {section.title}
                </h2>
              )}
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const Icon = () => item.icon || null;
                  
                  return (
                    <a
                      key={itemIndex}
                      href={item.disabled ? "#" : (item.href || "#")}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        "focus:outline-none focus:ring-2 focus:ring-sidebar-ring",
                        item.disabled && "pointer-events-none opacity-60",
                        collapsed ? "justify-center" : "justify-start"
                      )}
                      aria-disabled={item.disabled}
                    >
                      {item.icon && (
                        <span className={cn("mr-2", collapsed && "mr-0")}>
                          <Icon />
                        </span>
                      )}
                      {!collapsed && (
                        <span className="flex-1 truncate">{item.title}</span>
                      )}
                      {!collapsed && item.label && (
                        <span className="ml-auto text-xs font-medium text-sidebar-foreground/60">
                          {item.label}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {footer && <div className={cn("p-4 border-t border-sidebar-border", collapsed && "text-center")}>{footer}</div>}
      </div>
    );
  }
);

CustomSidebar.displayName = "CustomSidebar";

export { CustomSidebar };
