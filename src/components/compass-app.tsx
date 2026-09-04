import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Compass,
  Shield,
  Shapes,
  Laptop,
  ClipboardCheck,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DESIGN_RULES,
  MATERIALS,
  NAV,
  SAFETY_ACTIONS,
  SAFETY_RISKS,
  SCENARIOS,
  SELECTION_FACTORS,
  type Screen,
} from "@/lib/content";

const AUTHOR = "Joshua B. Guillermo";

const CHAPTER: Record<
  Exclude<Screen, "cover" | "lab" | "result">,
  { kicker: string; title: string; lead: string; image: string; alt: string }
> = {
  safety: {
    kicker: "01  /  ICT in the classroom",
    title: "Safety issues on the use of ICT",
    lead: "Digital tools expand what a class can do. They also introduce content, contact, privacy, health, and physical risks that the teacher is expected to manage.",
    image: "/images/safety.jpg",
    alt: "Teacher supervising students in a computer lab",
  },
  materials: {
    kicker: "02  /  Conventional resources",
    title: "Development and use of non-digital materials",
    lead: "Charts, models, realia, and displays remain essential in Philippine classrooms. They work without power, cost little, and make ideas concrete.",
    image: "/images/materials.jpg",
    alt: "Handmade classroom materials including a diorama and charts",
  },
  tools: {
    kicker: "03  /  Digital resources",
    title: "Selection and use of ICT tools",
    lead: "A tool earns its place only when it serves the objective, fits the learners, and can be used safely. Novelty is not a reason to adopt it.",
    image: "/images/tools.jpg",
    alt: "Teacher reviewing digital and printed lesson materials",
  },
};

export function CompassApp() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const scenario = SCENARIOS[step];
  const chosen = scenario?.choices.find((c) => c.id === picked);

  function go(next: Screen) {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function pickChoice(id: string) {
    if (picked) return;
    setPicked(id);
    const choice = scenario.choices.find((c) => c.id === id);
    if (choice?.correct) setScore((s) => s + 1);
  }

  function nextScenario() {
    if (step < SCENARIOS.length - 1) {
      setStep((s) => s + 1);
      setPicked(null);
    } else {
      go("result");
    }
  }

  function restartLab() {
    setStep(0);
    setPicked(null);
    setScore(0);
    go("lab");
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => go("cover")}
            className="flex size-10 items-center justify-center rounded-md text-accent"
            aria-label="Back to briefing"
          >
            <Compass className="size-5" strokeWidth={1.75} />
          </button>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Technology for Teaching and Learning 1
            </p>
            <p className="truncate font-display text-base font-medium">
              Classroom Compass
            </p>
            <p className="truncate text-xs text-muted">{AUTHOR}</p>
          </div>
        </div>
        <nav
          aria-label="Sections"
          className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-3 sm:px-6"
        >
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === "lab") {
                  setStep(0);
                  setPicked(null);
                }
                go(item.id);
              }}
              className={cn(
                "h-9 shrink-0 rounded-full px-3 text-sm transition-colors duration-150",
                screen === item.id || (screen === "result" && item.id === "lab")
                  ? "bg-accent text-accent-fg"
                  : "text-muted hover:bg-surface-2 hover:text-fg",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {screen === "cover" && <Cover onStart={() => go("safety")} />}
        {screen === "safety" && (
          <SafetyChapter onNext={() => go("materials")} />
        )}
        {screen === "materials" && (
          <MaterialsChapter
            onBack={() => go("safety")}
            onNext={() => go("tools")}
          />
        )}
        {screen === "tools" && (
          <ToolsChapter
            onBack={() => go("materials")}
            onNext={() => {
              setStep(0);
              setPicked(null);
              setScore(0);
              go("lab");
            }}
          />
        )}
        {screen === "lab" && scenario && (
          <Lab
            step={step}
            picked={picked}
            chosen={chosen}
            onPick={pickChoice}
            onNext={nextScenario}
            onBack={() => go("tools")}
          />
        )}
        {screen === "result" && (
          <Result
            score={score}
            onRetry={restartLab}
            onHome={() => go("cover")}
          />
        )}
      </main>
      <Credits />
    </div>
  );
}

function Cover({ onStart }: { onStart: () => void }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Interactive briefing
        </p>
        <h1 className="mt-3 max-w-xl text-4xl font-medium sm:text-5xl">
          Prepare lessons that are safe, usable, and worth the class time.
        </h1>
        <p className="mt-5 max-w-lg text-base text-muted sm:text-lg">
          Three stations from TTL 1: manage ICT risk, develop conventional
          materials, and select digital tools with a clear purpose. Then run five
          classroom decisions in the Lesson Lab.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={onStart}>
            Begin briefing
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <p className="mt-8 max-w-sm text-sm text-muted">
          Prepared by{" "}
          <span className="font-medium text-fg">{AUTHOR}</span>
          <span aria-hidden> · </span>
          with the help of Grok
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Shield, label: "ICT safety" },
            { icon: Shapes, label: "Non-digital materials" },
            { icon: Laptop, label: "Tool selection" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
            >
              <item.icon className="size-4 text-accent" strokeWidth={1.75} />
              <span className="text-sm font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <figure className="overflow-hidden rounded-xl border border-border bg-surface">
        <img
          src="/images/hero.jpg"
          alt="Teacher preparing a lesson with a laptop and handmade charts"
          className="aspect-video h-full w-full object-cover"
        />
      </figure>
    </section>
  );
}

function ChapterFrame({
  id,
  children,
  onBack,
  onNext,
  nextLabel,
}: {
  id: keyof typeof CHAPTER;
  children: ReactNode;
  onBack?: () => void;
  onNext: () => void;
  nextLabel: string;
}) {
  const ch = CHAPTER[id];
  return (
    <article>
      <figure className="overflow-hidden rounded-xl border border-border">
        <img
          src={ch.image}
          alt={ch.alt}
          className="aspect-video w-full object-cover"
        />
      </figure>
      <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {ch.kicker}
      </p>
      <h2 className="mt-2 text-3xl font-medium sm:text-4xl">{ch.title}</h2>
      <p className="mt-4 max-w-2xl text-muted">{ch.lead}</p>
      <div className="mt-8">{children}</div>
      <div className="mt-10 flex flex-wrap gap-3">
        {onBack && (
          <Button variant="secondary" onClick={onBack}>
            <ArrowLeft className="size-4" />
            Previous
          </Button>
        )}
        <Button onClick={onNext}>
          {nextLabel}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </article>
  );
}

function SafetyChapter({ onNext }: { onNext: () => void }) {
  return (
    <ChapterFrame id="safety" onNext={onNext} nextLabel="Next: materials">
      <h3 className="font-display text-xl font-medium">Risks to watch</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {SAFETY_RISKS.map((risk) => (
          <div
            key={risk.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h4 className="font-medium">{risk.title}</h4>
            <p className="mt-2 text-sm text-muted">{risk.body}</p>
          </div>
        ))}
      </div>
      <h3 className="mt-10 font-display text-xl font-medium">
        What teachers do
      </h3>
      <ul className="mt-4 space-y-2">
        {SAFETY_ACTIONS.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-md bg-surface-2/70 px-4 py-3 text-sm"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
    </ChapterFrame>
  );
}

function MaterialsChapter({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <ChapterFrame
      id="materials"
      onBack={onBack}
      onNext={onNext}
      nextLabel="Next: ICT tools"
    >
      <h3 className="font-display text-xl font-medium">Materials that still work</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {MATERIALS.map((item) => (
          <div
            key={item.name}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h4 className="font-medium">{item.name}</h4>
            <p className="mt-2 text-sm text-muted">{item.use}</p>
          </div>
        ))}
      </div>
      <h3 className="mt-10 font-display text-xl font-medium">
        Rules for making them
      </h3>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2">
        {DESIGN_RULES.map((rule, i) => (
          <li
            key={rule.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              0{i + 1}
            </p>
            <h4 className="mt-1 font-medium">{rule.title}</h4>
            <p className="mt-2 text-sm text-muted">{rule.body}</p>
          </li>
        ))}
      </ol>
    </ChapterFrame>
  );
}

function ToolsChapter({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <ChapterFrame
      id="tools"
      onBack={onBack}
      onNext={onNext}
      nextLabel="Enter Lesson Lab"
    >
      <h3 className="font-display text-xl font-medium">
        Check these before you adopt a tool
      </h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SELECTION_FACTORS.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h4 className="font-medium">{item.title}</h4>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-muted">
        Models such as SECTIONS and SAMR help, but the sequence stays the same:
        write the objective, know the learners, then choose. If a chart or a
        demonstration does the job with less risk, use it.
      </p>
    </ChapterFrame>
  );
}

function Lab({
  step,
  picked,
  chosen,
  onPick,
  onNext,
  onBack,
}: {
  step: number;
  picked: string | null;
  chosen?: { correct: boolean; note: string };
  onPick: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const scenario = SCENARIOS[step];
  return (
    <article>
      <figure className="overflow-hidden rounded-xl border border-border">
        <img
          src="/images/lab.jpg"
          alt="Lesson planning materials arranged on a wooden table"
          className="aspect-video max-h-72 w-full object-cover"
        />
      </figure>
      <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-accent">
        Lesson lab  /  {step + 1} of {SCENARIOS.length}
      </p>
      <h2 className="mt-2 text-3xl font-medium">{scenario.title}</h2>
      <p className="mt-4 max-w-2xl text-muted">{scenario.prompt}</p>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2"
        aria-hidden
      >
        <div
          className="h-full bg-accent transition-[width] duration-300 ease-out"
          style={{
            width: `${((step + (picked ? 1 : 0)) / SCENARIOS.length) * 100}%`,
          }}
        />
      </div>
      <div className="mt-6 grid gap-3">
        {scenario.choices.map((choice) => {
          const selected = picked === choice.id;
          const reveal = Boolean(picked);
          return (
            <button
              key={choice.id}
              type="button"
              onClick={() => onPick(choice.id)}
              disabled={Boolean(picked)}
              className={cn(
                "rounded-lg border px-4 py-4 text-left text-sm transition-colors duration-150 sm:text-base",
                !reveal && "border-border bg-surface hover:border-accent",
                reveal && selected && choice.correct && "border-accent bg-surface",
                reveal && selected && !choice.correct && "border-warn bg-surface",
                reveal && !selected && "border-border bg-surface opacity-60",
              )}
            >
              <span className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px]",
                    selected
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-border",
                  )}
                >
                  {choice.id.toUpperCase()}
                </span>
                {choice.text}
              </span>
            </button>
          );
        })}
      </div>
      {chosen && (
        <div className="mt-5 rounded-lg border border-border bg-surface p-5">
          <p className="text-sm font-medium">
            {chosen.correct ? "Sound decision." : "Weaker choice."}
          </p>
          <p className="mt-2 text-sm text-muted">{chosen.note}</p>
        </div>
      )}
      <div className="mt-10 flex flex-wrap gap-3">
        <Button variant="secondary" onClick={onBack}>
          <ArrowLeft className="size-4" />
          Briefing
        </Button>
        <Button onClick={onNext} disabled={!picked}>
          {step === SCENARIOS.length - 1 ? "See results" : "Next case"}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </article>
  );
}

function Result({
  score,
  onRetry,
  onHome,
}: {
  score: number;
  onRetry: () => void;
  onHome: () => void;
}) {
  const total = SCENARIOS.length;
  return (
    <section className="mx-auto max-w-xl text-center">
      <ClipboardCheck className="mx-auto size-8 text-accent" strokeWidth={1.5} />
      <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Lab complete</h2>
      <p className="mt-3 text-muted">
        You made the stronger call in{" "}
        <span className="tabular-nums font-medium text-fg">
          {score} of {total}
        </span>{" "}
        classroom cases.
      </p>
      <div className="mt-8 rounded-xl border border-border bg-surface p-6 text-left">
        <h3 className="font-display text-lg font-medium">Carry this forward</h3>
        <ul className="mt-4 space-y-3 text-sm text-muted">
          <li>Protect learners before you open a tool.</li>
          <li>
            Keep conventional materials ready when power, access, or risk says
            so.
          </li>
          <li>
            Select ICT only when it serves the objective better than a simpler
            option.
          </li>
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={onRetry}>
          <RotateCcw className="size-4" />
          Run the lab again
        </Button>
        <Button variant="secondary" onClick={onHome}>
          Return to briefing
        </Button>
      </div>
      <p className="mt-10 text-sm text-muted">
        Prepared by <span className="font-medium text-fg">{AUTHOR}</span>
        <span aria-hidden> · </span>
        with the help of Grok
      </p>
    </section>
  );
}

function Credits() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Prepared by <span className="text-fg">{AUTHOR}</span>
        </p>
        <p>with the help of Grok · TTL 1 briefing</p>
      </div>
    </footer>
  );
}
