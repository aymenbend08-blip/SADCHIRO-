import { Link } from "react-router-dom";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={product.href}
      className="group flex flex-col justify-between gap-8 border border-charcoal/15 p-8 transition-colors duration-150 hover:border-pine md:p-10"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-pine">{product.name}</h3>
          <span className="text-xs font-medium text-moss-dark border border-moss/40 rounded-sm px-2 py-1">
            {product.statusLabel}
          </span>
        </div>
        <p className="text-sm text-clay font-medium">{product.tagline}</p>
        <p className="text-base text-charcoal/70 leading-relaxed">
          {product.description}
        </p>
      </div>
      <span className="text-sm font-medium text-pine underline decoration-clay/50 underline-offset-4 group-hover:decoration-clay">
        View {product.name}
      </span>
    </Link>
  );
}
