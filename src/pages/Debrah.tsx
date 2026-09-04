import ProductPageLayout from "@/components/ProductPageLayout";
import { getProduct } from "@/data/products";

const product = getProduct("debrah")!;

export default function Debrah() {
  return (
    <ProductPageLayout
      product={product}
      whatItIs="Debrah is a SADCHIRO digital product currently in development, presented here as part of the SADCHIRO product ecosystem."
      problem="[Placeholder — the specific problem Debrah addresses will be added as the product takes shape.]"
      howItWorks={[
        {
          title: "[Step name]",
          text: "[Placeholder — Debrah's workflow will be described here once defined.]",
        },
        {
          title: "[Step name]",
          text: "[Placeholder — Debrah's workflow will be described here once defined.]",
        },
        {
          title: "[Step name]",
          text: "[Placeholder — Debrah's workflow will be described here once defined.]",
        },
      ]}
      benefits={[
        {
          title: "[Benefit]",
          text: "[Placeholder — main benefits will be added as Debrah develops.]",
        },
        {
          title: "[Benefit]",
          text: "[Placeholder — main benefits will be added as Debrah develops.]",
        },
      ]}
      features={[
        {
          title: "[Feature name]",
          text: "[Placeholder — key features will be added as Debrah develops.]",
        },
        {
          title: "[Feature name]",
          text: "[Placeholder — key features will be added as Debrah develops.]",
        },
      ]}
      relationship="Debrah is developed under SADCHIRO, sharing the same foundation and standards as the rest of the product ecosystem."
      ctaNote="Want early updates on Debrah? Reach out and let us know."
    />
  );
}
