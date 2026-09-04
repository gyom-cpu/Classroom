import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Laptop, c as Check, i as RotateCcw, l as ArrowRight, n as Shield, o as Compass, r as Shapes, s as ClipboardCheck, u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KkoHY0pX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:bg-accent-hover",
			secondary: "bg-surface text-fg border border-border hover:bg-surface-2",
			ghost: "text-fg hover:bg-surface-2"
		},
		size: {
			default: "h-11 px-5 text-sm rounded-md",
			lg: "h-12 px-6 text-base rounded-lg",
			sm: "h-9 px-3 text-sm rounded-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var NAV = [
	{
		id: "cover",
		label: "Briefing"
	},
	{
		id: "safety",
		label: "Safety"
	},
	{
		id: "materials",
		label: "Materials"
	},
	{
		id: "tools",
		label: "ICT tools"
	},
	{
		id: "lab",
		label: "Lesson lab"
	}
];
var SAFETY_RISKS = [
	{
		title: "Inappropriate content",
		body: "Students may reach violent, sexual, or extremist material without filters and supervision."
	},
	{
		title: "Cyberbullying and contact",
		body: "Messages, images, and group chats can be used to harass, groom, or expose private data."
	},
	{
		title: "Privacy and data",
		body: "Many classroom apps share student information with third parties. The Data Privacy Act still applies."
	},
	{
		title: "Health and posture",
		body: "Long sessions cause eye strain, poor posture, and fatigue. Breaks and workstation setup matter."
	},
	{
		title: "Malware and phishing",
		body: "Unsafe downloads, USBs, and fake login pages can damage devices and steal accounts."
	},
	{
		title: "Physical hazards",
		body: "Loose cables, overloaded outlets, and faulty equipment create trip, shock, and fire risks."
	}
];
var SAFETY_ACTIONS = [
	"Use filtering, antivirus, and an acceptable-use policy.",
	"Supervise sessions and teach students how to report harm.",
	"Keep personal data off public posts. Get consent before recording.",
	"Set chair, screen, and keyboard height. Require short breaks.",
	"Orient parents and students on the school's internet code of conduct."
];
var MATERIALS = [
	{
		name: "Writing boards",
		use: "Live demonstration and group notes. Keep writing large and uncluttered."
	},
	{
		name: "Diorama",
		use: "A small 3D scene that makes a period, ecosystem, or process concrete."
	},
	{
		name: "Nature table",
		use: "Seasonal objects students can handle. Good for observation lessons."
	},
	{
		name: "Flip charts and zigzag boards",
		use: "Sequence a process step by step without needing a projector."
	},
	{
		name: "Wall and rope displays",
		use: "Keep key ideas visible after the lesson so students can revisit them."
	},
	{
		name: "Realia and models",
		use: "Real objects or mock-ups when the actual thing is too large, rare, or unsafe."
	}
];
var DESIGN_RULES = [
	{
		title: "Unity",
		body: "One idea per visual. Put a clear headline at the top."
	},
	{
		title: "Simplicity",
		body: "Cut extra words, numbers, and decoration. Students should recall the idea at a glance."
	},
	{
		title: "Legibility",
		body: "High contrast, large lettering, and a viewing distance that matches the room."
	},
	{
		title: "Alignment to objectives",
		body: "Build from the lesson goal, then from materials you already have. Adapt, do not copy protected designs."
	}
];
var SELECTION_FACTORS = [
	{
		title: "Learning goal",
		body: "Start with what students must know or do. The tool is a means, not the lesson."
	},
	{
		title: "Access",
		body: "Check devices, bandwidth, licenses, and whether every learner can use it."
	},
	{
		title: "Ease",
		body: "Prefer a short learning curve for both teacher and class. Support must exist."
	},
	{
		title: "Safety",
		body: "Review privacy, age-appropriateness, ads, and data sharing before you adopt it."
	},
	{
		title: "Cost and time",
		body: "Include licenses, training, and class minutes. A free tool is not free if it wastes the period."
	},
	{
		title: "Fit",
		body: "Match pedagogy, content, and context. A popular app is not automatically the right app."
	}
];
var SCENARIOS = [
	{
		id: "s1",
		title: "Computer lab, first period",
		prompt: "Grade 6 students will search for images of local plants. The school has filtering software, but several students finish early and open a game site.",
		choices: [
			{
				id: "a",
				text: "Let them play. They finished the task.",
				correct: false,
				note: "Unsupervised extra browsing is how students reach unsafe sites and lose the rest of the period."
			},
			{
				id: "b",
				text: "Redirect them to a prepared extension task and keep circulating.",
				correct: true,
				note: "Supervision plus a next task keeps the session on purpose and reduces risk."
			},
			{
				id: "c",
				text: "Shut down all computers for the rest of the week.",
				correct: false,
				note: "Removing ICT entirely does not teach safe use. It only avoids the problem."
			}
		]
	},
	{
		id: "s2",
		title: "No projector, no signal",
		prompt: "You planned a video on the water cycle, but the internet is down. You have manila paper, markers, and a basin of water.",
		choices: [
			{
				id: "a",
				text: "Cancel the lesson and wait for connectivity.",
				correct: false,
				note: "The objective can still be taught. Waiting trains the class to depend on a device."
			},
			{
				id: "b",
				text: "Lecture from memory with no visual support.",
				correct: false,
				note: "A lecture without visuals is weaker than a simple demonstration you can still run."
			},
			{
				id: "c",
				text: "Build a labeled chart and demonstrate evaporation with the basin.",
				correct: true,
				note: "Conventional materials keep the objective intact when digital tools fail."
			}
		]
	},
	{
		id: "s3",
		title: "Choosing an app",
		prompt: "A colleague recommends a flashy quiz app. It is free, full of ads, and asks students to create accounts with their emails.",
		choices: [
			{
				id: "a",
				text: "Adopt it. Students like games, and the price is zero.",
				correct: false,
				note: "Ads and email accounts create privacy and distraction costs that are not free."
			},
			{
				id: "b",
				text: "Check privacy, ads, and whether it serves the objective better than paper quizzes.",
				correct: true,
				note: "Selection starts with the goal, then safety, access, and real learning value."
			},
			{
				id: "c",
				text: "Reject every digital quiz forever.",
				correct: false,
				note: "Some digital tools are sound. The task is to select, not to refuse all ICT."
			}
		]
	},
	{
		id: "s4",
		title: "Recording a class",
		prompt: "You want to record an online recitation so absentees can watch later. Several learners are under 18.",
		choices: [
			{
				id: "a",
				text: "Record and post the full session on a public Facebook group.",
				correct: false,
				note: "Public posting of minors without a legitimate, controlled purpose violates privacy practice."
			},
			{
				id: "b",
				text: "Skip recording. Privacy makes any capture illegal.",
				correct: false,
				note: "Recording can be done with consent, a school account, and a limited audience."
			},
			{
				id: "c",
				text: "Get guardian consent, use the school platform, and limit who can view it.",
				correct: true,
				note: "Consent, purpose, and controlled access match Data Privacy guidance for schools."
			}
		]
	},
	{
		id: "s5",
		title: "Display that nobody can read",
		prompt: "A student group made a zigzag board packed with tiny text, clip art, and three topics at once.",
		choices: [
			{
				id: "a",
				text: "Display it as-is. Student work should not be edited.",
				correct: false,
				note: "The material fails unity, simplicity, and legibility. It will not teach."
			},
			{
				id: "b",
				text: "Guide a revision: one idea, a headline, larger lettering, fewer graphics.",
				correct: true,
				note: "Design rules are part of developing conventional materials, including student-made ones."
			},
			{
				id: "c",
				text: "Replace it with a slide deck even though there is no projector.",
				correct: false,
				note: "The medium is still usable. The problem is design, not the absence of ICT."
			}
		]
	}
];
var CHAPTER = {
	safety: {
		kicker: "01  /  ICT in the classroom",
		title: "Safety issues on the use of ICT",
		lead: "Digital tools expand what a class can do. They also introduce content, contact, privacy, health, and physical risks that the teacher is expected to manage.",
		image: "/images/safety.jpg",
		alt: "Teacher supervising students in a computer lab"
	},
	materials: {
		kicker: "02  /  Conventional resources",
		title: "Development and use of non-digital materials",
		lead: "Charts, models, realia, and displays remain essential in Philippine classrooms. They work without power, cost little, and make ideas concrete.",
		image: "/images/materials.jpg",
		alt: "Handmade classroom materials including a diorama and charts"
	},
	tools: {
		kicker: "03  /  Digital resources",
		title: "Selection and use of ICT tools",
		lead: "A tool earns its place only when it serves the objective, fits the learners, and can be used safely. Novelty is not a reason to adopt it.",
		image: "/images/tools.jpg",
		alt: "Teacher reviewing digital and printed lesson materials"
	}
};
function CompassApp() {
	const [screen, setScreen] = (0, import_react.useState)("cover");
	const [step, setStep] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const scenario = SCENARIOS[step];
	const chosen = scenario?.choices.find((c) => c.id === picked);
	function go(next) {
		setScreen(next);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	function pickChoice(id) {
		if (picked) return;
		setPicked(id);
		if (scenario.choices.find((c) => c.id === id)?.correct) setScore((s) => s + 1);
	}
	function nextScenario() {
		if (step < SCENARIOS.length - 1) {
			setStep((s) => s + 1);
			setPicked(null);
		} else go("result");
	}
	function restartLab() {
		setStep(0);
		setPicked(null);
		setScore(0);
		go("lab");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go("cover"),
					className: "flex size-10 items-center justify-center rounded-md text-accent",
					"aria-label": "Back to briefing",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
						className: "size-5",
						strokeWidth: 1.75
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs font-medium uppercase tracking-[0.16em] text-muted",
						children: "Technology for Teaching and Learning 1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-display text-base font-medium",
						children: "Classroom Compass"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Sections",
				className: "mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-3 sm:px-6",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						if (item.id === "lab") {
							setStep(0);
							setPicked(null);
						}
						go(item.id);
					},
					className: cn("h-9 shrink-0 rounded-full px-3 text-sm transition-colors duration-150", screen === item.id || screen === "result" && item.id === "lab" ? "bg-accent text-accent-fg" : "text-muted hover:bg-surface-2 hover:text-fg"),
					children: item.label
				}, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12",
			children: [
				screen === "cover" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, { onStart: () => go("safety") }),
				screen === "safety" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyChapter, { onNext: () => go("materials") }),
				screen === "materials" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialsChapter, {
					onBack: () => go("safety"),
					onNext: () => go("tools")
				}),
				screen === "tools" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsChapter, {
					onBack: () => go("materials"),
					onNext: () => {
						setStep(0);
						setPicked(null);
						setScore(0);
						go("lab");
					}
				}),
				screen === "lab" && scenario && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lab, {
					step,
					picked,
					chosen,
					onPick: pickChoice,
					onNext: nextScenario,
					onBack: () => go("tools")
				}),
				screen === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
					score,
					onRetry: restartLab,
					onHome: () => go("cover")
				})
			]
		})]
	});
}
function Cover({ onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.18em] text-accent",
				children: "Interactive briefing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-xl text-4xl font-medium sm:text-5xl",
				children: "Prepare lessons that are safe, usable, and worth the class time."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-lg text-base text-muted sm:text-lg",
				children: "Three stations from TTL 1: manage ICT risk, develop conventional materials, and select digital tools with a clear purpose. Then run five classroom decisions in the Lesson Lab."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					onClick: onStart,
					children: ["Begin briefing", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-3 sm:grid-cols-3",
				children: [
					{
						icon: Shield,
						label: "ICT safety"
					},
					{
						icon: Shapes,
						label: "Non-digital materials"
					},
					{
						icon: Laptop,
						label: "Tool selection"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
						className: "size-4 text-accent",
						strokeWidth: 1.75
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: item.label
					})]
				}, item.label))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
			className: "overflow-hidden rounded-xl border border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero.jpg",
				alt: "Teacher preparing a lesson with a laptop and handmade charts",
				className: "aspect-video h-full w-full object-cover"
			})
		})]
	});
}
function ChapterFrame({ id, children, onBack, onNext, nextLabel }) {
	const ch = CHAPTER[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
			className: "overflow-hidden rounded-xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: ch.image,
				alt: ch.alt,
				className: "aspect-video w-full object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-xs font-medium uppercase tracking-[0.18em] text-accent",
			children: ch.kicker
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl font-medium sm:text-4xl",
			children: ch.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: ch.lead
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex flex-wrap gap-3",
			children: [onBack && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				onClick: onBack,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Previous"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onNext,
				children: [nextLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})]
		})
	] });
}
function SafetyChapter({ onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChapterFrame, {
		id: "safety",
		onNext,
		nextLabel: "Next: materials",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-medium",
				children: "Risks to watch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: SAFETY_RISKS.map((risk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-medium",
						children: risk.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: risk.body
					})]
				}, risk.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-10 font-display text-xl font-medium",
				children: "What teachers do"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: SAFETY_ACTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 rounded-md bg-surface-2/70 px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-accent" }), item]
				}, item))
			})
		]
	});
}
function MaterialsChapter({ onBack, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChapterFrame, {
		id: "materials",
		onBack,
		onNext,
		nextLabel: "Next: ICT tools",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-medium",
				children: "Materials that still work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: MATERIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-medium",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.use
					})]
				}, item.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-10 font-display text-xl font-medium",
				children: "Rules for making them"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: DESIGN_RULES.map((rule, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-1 font-medium",
							children: rule.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: rule.body
						})
					]
				}, rule.title))
			})
		]
	});
}
function ToolsChapter({ onBack, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChapterFrame, {
		id: "tools",
		onBack,
		onNext,
		nextLabel: "Enter Lesson Lab",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-medium",
				children: "Check these before you adopt a tool"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: SELECTION_FACTORS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-medium",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.body
					})]
				}, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-sm text-muted",
				children: "Models such as SECTIONS and SAMR help, but the sequence stays the same: write the objective, know the learners, then choose. If a chart or a demonstration does the job with less risk, use it."
			})
		]
	});
}
function Lab({ step, picked, chosen, onPick, onNext, onBack }) {
	const scenario = SCENARIOS[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
			className: "overflow-hidden rounded-xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/lab.jpg",
				alt: "Lesson planning materials arranged on a wooden table",
				className: "aspect-video max-h-72 w-full object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 text-xs font-medium uppercase tracking-[0.18em] text-accent",
			children: [
				"Lesson lab  /  ",
				step + 1,
				" of ",
				SCENARIOS.length
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl font-medium",
			children: scenario.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: scenario.prompt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-accent transition-[width] duration-300 ease-out",
				style: { width: `${(step + (picked ? 1 : 0)) / SCENARIOS.length * 100}%` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3",
			children: scenario.choices.map((choice) => {
				const selected = picked === choice.id;
				const reveal = Boolean(picked);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onPick(choice.id),
					disabled: Boolean(picked),
					className: cn("rounded-lg border px-4 py-4 text-left text-sm transition-colors duration-150 sm:text-base", !reveal && "border-border bg-surface hover:border-accent", reveal && selected && choice.correct && "border-accent bg-surface", reveal && selected && !choice.correct && "border-warn bg-surface", reveal && !selected && "border-border bg-surface opacity-60"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px]", selected ? "border-accent bg-accent text-accent-fg" : "border-border"),
							children: choice.id.toUpperCase()
						}), choice.text]
					})
				}, choice.id);
			})
		}),
		chosen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 rounded-lg border border-border bg-surface p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: chosen.correct ? "Sound decision." : "Weaker choice."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: chosen.note
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				onClick: onBack,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Briefing"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onNext,
				disabled: !picked,
				children: [step === SCENARIOS.length - 1 ? "See results" : "Next case", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})]
		})
	] });
}
function Result({ score, onRetry, onHome }) {
	const total = SCENARIOS.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
				className: "mx-auto size-8 text-accent",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-medium sm:text-4xl",
				children: "Lab complete"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [
					"You made the stronger call in",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums font-medium text-fg",
						children: [
							score,
							" of ",
							total
						]
					}),
					" ",
					"classroom cases."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl border border-border bg-surface p-6 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-medium",
					children: "Carry this forward"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Protect learners before you open a tool." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Keep conventional materials ready when power, access, or risk says so." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Select ICT only when it serves the objective better than a simpler option." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onRetry,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Run the lab again"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: onHome,
					children: "Return to briefing"
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompassApp, {});
}
//#endregion
export { Home as component };
