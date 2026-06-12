export interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Analytics",
        href: "/products/analytics",
        description: "Real-time insights across your stack",
        icon: "📊",
      },
      {
        label: "Automation",
        href: "/products/automation",
        description: "Workflows that run while you sleep",
        icon: "⚡",
      },
      {
        label: "Integrations",
        href: "/products/integrations",
        description: "Connect 200+ tools seamlessly",
        icon: "🔗",
      },
      {
        label: "AI Assistant",
        href: "/products/ai",
        description: "Intelligent help, always on call",
        icon: "✦",
      },
    ],
  },
  // {
  //   label: "Solutions",
  //   href: "/solutions",
  //   children: [
  //     {
  //       label: "Enterprise",
  //       href: "/solutions/enterprise",
  //       description: "Security, compliance, and scale",
  //       icon: "🏢",
  //     },
  //     {
  //       label: "Startups",
  //       href: "/solutions/startups",
  //       description: "Move fast without breaking things",
  //       icon: "🚀",
  //     },
  //     {
  //       label: "Agencies",
  //       href: "/solutions/agencies",
  //       description: "Manage clients with ease",
  //       icon: "🎨",
  //     },
  //   ],
  // },
  { label: "Mobile", href: "/mobile" },
];
