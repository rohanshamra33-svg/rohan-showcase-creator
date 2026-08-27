import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Gamepad2,
  Palette,
  ChefHat,
  Sparkles,
  Mail,
  Phone,
  Instagram,
  Compass,
  Rocket,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import rohan from "@/assets/rohan.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohan Sharma — B.Com Student Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Rohan Sharma, a B.Com student at Surya Sen Mahavidyalaya with interests in gaming, painting and cooking.",
      },
      { property: "og:title", content: "Rohan Sharma — B.Com Student Portfolio" },
      {
        property: "og:description",
        content:
          "B.Com student at Surya Sen Mahavidyalaya. Learning, creating and growing — gaming, painting and cooking.",
      },
    ],
  }),
  component: Index,
});

const interests = [
  {
    icon: Gamepad2,
    title: "Gaming",
    text: "Competitive and story-driven games — a space to sharpen focus, patience and quick decision making.",
  },
  {
    icon: Palette,
    title: "Painting",
    text: "Exploring colour, composition and mood on canvas as a way to think visually and stay creative.",
  },
  {
    icon: ChefHat,
    title: "Cooking",
    text: "Experimenting with recipes and flavours — planning, timing and patience, all in one place.",
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden px-5 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles size={13} className="text-primary" />
              Currently pursuing B.Com
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              Rohan
              <br />
              Sharma<span className="text-primary">.</span>
            </h1>
            <p className="mt-5 text-base font-medium text-muted-foreground sm:text-lg">
              B.Com Student · Creative Mind · Gamer · Painter · Cooking Enthusiast
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              I'm currently pursuing my Bachelor of Commerce degree at Surya Sen Mahavidyalaya,
              where I'm building a strong academic foundation. Outside of class, I spend my time
              gaming, painting and cooking — the things that keep me curious and creative.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                About Me
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="animate-fade-in flex justify-center md:justify-end">
            <div className="group relative">
              <div className="absolute -inset-3 rounded-full bg-primary/15 blur-2xl transition-all duration-500 group-hover:bg-primary/25" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border bg-card p-2 shadow-xl sm:h-80 sm:w-80">
                <img
                  src={rohan.url}
                  alt="Portrait of Rohan Sharma"
                  className="h-full w-full rounded-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A little about me">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-sm">
              <img
                src={rohan.url}
                alt="Rohan Sharma"
                className="h-80 w-full rounded-2xl object-cover object-top transition-transform duration-700 hover:scale-[1.03] sm:h-96"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                I'm Rohan Sharma, currently pursuing a{" "}
                <span className="font-semibold text-foreground">Bachelor of Commerce (B.Com)</span>.
              </p>
              <p>
                I'm in my{" "}
                <span className="font-semibold text-foreground">2nd year, 3rd semester</span> at{" "}
                <span className="font-semibold text-foreground">Surya Sen Mahavidyalaya</span>.
              </p>
              <p>
                Beyond academics, I enjoy creative and recreational activities — gaming, painting
                and cooking. Each one teaches me something different: patience, perspective and
                process.
              </p>
              <p>
                Right now my focus is on developing myself academically and personally, while
                exploring my interests and the opportunities ahead.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["🎮 Gaming", "🎨 Painting", "🍳 Cooking"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Education" title="Where I'm studying">
        <Reveal>
          <div className="relative rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg sm:p-9">
            <span className="absolute top-7 right-7 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              Currently Pursuing
            </span>
            <div className="flex min-w-0 items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                <GraduationCap size={22} />
              </div>
              <div className="min-w-0 pr-24 sm:pr-0">
                <h3 className="text-xl font-bold">Bachelor of Commerce (B.Com)</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  Surya Sen Mahavidyalaya
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  2nd Year · 3rd Semester — currently in progress
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills & Interests" title="What I spend my time on">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-6 text-sm text-muted-foreground">
            These are personal interests rather than certified professional skills — presented
            honestly as the things I'm genuinely into.
          </p>
        </Reveal>
      </Section>

      {/* EXPERIENCE + EXPLORING */}
      <Section id="experience" eyebrow="Experience" title="Building it, step by step">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                <Rocket size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold">No professional experience yet</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I'm at the beginning of my journey. Right now my energy goes into education,
                personal development and exploring creative interests — the groundwork that
                real experience is built on.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-border bg-foreground p-7 text-background shadow-sm sm:p-9">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-background/10">
                <Compass size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">What I'm Exploring</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-75">
                I'm not offering professional services yet. Instead, I'm developing my skills and
                discovering the areas — within commerce and my creative interests — where I can
                build real expertise over the coming years.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Projects" title="Projects coming soon">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-dashed border-primary/40 bg-card px-7 py-16 text-center shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--accent),transparent_60%)] opacity-70" />
            <div className="relative">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary">
                <Sparkles size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold sm:text-3xl">Coming Soon</h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                "I'm currently learning, exploring, and working toward building projects that
                showcase my skills and creativity."
              </p>
              <div className="mx-auto mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-1/3 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Get in touch">
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grid gap-3">
              <ContactCard
                icon={Mail}
                label="Email"
                value="rohanshamra33@gmail.com"
                href="mailto:rohanshamra33@gmail.com"
              />
              <ContactCard icon={Phone} label="Phone" value="8250985542" href="tel:8250985542" />
              <ContactCard
                icon={Instagram}
                label="Instagram"
                value="@lill.stirrr07"
                href="https://instagram.com/lill.stirrr07"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="grid gap-4">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Say hello…"
                    className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                >
                  Send Message
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
                <p className="text-xs text-muted-foreground">
                  {sent
                    ? "This form isn't connected to an email service yet, so your message wasn't delivered. Please reach out by email or Instagram."
                    : "Note: this form is a design placeholder — no messages are delivered yet."}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 sm:flex sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-lg font-bold">Rohan Sharma</p>
            <p className="text-sm text-muted-foreground">Learning. Creating. Growing.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="https://instagram.com/lill.stirrr07"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="mailto:rohanshamra33@gmail.com"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Email
            </a>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rohan Sharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-9">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
              <span className="h-px w-6 bg-primary" />
              {eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon size={19} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium text-muted-foreground">{label}</span>
        <span className="block truncate text-sm font-semibold">{value}</span>
      </span>
      <ArrowUpRight size={16} className="shrink-0 text-muted-foreground" />
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  );
}
