import { ChangeEvent, FormEvent, useState } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";

interface FormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Enter your email.";
    } else if (!isValidEmail(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Enter a subject.";
    if (!form.message.trim()) nextErrors.message = "Write a message.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    try {
      // Placeholder submission — connect to a real endpoint or form service later.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="rule">
        <Container className="py-24 md:py-32">
          <div className="max-w-md flex flex-col gap-4">
            <span className="text-sm font-medium text-clay">Message sent</span>
            <h1 className="text-3xl md:text-4xl font-medium text-pine">
              Thanks for reaching out.
            </h1>
            <p className="text-charcoal/70 leading-relaxed">
              We've received your message and will get back to you soon.
            </p>
            <div>
              <Button variant="secondary" onClick={() => setStatus("idle")}>
                Send another message
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="rule">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="flex flex-col gap-4 md:col-span-5">
          <span className="text-sm font-medium text-clay">Contact</span>
          <h1 className="text-3xl md:text-4xl font-medium text-pine">
            Let's talk.
          </h1>
          <p className="text-charcoal/70 leading-relaxed max-w-sm">
            Whether it's about SADCHIRO, one of our products, or a potential
            collaboration, send us a message and we'll respond as soon as we
            can.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-6 md:col-span-7"
        >
          {status === "error" && (
            <p className="border border-clay/40 bg-clay/5 px-4 py-3 text-sm text-clay-dark">
              Something went wrong sending your message. Please try again.
            </p>
          )}

          <Field
            label="Name"
            id="name"
            value={form.name}
            onChange={handleChange("name")}
            error={errors.name}
            required
          />

          <Field
            label="Email"
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            error={errors.email}
            required
          />

          <Field
            label="Company / Organization"
            id="company"
            value={form.company}
            onChange={handleChange("company")}
          />

          <Field
            label="Subject"
            id="subject"
            value={form.subject}
            onChange={handleChange("subject")}
            error={errors.subject}
            required
          />

          <FieldTextarea
            label="Message"
            id="message"
            value={form.message}
            onChange={handleChange("message")}
            error={errors.message}
            required
          />

          <div>
            <Button type="submit" variant="primary">
              {status === "submitting" ? "Sending…" : "Send message"}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
}

function Field({ label, id, value, onChange, error, required, type = "text" }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label} {required && <span className="text-clay">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`border bg-transparent px-4 py-3 text-base text-charcoal outline-none transition-colors focus:border-pine ${
          error ? "border-clay" : "border-charcoal/25"
        }`}
      />
      {error && (
        <span id={`${id}-error`} className="text-sm text-clay-dark">
          {error}
        </span>
      )}
    </div>
  );
}

interface TextareaProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

function FieldTextarea({ label, id, value, onChange, error, required }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label} {required && <span className="text-clay">*</span>}
      </label>
      <textarea
        id={id}
        rows={5}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`border bg-transparent px-4 py-3 text-base text-charcoal outline-none transition-colors focus:border-pine resize-none ${
          error ? "border-clay" : "border-charcoal/25"
        }`}
      />
      {error && (
        <span id={`${id}-error`} className="text-sm text-clay-dark">
          {error}
        </span>
      )}
    </div>
  );
}
