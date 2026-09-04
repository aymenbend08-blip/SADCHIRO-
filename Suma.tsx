import ProductPageLayout from "@/components/ProductPageLayout";
import { getProduct } from "@/data/products";

const product = getProduct("suma")!;

export default function Suma() {
  return (
    <ProductPageLayout
      product={product}
      whatItIs="SUMA is a practical technology product designed to simplify everyday commerce, helping stores manage and improve their daily operations."
      problem="Many stores rely on manual processes and disconnected tools to run their day-to-day operations, which costs time and makes it harder to see what's actually happening in the business."
      howItWorks={[
        {
          title: "Set up your store",
          text: "[Placeholder — describe the onboarding process once defined.]",
        },
        {
          title: "Run daily operations",
          text: "[Placeholder — describe the core daily workflow SUMA supports.]",
        },
        {
          title: "See what's improving",
          text: "[Placeholder — describe how SUMA surfaces operational insight over time.]",
        },
      ]}
      benefits={[
        {
          title: "Less manual work",
          text: "[Placeholder — quantify or describe the time saved once available.]",
        },
        {
          title: "Clearer daily operations",
          text: "[Placeholder — describe the visibility SUMA gives store owners.]",
        },
      ]}
      features={[
        {
          title: "[Feature name]",
          text: "[Placeholder — add a specific SUMA feature once confirmed.]",
        },
        {
          title: "[Feature name]",
          text: "[Placeholder — add a specific SUMA feature once confirmed.]",
        },
      ]}
      relationship="SUMA is built and maintained by SADCHIRO, following the same standard of simplicity and practicality applied across every SADCHIRO product."
      ctaNote="Tell us about your store and we'll get back to you."
    />
  );
}
