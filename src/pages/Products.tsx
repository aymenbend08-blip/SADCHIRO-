import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useI18n } from "@/i18n";

export default function Products() {
  const { language } = useI18n();
  const ar = language === "ar";
  return <><section className="rule"><Container className="py-16 md:py-24"><SectionHeading eyebrow={ar?"منتجاتنا":"Products"} title={ar?"كل ما تبنيه SADCHIRO":"Everything SADCHIRO builds"} description={ar?"كل منتج نبنيه يبدأ من مشكلة حقيقية ومحددة. وتكبر هذه القائمة مع نمو الشركة.":"Each SADCHIRO product starts with a specific, real problem. This list grows as the company does."}/></Container></section><section><Container className="py-16 md:py-24"><div className="grid grid-cols-1 gap-6 md:grid-cols-2">{products.map(p=><ProductCard key={p.slug} product={p}/>)}<div className="flex flex-col justify-center gap-3 border border-dashed border-charcoal/20 p-8 text-center md:p-10"><p className="text-lg text-pine">{ar?"نبني ما هو قادم.":"Building what's next."}</p><p className="text-base text-charcoal/50">{ar?"ستظهر هنا منتجات ومشاريع جديدة مع تطور SADCHIRO.":"New products and projects will appear here as SADCHIRO grows."}</p></div></div></Container></section></>;
}