
import React, { useState } from 'react';
import { Badge } from '@/components/design-system/badge/Badge';
import { CustomAccordion, CustomAccordionItem } from '@/components/design-system/accordion/CustomAccordion';
import { CustomTabs } from '@/components/design-system/tabs/CustomTabs';
import { CustomSidebar } from '@/components/design-system/sidebar/CustomSidebar';
import { ColorShowcase } from '@/components/design-system/colors/ColorShowcase';
import { Home, Settings, Users, FileText, Mail, Bell } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const sidebarSections = [
    {
      title: "Main",
      items: [
        {
          title: "Dashboard",
          icon: <Home className="h-5 w-5" />,
          href: "#"
        },
        {
          title: "Users",
          icon: <Users className="h-5 w-5" />,
          href: "#",
          label: "New"
        },
        {
          title: "Documents",
          icon: <FileText className="h-5 w-5" />,
          href: "#"
        }
      ]
    },
    {
      title: "Settings",
      items: [
        {
          title: "Settings",
          icon: <Settings className="h-5 w-5" />,
          href: "#"
        },
        {
          title: "Messages",
          icon: <Mail className="h-5 w-5" />,
          href: "#",
          label: "8"
        },
        {
          title: "Notifications",
          icon: <Bell className="h-5 w-5" />,
          href: "#",
          disabled: true
        }
      ]
    }
  ];

  const tabs = [
    {
      value: "colors",
      label: "Color System",
      content: <ColorShowcase />
    },
    {
      value: "badges",
      label: "Badges",
      content: (
        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Badge Variants</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="tertiary">Tertiary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Badge Sizes</h3>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Removable Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" removable onRemove={() => console.log('Removed default')}>Default</Badge>
              <Badge variant="secondary" removable onRemove={() => console.log('Removed secondary')}>Secondary</Badge>
              <Badge variant="success" removable onRemove={() => console.log('Removed success')}>Success</Badge>
            </div>
          </div>
        </div>
      )
    },
    {
      value: "accordion",
      label: "Accordion",
      content: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-3">Accordion Component</h3>
          <CustomAccordion className="w-full">
            <CustomAccordionItem title="What is a design system?">
              <div className="text-sm text-foreground/80">
                A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It serves as the single source of truth for product teams.
              </div>
            </CustomAccordionItem>
            <CustomAccordionItem title="Why use TypeScript with React?" defaultOpen>
              <div className="text-sm text-foreground/80">
                TypeScript adds static type checking to JavaScript, which helps catch errors early in development. When used with React, it provides better tooling, documentation, and type safety for props, state, and other React patterns.
              </div>
            </CustomAccordionItem>
            <CustomAccordionItem title="Accessibility features of this component">
              <div className="text-sm text-foreground/80">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Proper ARIA attributes (aria-expanded, aria-controls)</li>
                  <li>Keyboard navigation support</li>
                  <li>Focus management</li>
                  <li>Semantic HTML structure</li>
                  <li>High contrast visual indicators</li>
                </ul>
              </div>
            </CustomAccordionItem>
            <CustomAccordionItem title="Disabled accordion item" disabled>
              <div className="text-sm text-foreground/80">
                This content won't be accessible because the item is disabled.
              </div>
            </CustomAccordionItem>
          </CustomAccordion>
        </div>
      )
    },
    {
      value: "tabs",
      label: "Tabs",
      content: (
        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Default Tabs</h3>
            <CustomTabs
              tabs={[
                {
                  value: "tab1",
                  label: "Account",
                  content: <div className="p-4 border rounded-md">Account settings content</div>
                },
                {
                  value: "tab2",
                  label: "Notifications",
                  content: <div className="p-4 border rounded-md">Notification preferences content</div>
                },
                {
                  value: "tab3",
                  label: "Security",
                  content: <div className="p-4 border rounded-md">Security settings content</div>
                }
              ]}
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Outlined Tabs</h3>
            <CustomTabs
              variant="outline"
              tabs={[
                {
                  value: "tab1",
                  label: "Account",
                  content: <div className="p-4 border rounded-md">Account settings content</div>
                },
                {
                  value: "tab2",
                  label: "Notifications",
                  content: <div className="p-4 border rounded-md">Notification preferences content</div>
                },
                {
                  value: "tab3",
                  label: "Security",
                  content: <div className="p-4 border rounded-md">Security settings content</div>
                }
              ]}
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Pills Tabs</h3>
            <CustomTabs
              variant="pills"
              tabs={[
                {
                  value: "tab1",
                  label: "Account",
                  content: <div className="p-4 border rounded-md">Account settings content</div>
                },
                {
                  value: "tab2",
                  label: "Notifications",
                  content: <div className="p-4 border rounded-md">Notification preferences content</div>
                },
                {
                  value: "tab3",
                  label: "Security",
                  content: <div className="p-4 border rounded-md">Security settings content</div>
                }
              ]}
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Full Width Tabs</h3>
            <CustomTabs
              fullWidth
              tabs={[
                {
                  value: "tab1",
                  label: "Account",
                  content: <div className="p-4 border rounded-md">Account settings content</div>
                },
                {
                  value: "tab2",
                  label: "Notifications",
                  content: <div className="p-4 border rounded-md">Notification preferences content</div>
                },
                {
                  value: "tab3",
                  label: "Security",
                  content: <div className="p-4 border rounded-md">Security settings content</div>
                }
              ]}
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      <CustomSidebar 
        sections={sidebarSections}
        logo={
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">DS</div>
            <span className="ml-2 font-semibold">Design System</span>
          </div>
        }
        footer={
          <button
            onClick={toggleTheme}
            className="w-full py-2 px-3 text-sm font-medium rounded-md bg-sidebar-accent hover:bg-sidebar-accent/80 transition-colors"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        }
      />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Enterprise Design System</h1>
          <div className="mb-8">
            <p className="text-lg text-foreground/80 mb-4">
              A comprehensive design system for enterprise applications built with React, TypeScript, and Tailwind CSS.
              This system includes a color system, data display components, and navigation components.
            </p>
          </div>
          
          <CustomTabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Index;
