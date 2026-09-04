import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <>
      <section className="rule">
        <Container className="py-16 md:py-24">
          <SectionHeading
            eyebrow="Products"
            title="Everything SADCHIRO builds"
            description="Each SADCHIRO product tackles a specific, real problem. This list grows as the company does."
          />
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}

            {/* Placeholder for future products, kept visually consistent with ProductCard */}
            <div className="flex flex-col justify-center gap-2 border border-dashed border-charcoal/20 p-8 text-center md:p-10">
              <p className="text-base text-charcoal/50">
                More products will appear here as SADCHIRO builds them.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
