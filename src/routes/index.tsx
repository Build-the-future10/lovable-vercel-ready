import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { GenesisIntro } from "@/components/GenesisIntro";
import { NeuralField } from "@/components/NeuralField";
import { Wordmark } from "@/components/Wordmark";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "The Bu1ld — ML Research × Startup Hub";
    const description =
      "The Bu1ld is a hybrid AI lab and startup ecosystem. 100+ researchers, engineers, and founders shipping frontier ML systems with collaborators from Stanford, MIT, and UC.";
    const url = "https://thebu1ld.com/";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "machine learning, AI lab, research, startups, world models, foundation models, ML cohort, Stanford, MIT, UC" },
        { name: "author", content: "The Bu1ld" },
        { name: "theme-color", content: "#050505" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "The Bu1ld" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "The Bu1ld",
                url,
                description,
                sameAs: ["https://discord.gg/NG4QYat4P"],
                email: "ryan@thebu1ld.com",
              },
              {
                "@type": "WebSite",
                url,
                name: "The Bu1ld",
                description,
              },
            ],
          }),
        },
      ],
    };
  },
  component: Index,
});

const RESEARCH = [
  {
    id: "01",
    name: "Counterfactual Defect Worlds",
    color: "red",
    desc: "Probing how generative world models reason about broken, perturbed, and out-of-distribution environments by injecting controlled defects and studying recovery.",
  },
  {
    id: "02",
    name: "Sapir, Whorf & the Latent Tongue",
    color: "blue",
    desc: "Studying AI's understanding of the Sapir, Whorf hypothesis: how language priors shape internal representations, and what monolingual vs. multilingual models actually carve up differently.",
  },
  {
    id: "03",
    name: "Adaptive Theory Geometry in World Models",
    color: "green",
    desc: "Mapping the curvature, intrinsic dimension, and theory-laden structure of latent manifolds inside world models as they adapt to new physical regimes.",
  },
  {
    id: "04",
    name: "Residual Event Tokenization",
    color: "bone",
    desc: "A new tokenization scheme that encodes only residual, surprise-bearing events from continuous streams, compressing video, sensor, and agent trajectories without losing causal signal.",
  },
  {
    id: "05",
    name: "Dynamical Representation Phase Transitions for PDE Surrogates",
    color: "blue",
    desc: "Tracking sharp phase transitions in learned representations as neural PDE surrogates scale, and using them to predict where a surrogate will silently break.",
  },
] as const;

const PROGRAMS = [
  {
    tag: "P-01",
    name: "AI Builder Cohort",
    time: "12 weeks, rolling",
    body: "An intensive, project-driven cohort where engineers ship a production ML system end to end, from the first paper read to deployed inference.",
  },
  {
    tag: "P-02",
    name: "Research Fellowship",
    time: "6 months, selective",
    body: "Co-advised research with PhD collaborators from Stanford, MIT, and a UC physics PhD on the team. Targeting top-tier venues and open-sourced reference code.",
  },
  {
    tag: "P-03",
    name: "Startup Incubation",
    time: "ongoing",
    body: "Translate a research thread into a venture: technical due diligence, founder matching, infra credits, and a runway to first customers.",
  },
];

const STARTUPS = [
  { name: "NeuroCad", stage: "scaling", domain: "Text to CAD", thesis: "Natural language to manufacturable CAD assemblies, with a learned mechanical prior." },
  { name: "Colorworld", stage: "seed", domain: "Generative color", thesis: "An AI color coding generator that produces brand-coherent palettes and full design tokens from intent." },
  { name: "Exovian Games", stage: "prototype", domain: "AI native games", thesis: "Game worlds where the simulator, NPCs, and narrative are driven by on-device learned models." },
  { name: "Eigen Δ", stage: "research", domain: "Foundation models", thesis: "Compact delta-trained foundation models that specialize in hours, not weeks." },
  { name: "Many more", stage: "research", domain: "Open thread", thesis: "New ventures spin out of the lab every cycle. Builders propose, the community pressure tests, the best ideas get shipped." },
];

const TEAM = [
  { name: "Ryan Gomez", role: "Founder, Research & Systems", initials: "RG", color: "blue" },
  { name: "UC Physics PhD", role: "Principal Researcher, Physics ML", initials: "ΦD", color: "green" },
];

const STATS = [
  ["100+", "builders"],
  ["5", "active research threads"],
  ["5+", "startup projects"],
  ["Stanford · MIT · UC", "research collaborators"],
];

const MANIFESTO = [
  {
    n: "01",
    title: "Ship beats publish.",
    body: "Papers are evidence, not the goal. Every thread closes with a working artifact: a model, a demo, a deployed system, a company.",
  },
  {
    n: "02",
    title: "Rigor without ritual.",
    body: "We measure twice, ablate honestly, and reject benchmarks that don't predict downstream behavior. Theatre is the enemy of progress.",
  },
  {
    n: "03",
    title: "Builders of any age.",
    body: "Sixteen or sixty, what matters is taste, throughput, and the willingness to be wrong in public. The lab is judged by output, not credentials.",
  },
  {
    n: "04",
    title: "Open by default.",
    body: "Our reference code is public. Our threads are documented. Closed work exists only when a venture requires it, and only for as long as it must.",
  },
];

const UPDATES = [
  { date: "2026 · Q2", tag: "release", text: "Residual Event Tokenizer v0.3 open-sourced; 4.1× compression on driving video at parity loss." },
  { date: "2026 · Q2", tag: "spinout", text: "NeuroCad raises seed; first paying customers in industrial CAD." },
  { date: "2026 · Q1", tag: "paper", text: "Phase Transitions in Neural PDE Surrogates accepted to ICLR workshop track." },
  { date: "2026 · Q1", tag: "cohort", text: "AI Builder Cohort 04 onboarded · 38 builders, 11 cities, 6 universities." },
  { date: "2025 · Q4", tag: "lab", text: "Latent Tongue thread launched in collaboration with Stanford NLP." },
];

const FAQ = [
  {
    q: "Who is this for?",
    a: "Engineers and researchers who want to do work that compounds. We bias toward people who already ship — open-source maintainers, paper authors, indie founders, students who built something real.",
  },
  {
    q: "Do I need to be in a specific city?",
    a: "No. The Bu1ld is distributed. We meet weekly online, run quarterly in-person intensives, and host pop-up residencies near our university partners.",
  },
  {
    q: "Is there a fee?",
    a: "No. Programs are free for accepted members. We're funded by spin-out equity, research grants, and infra partners.",
  },
  {
    q: "What does an application look like?",
    a: "Send work, not a résumé. A repo, a paper, a demo video, a deployed product. We read everything.",
  },
];

const TICKER = [
  "Cohort 04 in flight",
  "Residual Event Tokenizer v0.3 shipped",
  "NeuroCad → seed",
  "PDE phase-transition paper @ ICLR",
  "Latent Tongue thread × Stanford NLP",
  "Open-source by default",
  "Stanford · MIT · UC",
  "Builders of any age",
];

const NAV = [
  { id: "what", label: "What" },
  { id: "research", label: "Research" },
  { id: "programs", label: "Programs" },
  { id: "startups", label: "Startups" },
  { id: "manifesto", label: "Manifesto" },
  { id: "updates", label: "Updates" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const VOICES = [
  {
    quote: "I joined to read papers. I left with a co-founder, a deployed model, and a thread of research I'll spend the next decade on.",
    who: "Builder, Cohort 02",
  },
  {
    quote: "It is the only place I've seen where a 19-year-old and a tenured professor argue about loss curves as peers and both come away sharper.",
    who: "PhD collaborator, MIT",
  },
  {
    quote: "We went from a thread on Discord to a funded company in eleven weeks. The pressure-testing was brutal, in the best possible way.",
    who: "Founder, NeuroCad",
  },
];

const stageColor: Record<string, string> = {
  research: "text-bone border-bone/40",
  prototype: "text-accent-green border-accent-green/40",
  seed: "text-accent-blue border-accent-blue/40",
  scaling: "text-accent-red border-accent-red/40",
};

const hoverGlow: Record<string, string> = {
  blue: "hover:glow-blue",
  red: "hover:glow-red",
  green: "hover:glow-green",
  bone: "hover:glow-bone",
};

const textAccent: Record<string, string> = {
  blue: "text-accent-blue",
  red: "text-accent-red",
  green: "text-accent-green",
  bone: "text-bone",
};

function SectionLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
      <span className="text-bone/60">// {id}</span> &nbsp; {children}
    </div>
  );
}

function Index() {
  const [intro, setIntro] = useState(true);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent-blue/30">
      {intro && <GenesisIntro onDone={() => setIntro(false)} />}

      {/* GLOBAL FLOW FIELD: dots all around the entire site */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralField density={170} fixed />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/80" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="text-xl tracking-tight">
            <Wordmark />
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            <a href="#what" className="hover:text-bone transition">What we do</a>
            <a href="#research" className="hover:text-bone transition">Research</a>
            <a href="#programs" className="hover:text-bone transition">Programs</a>
            <a href="#startups" className="hover:text-bone transition">Startups</a>
            <a href="#manifesto" className="hover:text-bone transition">Manifesto</a>
            <a href="#updates" className="hover:text-bone transition">Updates</a>
            <a href="#team" className="hover:text-bone transition">Team</a>
            <a href="#contact" className="hover:text-bone transition">Contact</a>
          </nav>
          <a
            href="https://discord.gg/NG4QYat4P"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] tracking-[0.2em] uppercase px-3 py-2 border border-accent-blue/40 text-bone hover:bg-accent-blue/10 transition rounded-sm"
          >
            Join →
          </a>
        </div>
      </header>

      <div className="relative z-10">
        {/* HERO */}
        <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
          <div className="relative mx-auto max-w-7xl px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="max-w-5xl"
            >
              <SectionLabel id="00">a research × startup hub</SectionLabel>
              <h1 className="font-display font-bold mt-6 text-[clamp(2.5rem,7.5vw,7rem)] leading-[0.95] tracking-tight">
                <Wordmark />
                <span className="block text-foreground/90 mt-4">
                  Where machine learning <br className="hidden md:block" />
                  research becomes <span className="italic text-bone">real systems.</span>
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                The Bu1ld is a hybrid AI lab and startup ecosystem. 100+ researchers, engineers, and founders
                of all ages, collaborating with professors and PhD researchers from Stanford, MIT, and UC,
                building, finding, and scaling ML driven products together.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-3 px-6 py-3 rounded-sm bg-bone text-background font-mono text-xs tracking-[0.25em] uppercase hover:bg-accent-blue transition glow-bone">
                  Apply <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="#research" className="inline-flex items-center gap-3 px-6 py-3 rounded-sm border border-bone/30 font-mono text-xs tracking-[0.25em] uppercase hover:border-bone hover:bg-bone/5 transition">
                  Explore research
                </a>
              </div>
            </motion.div>

            {/* status strip */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 border border-border/40 backdrop-blur-sm">
              {STATS.map(([n, l]) => (
                <div key={l} className="bg-background/70 p-5">
                  <div className="font-display text-2xl md:text-3xl text-bone">{n}</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="what" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel id="01">what we do</SectionLabel>
            <div className="mt-8 grid md:grid-cols-12 gap-12">
              <h2 className="md:col-span-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                A living research environment <span className="text-accent-blue">that ships.</span>
              </h2>
              <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Most labs publish. Most startups iterate on shipped tech. The Bu1ld sits between them, a single
                  community where frontier research and production systems are built by the same people, on the
                  same week, in the same room.
                </p>
                <p>
                  We organize around <span className="text-bone">research threads</span>, not job titles. A thread
                  may begin as a paper read on Monday, a prototype by Friday, and a startup pitch within a quarter.
                  Every project is held to two standards at once: scientific honesty and engineering rigor.
                </p>
                <p>
                  Our main goal is simple: build a community of ML driven individuals of all ages who can find,
                  build, and scale ML products together. Our collaborators include professors and PhD researchers
                  from Stanford, MIT, and a UC physics PhD on the core team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <SectionLabel id="02">research areas</SectionLabel>
                <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">Threads we are pulling on.</h2>
              </div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">05 / active</p>
            </div>
            <div className="mt-14 grid md:grid-cols-2 gap-6">
              {RESEARCH.map((r) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`group relative p-8 bg-card/60 backdrop-blur-md rounded-sm border border-border ${hoverGlow[r.color]} transition-all duration-500`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`font-mono text-[11px] tracking-[0.25em] uppercase ${textAccent[r.color]}`}>
                      {r.id} · {r.color}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">thread</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mt-6 text-bone leading-tight">{r.name}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel id="03">programs</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">Three ways in.</h2>
            <div className="mt-14 grid md:grid-cols-3 gap-px bg-border/40 border border-border/40">
              {PROGRAMS.map((p) => (
                <div key={p.tag} className="bg-background/80 p-8 group hover:bg-card/60 transition">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent-blue">{p.tag}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{p.time}</span>
                  </div>
                  <h3 className="font-display text-2xl mt-6 text-bone">{p.name}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{p.body}</p>
                  <div className="mt-8 h-px bg-gradient-to-r from-accent-blue/40 via-accent-violet/40 to-transparent" />
                  <a href="#contact" className="mt-6 inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-bone hover:text-accent-blue transition">
                    Apply to track →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STARTUPS */}
        <section id="startups" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel id="04">startup projects</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">Research becomes company.</h2>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STARTUPS.map((s) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="p-6 border border-border bg-card/50 backdrop-blur-md rounded-sm hover:border-bone/40 transition"
                >
                  <span className={`inline-block font-mono text-[10px] tracking-[0.25em] uppercase px-2 py-1 border rounded-sm ${stageColor[s.stage]}`}>
                    {s.stage}
                  </span>
                  <h3 className="font-display text-xl mt-5 text-bone">{s.name}</h3>
                  <p className="mt-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.15em]">{s.domain}</p>
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{s.thesis}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel id="05">team</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">Builders and researchers.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              A growing collective of engineers, scientists, and founders. More members coming soon.
            </p>
            <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TEAM.map((m) => (
                <div key={m.name} className={`p-6 border border-border bg-card/50 backdrop-blur-md rounded-sm ${hoverGlow[m.color]} transition`}>
                  <div className={`h-16 w-16 rounded-full grid place-items-center bg-gradient-to-br from-accent-blue/30 to-accent-violet/20 border border-accent-blue/40 font-display text-xl ${textAccent[m.color]}`}>
                    {m.initials}
                  </div>
                  <h3 className="mt-5 font-display text-lg text-bone">{m.name}</h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{m.role}</p>
                </div>
              ))}
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="p-6 border border-dashed border-border/60 rounded-sm opacity-50 hover:opacity-80 transition">
                  <div className="h-16 w-16 rounded-full border border-dashed border-bone/20" />
                  <p className="mt-5 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">incoming</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section id="manifesto" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel id="06">manifesto</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight max-w-3xl">
              Four lines we will not cross.
            </h2>
            <div className="mt-14 grid md:grid-cols-2 gap-px bg-border/40 border border-border/40">
              {MANIFESTO.map((m) => (
                <div key={m.n} className="bg-background/80 p-8 hover:bg-card/60 transition">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent-blue">{m.n}</span>
                    <h3 className="font-display text-2xl md:text-3xl text-bone">{m.title}</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UPDATES / TIMELINE */}
        <section id="updates" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <SectionLabel id="07">signal log</SectionLabel>
                <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">Recent telemetry.</h2>
              </div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">live feed</p>
            </div>
            <div className="mt-14 relative">
              <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-blue/40 to-transparent" />
              <ul className="space-y-10">
                {UPDATES.map((u, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}
                  >
                    <span className="absolute left-2 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent-blue glow-blue" />
                    <div className="md:text-right md:pr-12">
                      <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{u.date}</div>
                      <div className={`font-mono text-[10px] tracking-[0.25em] uppercase mt-1 ${u.tag === "release" ? "text-accent-green" : u.tag === "spinout" ? "text-accent-red" : u.tag === "paper" ? "text-accent-blue" : "text-bone"}`}>{u.tag}</div>
                    </div>
                    <div className="md:pl-12 mt-2 md:mt-0">
                      <p className="text-foreground/90 leading-relaxed">{u.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* VOICES */}
        <section id="voices" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel id="08">voices</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">From inside the lab.</h2>
            <div className="mt-14 grid md:grid-cols-3 gap-4">
              {VOICES.map((v, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="p-8 border border-border bg-card/50 backdrop-blur-md rounded-sm hover:border-bone/40 transition"
                >
                  <div className="font-display text-3xl text-accent-blue leading-none">&ldquo;</div>
                  <blockquote className="mt-3 text-foreground/90 leading-relaxed text-[15px]">{v.quote}</blockquote>
                  <figcaption className="mt-6 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">— {v.who}</figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative py-32 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl px-6">
            <SectionLabel id="09">faq</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">Frequently considered.</h2>
            <dl className="mt-14 divide-y divide-border border-y border-border">
              {FAQ.map((f, i) => (
                <div key={i} className="py-8 grid md:grid-cols-12 gap-6">
                  <dt className="md:col-span-5 font-display text-xl text-bone">{f.q}</dt>
                  <dd className="md:col-span-7 text-muted-foreground leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative py-32 border-t border-border overflow-hidden">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <SectionLabel id="10">contact</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl mt-6 tracking-tight leading-[1]">
              Build with <Wordmark />.
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
              Researchers, engineers, founders of all ages. If you want to do work that compounds, come in.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://discord.gg/NG4QYat4P"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-bone text-background font-mono text-xs tracking-[0.3em] uppercase hover:bg-accent-blue transition glow-bone"
              >
                Join the discord <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:ryan@thebu1ld.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-sm border border-bone/30 font-mono text-xs tracking-[0.3em] uppercase hover:bg-bone/5 transition"
              >
                Email Ryan
              </a>
            </div>

            <div className="mt-20 grid sm:grid-cols-3 gap-px bg-border/40 border border-border/40 text-left backdrop-blur-sm">
              <div className="bg-background/80 p-6">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Discord</div>
                <a href="https://discord.gg/NG4QYat4P" className="mt-2 block font-display text-bone hover:text-accent-blue transition break-all">
                  discord.gg/NG4QYat4P
                </a>
              </div>
              <div className="bg-background/80 p-6">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Lead contact</div>
                <div className="mt-2 font-display text-bone">Ryan Gomez</div>
                <div className="text-xs text-muted-foreground mt-1">Founder, Research & Systems</div>
              </div>
              <div className="bg-background/80 p-6">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Located</div>
                <div className="mt-2 font-display text-bone">Distributed</div>
                <div className="text-xs text-muted-foreground mt-1">Stanford · MIT · UC · Online</div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative border-t border-border py-12 bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-3 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            <div className="space-y-3">
              <div className="text-bone"><Wordmark /></div>
              <div>© 2026 the bu1ld · all systems nominal</div>
            </div>
            <div className="space-y-2">
              <div className="text-bone/70">navigate</div>
              <div className="grid grid-cols-2 gap-y-1 gap-x-6">
                <a href="#research" className="hover:text-bone transition">Research</a>
                <a href="#programs" className="hover:text-bone transition">Programs</a>
                <a href="#startups" className="hover:text-bone transition">Startups</a>
                <a href="#manifesto" className="hover:text-bone transition">Manifesto</a>
                <a href="#updates" className="hover:text-bone transition">Updates</a>
                <a href="#faq" className="hover:text-bone transition">FAQ</a>
              </div>
            </div>
            <div className="space-y-2 md:text-right">
              <div className="text-bone/70">signal</div>
              <div className="flex md:justify-end items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
                live · cohort 04 in flight
              </div>
              <div><a href="https://discord.gg/NG4QYat4P" className="hover:text-bone transition">discord</a> · <a href="mailto:ryan@thebu1ld.com" className="hover:text-bone transition">email</a></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}


