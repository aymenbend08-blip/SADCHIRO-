import { Link } from "react-router-dom";
import Container from "./Container";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-pine text-ivory">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4 md:col-span-2">
            <span className="text-lg font-medium">SADCHIRO</span>
            <p className="max-w-sm text-sm text-ivory/70 leading-relaxed">
              A technology company building products for real-world problems.
              Independent, product-driven, starting from Algeria.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-ivory/50">Products</span>
            {products.map((product) => (
              <Link
                key={product.slug}
                to={product.href}
                className="text-sm text-ivory/80 hover:text-ivory w-fit"
              >
                {product.name}
              </Link>
            ))}
            <Link to="/products" className="text-sm text-ivory/80 hover:text-ivory w-fit">
              All products
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-ivory/50">Company</span>
            <Link to="/about" className="text-sm text-ivory/80 hover:text-ivory w-fit">
              About SADCHIRO
            </Link>
            <Link to="/contact" className="text-sm text-ivory/80 hover:text-ivory w-fit">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SADCHIRO. All rights reserved.</span>
          <span>Algeria</span>
        </div>
      </Container>
    </footer>
  );
}
