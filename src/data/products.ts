export type ProductStatus = "live" | "in-development" | "coming-soon";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  href: string;
}

export const products: Product[] = [
  {
    slug: "suma",
    name: "SUMA",
    tagline: "Simplifying everyday commerce",
    description:
      "SUMA helps stores manage and improve their daily operations, replacing scattered manual work with one simple, practical system.",
    status: "live",
    statusLabel: "Available",
    href: "/products/suma",
  },
  {
    slug: "debrah",
    name: "Debrah",
    tagline: "A new product taking shape",
    description:
      "Debrah is a SADCHIRO product in development. Its details will grow as the product itself does.",
    status: "in-development",
    statusLabel: "In development",
    href: "/products/debrah",
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
