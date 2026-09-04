import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

const traits = [
  {
    title: "Algerian",
    text: "SADCHIRO started in Algeria, and that origin stays part of how the company operates and who it represents.",
  },
  {
    title: "Independent",
    text: "SADCHIRO builds on its own terms, making decisions based on what products need rather than outside pressure.",
  },
  {
    title: "Technology-focused",
    text: "We work in technology because it lets us build tools that scale, not because technology is the point.",
  },
  {
    title: "Product-driven",
    text: "The company exists through what it builds. Products come first, and everything else supports them.",
  },
  {
    title: "Problem-solving",
    text: "We choose problems that are real and specific, and stay with them until the solution is genuinely simple.",
  },
  {
    title: "Globally ambitious",
    text: "SADCHIRO is built to reach markets beyond Algeria, without losing sight of where it started.",
  },
];

export default function About() {
  return (
    <>
      <section className="rule">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col gap-6 max-w-2xl">
            <span className="text-sm font-medium text-clay">About SADCHIRO</span>
            <h1 className="text-4xl md:text-5xl text-pine leading-tight">
              A company built on products, not promises.
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              SADCHIRO is an Algerian technology company that builds practical
              digital products for real problems. We keep the company small
              enough to move carefully and ambitious enough to compete
              internationally.
            </p>
          </div>
        </Container>
      </section>

      <section className="rule bg-white">
        <Container className="py-16 md:py-24">
          <SectionHeading title="What SADCHIRO is" />
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {traits.map((trait) => (
              <div key={trait.title} className="border-t border-charcoal/15 pt-6">
                <h3 className="text-lg font-medium text-pine">{trait.title}</h3>
                <p className="mt-2 text-base text-charcoal/70 leading-relaxed">
                  {trait.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium text-clay">Philosophy</span>
            <h2 className="text-2xl md:text-3xl font-medium text-pine">
              Practical over impressive.
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              We would rather ship something useful today than something
              remarkable that never reaches the people who need it. A product
              earns its complexity; it doesn't start with it.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium text-clay">Vision</span>
            <h2 className="text-2xl md:text-3xl font-medium text-pine">
              Growth measured in products, not headlines.
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Our plan is straightforward: keep building products that solve
              real problems, keep them connected under SADCHIRO, and let that
              body of work speak for the company internationally.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-pine text-ivory">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-medium">
              Want to know more about SADCHIRO?
            </h2>
            <p className="text-ivory/70">We're glad to talk.</p>
          </div>
          <Button to="/contact" variant="primary">
            Get in touch
          </Button>
        </Container>
      </section>
    </>
  );
}
