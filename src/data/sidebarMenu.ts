import {
  LayoutDashboard,
  Package,
  FolderTree,
  Wrench,
  FileText,
  Settings,
  Users,
  ShoppingCart,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "Sub Categories",
    href: "/admin/subcategories",
    icon: FolderTree,
  },
   {
    title: "Brands",
    href: "/admin/brands",
    icon: FolderTree,
  },
  {
    title: "Services",
    href: "/admin/services",
    icon: Wrench,
  },
  {
    title: "Hero",
    href: "/admin/hero",
    icon: Wrench,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Contact Customers",
    href: "/admin/contact",
    icon: Users,
  },
  {
    title: "Blogs",
    href: "/admin/blogs",
    icon: Settings,
  },
   {
    title: "About",
    href: "/admin/about",
    icon: Settings,
  },
   {
    title: "SEO",
    href: "/admin/seo",
    icon: Settings,
  },
];