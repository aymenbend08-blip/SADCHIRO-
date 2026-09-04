import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useI18n } from "@/i18n";

export default function Home() {
  const { language, t } = useI18n();
  const ar = language === "ar";
  const approach = ar
    ? [["01", "ابدأ من المشكلة", "كل منتج يبدأ من مشكلة حقيقية ومحددة يواجهها شخص أو نشاط اليوم، وليس من تقنية تبحث عن استخدام."], ["02", "ابنِ النسخة البسيطة", "نصمم للوضوح أولًا. الأداة التي يفهمها الناس خلال دقائق أهم من أداة مليئة بميزات لا يحتاجونها."], ["03", "تطور مع الاستخدام", "تتطور المنتجات وفق طريقة استخدامها فعليًا، ونحسنها باستمرار بدل محاولة إتقانها بمعزل عن المستخدمين."]]
    : [["01", "Start with the problem", "Every product begins with a real, specific problem someone is dealing with today, not a technology looking for a use."], ["02", "Build the simple version", "We design for clarity first. A tool people understand in minutes is worth more than one with every feature imaginable."], ["03", "Grow with use", "Products evolve based on how people actually use them, refined in the open rather than perfected in isolation."]];

  return <>
    <section className="rule"><Container className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-12 md:py-28">
      <div className="flex flex-col gap-6 md:col-span-7">
        <span className="text-sm font-medium text-clay">SADCHIRO</span>
        <h1 className="text-4xl leading-tight text-pine md:text-6xl md:leading-tight">{t("heroTitle")}</h1>
        <p className="max-w-lg text-lg text-charcoal/70 leading-relaxed">{t("heroText")}</p>
        <div className="flex flex-wrap gap-4 pt-2"><Button to="/products" variant="primary">{t("explore")}</Button><Button to="/about" variant="secondary">{t("aboutCompany")}</Button></div>
      </div>
      <div className="md:col-span-5"><HeroMark /></div>
    </Container></section>

    <section className="rule"><Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
      <div className="md:col-span-4"><span className="text-sm font-medium text-clay">{ar ? "عن الشركة" : "About"}</span></div>
      <div className="md:col-span-8"><p className="max-w-2xl text-2xl md:text-3xl text-pine leading-snug">{ar ? "SADCHIRO شركة أم مستقلة. لا نبني منتجًا واحدًا فقط، بل منظومة متنامية من الأدوات، كل أداة بسيطة بما يكفي للثقة ومفيدة بما يكفي للاستمرار." : "SADCHIRO is an independent parent company. Rather than one product, we build a growing ecosystem of tools, each one simple enough to trust and useful enough to keep."}</p></div>
    </Container></section>

    <section className="rule bg-white"><Container className="py-16 md:py-24"><div className="flex flex-col gap-10"><SectionHeading eyebrow={ar ? "منتجاتنا" : "Products"} title={ar ? "ما الذي تبنيه SADCHIRO" : "What SADCHIRO builds"} description={ar ? "كل منتج يحمل منهج SADCHIRO: عملي، مركز، ومصمم للاستخدام اليومي." : "Every product carries the SADCHIRO approach: practical, focused, and made to be used every day."}/><div className="grid grid-cols-1 gap-6 md:grid-cols-2">{products.map(p => <ProductCard key={p.slug} product={p}/>)}</div></div></Container></section>

    <section className="rule"><Container className="py-16 md:py-24"><SectionHeading eyebrow={ar ? "منهجنا" : "Approach"} title={ar ? "كيف تعمل SADCHIRO" : "How SADCHIRO works"} description={ar ? "طريقة تفكير ثابتة نطبقها على كل منتج نبنيه." : "A consistent way of thinking, applied to every product we build."}/><div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">{approach.map(([step,title,text]) => <div key={step} className="flex flex-col gap-3 border-t border-charcoal/15 pt-6"><span className="text-sm font-medium text-moss-dark">{step}</span><h3 className="text-xl font-medium text-pine">{title}</h3><p className="text-base text-charcoal/70 leading-relaxed">{text}</p></div>)}</div></Container></section>

    <section className="rule bg-pine text-ivory"><Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-24"><div className="flex flex-col gap-4"><span className="text-sm font-medium text-clay-light">{ar ? "الرؤية" : "Vision"}</span><h2 className="text-3xl md:text-4xl font-medium">{ar ? "شركة تنمو بما تبنيه، لا بما تعلنه." : "A company that grows through what it builds, not what it announces."}</h2><p className="text-ivory/70 leading-relaxed">{ar ? "نواصل إضافة المنتجات عندما تظهر مشاكل حقيقية تستحق الحل. كل منتج مستقل بما يكفي ليقف وحده، ومترابط بما يكفي ليستفيد من الأساس نفسه." : "We keep adding products as real problems present themselves. Each one stays independent enough to stand on its own, and connected enough to benefit from the same foundation."}</p></div><div className="flex flex-col gap-4"><span className="text-sm font-medium text-clay-light">{ar ? "المنظومة" : "Structure"}</span><p className="text-ivory/70 leading-relaxed">{ar ? "SADCHIRO هي العلامة الأم خلف كل منتج. SUMA وDebrah مبنيان تحت SADCHIRO، بمعايير مشتركة للجودة والبساطة مع خدمة احتياجات مختلفة." : "SADCHIRO is the parent brand behind every product. SUMA and Debrah are built under SADCHIRO, sharing its standards for quality and simplicity while serving different needs."}</p><div className="mt-2 flex flex-col gap-2 border border-ivory/20 p-6"><span className="text-sm font-medium">SADCHIRO</span><div className="ml-4 flex flex-col gap-1 border-l border-ivory/20 pl-4"><span className="text-sm text-ivory/70">SUMA</span><span className="text-sm text-ivory/70">Debrah</span><span className="text-sm text-ivory/40">{ar ? "منتجات مستقبلية" : "Future products"}</span></div></div></div></Container></section>

    <section><Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-24"><div className="flex flex-col gap-2"><h2 className="text-2xl md:text-3xl font-medium text-pine">{ar ? "هل لديك سؤال أو تريد العمل معنا؟" : "Have a question, or want to work with us?"}</h2><p className="text-charcoal/70">{ar ? "نقرأ كل رسالة تصلنا." : "We read every message."}</p></div><Button to="/contact" variant="primary">{ar ? "تواصل معنا" : "Get in touch"}</Button></Container></section>
  </>;
}

function HeroMark() { return <svg viewBox="0 0 320 320" className="w-full max-w-sm mx-auto" role="img" aria-label="SADCHIRO geometric mark"><rect x="0.5" y="0.5" width="319" height="319" fill="none" stroke="#7C8A7E" strokeOpacity="0.3"/><rect x="40" y="40" width="120" height="120" fill="#16302A"/><rect x="170" y="40" width="110" height="110" fill="none" stroke="#16302A" strokeWidth="1.5"/><rect x="40" y="170" width="110" height="110" fill="none" stroke="#7C8A7E" strokeWidth="1.5"/><rect x="170" y="170" width="110" height="110" fill="#C4622D"/></svg>; }
