export type Screen =
  | "cover"
  | "safety"
  | "materials"
  | "tools"
  | "lab"
  | "result";

export const NAV: { id: Screen; label: string }[] = [
  { id: "cover", label: "Briefing" },
  { id: "safety", label: "Safety" },
  { id: "materials", label: "Materials" },
  { id: "tools", label: "ICT tools" },
  { id: "lab", label: "Lesson lab" },
];

export const SAFETY_RISKS = [
  {
    title: "Inappropriate content",
    body: "Students may reach violent, sexual, or extremist material without filters and supervision.",
  },
  {
    title: "Cyberbullying and contact",
    body: "Messages, images, and group chats can be used to harass, groom, or expose private data.",
  },
  {
    title: "Privacy and data",
    body: "Many classroom apps share student information with third parties. The Data Privacy Act still applies.",
  },
  {
    title: "Health and posture",
    body: "Long sessions cause eye strain, poor posture, and fatigue. Breaks and workstation setup matter.",
  },
  {
    title: "Malware and phishing",
    body: "Unsafe downloads, USBs, and fake login pages can damage devices and steal accounts.",
  },
  {
    title: "Physical hazards",
    body: "Loose cables, overloaded outlets, and faulty equipment create trip, shock, and fire risks.",
  },
];

export const SAFETY_ACTIONS = [
  "Use filtering, antivirus, and an acceptable-use policy.",
  "Supervise sessions and teach students how to report harm.",
  "Keep personal data off public posts. Get consent before recording.",
  "Set chair, screen, and keyboard height. Require short breaks.",
  "Orient parents and students on the school's internet code of conduct.",
];

export const MATERIALS = [
  {
    name: "Writing boards",
    use: "Live demonstration and group notes. Keep writing large and uncluttered.",
  },
  {
    name: "Diorama",
    use: "A small 3D scene that makes a period, ecosystem, or process concrete.",
  },
  {
    name: "Nature table",
    use: "Seasonal objects students can handle. Good for observation lessons.",
  },
  {
    name: "Flip charts and zigzag boards",
    use: "Sequence a process step by step without needing a projector.",
  },
  {
    name: "Wall and rope displays",
    use: "Keep key ideas visible after the lesson so students can revisit them.",
  },
  {
    name: "Realia and models",
    use: "Real objects or mock-ups when the actual thing is too large, rare, or unsafe.",
  },
];

export const DESIGN_RULES = [
  {
    title: "Unity",
    body: "One idea per visual. Put a clear headline at the top.",
  },
  {
    title: "Simplicity",
    body: "Cut extra words, numbers, and decoration. Students should recall the idea at a glance.",
  },
  {
    title: "Legibility",
    body: "High contrast, large lettering, and a viewing distance that matches the room.",
  },
  {
    title: "Alignment to objectives",
    body: "Build from the lesson goal, then from materials you already have. Adapt, do not copy protected designs.",
  },
];

export const SELECTION_FACTORS = [
  {
    title: "Learning goal",
    body: "Start with what students must know or do. The tool is a means, not the lesson.",
  },
  {
    title: "Access",
    body: "Check devices, bandwidth, licenses, and whether every learner can use it.",
  },
  {
    title: "Ease",
    body: "Prefer a short learning curve for both teacher and class. Support must exist.",
  },
  {
    title: "Safety",
    body: "Review privacy, age-appropriateness, ads, and data sharing before you adopt it.",
  },
  {
    title: "Cost and time",
    body: "Include licenses, training, and class minutes. A free tool is not free if it wastes the period.",
  },
  {
    title: "Fit",
    body: "Match pedagogy, content, and context. A popular app is not automatically the right app.",
  },
];

export type Choice = {
  id: string;
  text: string;
  correct: boolean;
  note: string;
};

export type Scenario = {
  id: string;
  title: string;
  prompt: string;
  choices: Choice[];
};

export const SCENARIOS: Scenario[] = [
  {
    id: "s1",
    title: "Computer lab, first period",
    prompt:
      "Grade 6 students will search for images of local plants. The school has filtering software, but several students finish early and open a game site.",
    choices: [
      {
        id: "a",
        text: "Let them play. They finished the task.",
        correct: false,
        note: "Unsupervised extra browsing is how students reach unsafe sites and lose the rest of the period.",
      },
      {
        id: "b",
        text: "Redirect them to a prepared extension task and keep circulating.",
        correct: true,
        note: "Supervision plus a next task keeps the session on purpose and reduces risk.",
      },
      {
        id: "c",
        text: "Shut down all computers for the rest of the week.",
        correct: false,
        note: "Removing ICT entirely does not teach safe use. It only avoids the problem.",
      },
    ],
  },
  {
    id: "s2",
    title: "No projector, no signal",
    prompt:
      "You planned a video on the water cycle, but the internet is down. You have manila paper, markers, and a basin of water.",
    choices: [
      {
        id: "a",
        text: "Cancel the lesson and wait for connectivity.",
        correct: false,
        note: "The objective can still be taught. Waiting trains the class to depend on a device.",
      },
      {
        id: "b",
        text: "Lecture from memory with no visual support.",
        correct: false,
        note: "A lecture without visuals is weaker than a simple demonstration you can still run.",
      },
      {
        id: "c",
        text: "Build a labeled chart and demonstrate evaporation with the basin.",
        correct: true,
        note: "Conventional materials keep the objective intact when digital tools fail.",
      },
    ],
  },
  {
    id: "s3",
    title: "Choosing an app",
    prompt:
      "A colleague recommends a flashy quiz app. It is free, full of ads, and asks students to create accounts with their emails.",
    choices: [
      {
        id: "a",
        text: "Adopt it. Students like games, and the price is zero.",
        correct: false,
        note: "Ads and email accounts create privacy and distraction costs that are not free.",
      },
      {
        id: "b",
        text: "Check privacy, ads, and whether it serves the objective better than paper quizzes.",
        correct: true,
        note: "Selection starts with the goal, then safety, access, and real learning value.",
      },
      {
        id: "c",
        text: "Reject every digital quiz forever.",
        correct: false,
        note: "Some digital tools are sound. The task is to select, not to refuse all ICT.",
      },
    ],
  },
  {
    id: "s4",
    title: "Recording a class",
    prompt:
      "You want to record an online recitation so absentees can watch later. Several learners are under 18.",
    choices: [
      {
        id: "a",
        text: "Record and post the full session on a public Facebook group.",
        correct: false,
        note: "Public posting of minors without a legitimate, controlled purpose violates privacy practice.",
      },
      {
        id: "b",
        text: "Skip recording. Privacy makes any capture illegal.",
        correct: false,
        note: "Recording can be done with consent, a school account, and a limited audience.",
      },
      {
        id: "c",
        text: "Get guardian consent, use the school platform, and limit who can view it.",
        correct: true,
        note: "Consent, purpose, and controlled access match Data Privacy guidance for schools.",
      },
    ],
  },
  {
    id: "s5",
    title: "Display that nobody can read",
    prompt:
      "A student group made a zigzag board packed with tiny text, clip art, and three topics at once.",
    choices: [
      {
        id: "a",
        text: "Display it as-is. Student work should not be edited.",
        correct: false,
        note: "The material fails unity, simplicity, and legibility. It will not teach.",
      },
      {
        id: "b",
        text: "Guide a revision: one idea, a headline, larger lettering, fewer graphics.",
        correct: true,
        note: "Design rules are part of developing conventional materials, including student-made ones.",
      },
      {
        id: "c",
        text: "Replace it with a slide deck even though there is no projector.",
        correct: false,
        note: "The medium is still usable. The problem is design, not the absence of ICT.",
      },
    ],
  },
];
