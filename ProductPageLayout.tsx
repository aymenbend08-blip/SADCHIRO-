import Container from "./Container";
import Button from "./Button";
import { Product } from "@/data/products";

interface Feature {
  title: string;
  text: string;
}

interface ProductPageLayoutProps {
  product: Product;
  whatItIs: string;
  problem: string;
  howItWorks: { title: string; text: string }[];
  benefits: Feature[];
  features: Feature[];
  relationship: string;
  ctaNote?: string;
}

export default function ProductPageLayout({
  product,
  whatItIs,
  problem,
  howItWorks,
  benefits,
  features,
  relationship,
  ctaNote,
}: ProductPageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="rule">
        <Container className="flex flex-col gap-6 py-16 md:py-24">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-clay">Product</span>
            <span className="text-xs font-medium text-moss-dark border border-moss/40 rounded-sm px-2 py-1">
              {product.statusLabel}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl text-pine">{product.name}</h1>
          <p className="max-w-xl text-lg text-charcoal/70 leading-relaxed">
            {whatItIs}
          </p>
          <div className="pt-2">
            <Button href="#contact-cta" variant="primary">
              Ask about {product.name}
            </Button>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="rule bg-white">
        <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <span className="text-sm font-medium text-clay">The problem</span>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl text-xl md:text-2xl text-pine leading-snug">
              {problem}
            </p>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="rule">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-medium text-pine">How it works</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-3 border-t border-charcoal/15 pt-6">
                <span className="text-sm font-medium text-moss-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-pine">{step.title}</h3>
                <p className="text-base text-charcoal/70 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="rule bg-white">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-medium text-pine">Main benefits</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border border-charcoal/15 p-6">
                <h3 className="text-lg font-medium text-pine">{benefit.title}</h3>
                <p className="mt-2 text-base text-charcoal/70 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key features */}
      <section className="rule">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-medium text-pine">Key features</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="border border-charcoal/15 p-6">
                <h3 className="text-lg font-medium text-pine">{feature.title}</h3>
                <p className="mt-2 text-base text-charcoal/70 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Relationship with SADCHIRO */}
      <section className="rule bg-pine text-ivory">
        <Container className="grid grid-cols-1 gap-8 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <span className="text-sm font-medium text-clay-light">Part of SADCHIRO</span>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl text-lg text-ivory/80 leading-relaxed">
              {relationship}
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="contact-cta">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-medium text-pine">
              Interested in {product.name}?
            </h2>
            {ctaNote && <p className="text-charcoal/70 max-w-md">{ctaNote}</p>}
          </div>
          <Button to="/contact" variant="primary">
            Contact us
          </Button>
        </Container>
      </section>
    </>
  );
}
