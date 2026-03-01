import {
  Cpu,
  Presentation,
  Code,
  BrainCircuit,
  Mic,
  Palette,
  Crown,
  Smile,
  Gamepad2,
  Camera,
} from "lucide-react";

// -------------------- TECHNICAL EVENTS --------------------
export const technicalEvents = [
  {
    title: "Project Presentation",
    description:
      "Participants will present their innovative hardware or software projects before a panel of judges. The event evaluates creativity, technical knowledge, practical implementation, and presentation skills.",
    details:
      "Team Size: 1–3 members | Time Limit: 8–10 minutes presentation + 2–3 minutes Q&A | Domain: Open to all ECE / technical domains",
    icon: Presentation,
    venue: "Seminar Hall",
    time: "10:00 AM - 11:00 AM",
    coordinators: [
      { name: "Sidharthan R.C", phone: "+91 7530076406" },
      { name: "David Kumar.S", phone: "+91 8122640371" },
      { name: "Shenbaga Divya.S" },
      { name: "Maha.S" },
    ],
    rules: [
      "Team of 1–3 members",
      "Working model or PPT required",
      "Time limit strictly followed",
      "Judges decision final",
    ],
  },
  {
    title: "Bug Blast",
    description:
      "Participants must identify and correct errors in a given faulty electronic circuit within a limited time.",
    details:
      "Team Size: 1–2 members | Troubleshooting based challenge",
    icon: Code,
    venue: "Micro Controller LAB",
    time: "11:00 AM - 11:30 AM",
    coordinators: [
      { name: "Vairamuthu Pandi.J", phone: "+91 9655695497" },
      { name: "Karthick", phone: "+91 8124167507" },
      { name: "Alagu Lakshmi" },
      { name: "Anitha.S" },
    ],
    rules: [
      "Individual or team of 2",
      "Components provided",
      "No external devices allowed",
      "Time-based evaluation",
    ],
  },
  {
    title: "CodeCircuit",
    description:
      "Embedded simulation and microcontroller based challenge.",
    details:
      "Simulation-based Arduino & ESP projects using Wokwi platform.",
    icon: Cpu,
    venue: "DSP LAB",
    time: "11:30 AM - 12:00 PM",
    coordinators: [
      { name: "Suresh Kumar.P", phone: "+91 9344243833" },
      { name: "Mohammad Asan", phone: "+91 6381416393" },
      { name: "Raja Lakshmi.M" },
      { name: "Kavitha.K" },
    ],
    rules: [
      "Team of 3–4 members",
      "Simulation based challenge",
      "No external help",
      "Time limit applies",
    ],
  },
  {
    title: "Techno Quest",
    description:
      "Electronics & technology based competitive quiz.",
    details:
      "Buzzer-based quiz covering electronics fundamentals and tech trends.",
    icon: BrainCircuit,
    venue: "2nd Year Class",
    time: "12:00 PM - 12:30 PM",
    coordinators: [
      { name: "Vignesh Kumar.K", phone: "+91 7418612830" },
      { name: "Hemalatha.N", phone: "+91 8608537624" },
      { name: "Kaleeswari.M" },
      { name: "Mathesh Kumar" },
    ],
    rules: [
      "Team of 2 members",
      "Equipment provided",
      "3 progressive rounds",
      "Time-based scoring",
    ],
  },
];

// -------------------- NON-TECHNICAL EVENTS --------------------
export const nonTechnicalEvents = [
  {
    title: "Connection",
    description: "Present your ideas on merging concepts.",
    details:
      "4 clues will be displayed | Identify the common link | Images will be shown",
    icon: Mic,
    venue: "2nd Year Class",
    time: "1:30 PM - 2:00 PM",
    coordinators: [
      { name: "Ranjith.S", phone: "+91 9488331959" },
      { name: "Solai Raj", phone: "+91 7548890466" },
      { name: "Janani.P" },
      { name: "Muthu Priya" },
    ],
    rules: [
      "Individual or team of 2",
      "Quick 30-second challenge",
      "Most correct answers win",
    ],
  },
  {
    title: "Echo the Line",
    description: "Popular Tamil / English songs challenge.",
    details:
      "Song will stop suddenly | Participants must continue the next line",
    icon: Palette,
    venue: "3rd Year Class",
    time: "2:00 PM - 2:30 PM",
    coordinators: [
      { name: "Vishnu Priyan.K", phone: "+91 9360984207" },
      { name: "Yuvaraj", phone: "+91 8270996515" },
      { name: "Krishna Priya.K" },
      { name: "Maha Lakshmi" },
    ],
    rules: [
      "Individual or team of 2",
      "Theme revealed on spot",
      "Judges decision final",
    ],
  },
  {
    title: "Chess",
    description: "Strategic thinking battle.",
    details: "Classic chess knockout tournament.",
    icon: Crown,
    venue: "3rd Year Class",
    time: "2:30 PM - 3:00 PM",
    coordinators: [
      { name: "Muthuganesh.S", phone: "+91 9361020254" },
      { name: "Ashok.M", phone: "+91 8610630387" },
      { name: "Muthu Lakshmi" },
      { name: "Anusri.M" },
    ],
    rules: [
      "Individual participation",
      "Knockout format",
      "Time controlled",
    ],
  },
  {
    title: "Truth vs Trick",
    description: "Fun interactive team game.",
    details: "Identify the lie among two truths.",
    icon: Smile,
    venue: "3rd Year Class",
    time: "3:30 PM - 4:00 PM",
    coordinators: [
      { name: "Harihara Sudhan.A", phone: "+91 7904281768" },
      { name: "Muniya Samy.P", phone: "+91 8220792798" },
      { name: "Madhumathi" },
      { name: "Gayathri.B" },
    ],
    rules: [
      "Team of 2 members",
      "All members participate",
      "Time-based elimination",
    ],
  },
];

// -------------------- ONLINE EVENTS --------------------
export const onlineEvents = [
  {
    title: "Photography",
    description: "Capture your creativity through the lens.",
    details:
      "Submit original photographs based on the given theme. Judged on creativity, clarity, and storytelling.",
    icon: Camera,
    venue: "Online Submission",
    time: "Submit before deadline",
    coordinators: [
      { name: "P.Muniyasamy", phone: "+91 8220792798" },
      { name: "Sidharthan.R.C", phone: "+91 7530076406" },
    ],
    rules: [
      "Individual participation",
      "Original photo only",
      "Basic editing allowed",
      "Theme will be announced",
    ],
  },
  {
    title: "Codes without Coding",
    description:
      "Decode situations, understand patterns, and make smart decisions without writing a single line of code.",
    details:
      "Crack hidden life codes through smart thinking and pattern spotting — no typing, just brain power.",
    icon: Code,
    venue: "3rd Year Class",
    time: "Afternoon",
    coordinators: [
      { name: "Deepika.R", phone: "+91 8220792798" },
      { name: "Mathusri.B", phone: "+91 7530076406" },
      { name: "Irulajothi" },
      { name: "Archana.M" },
    ],
    rules: [
      "Individual participation only",
      "No electronic gadgets allowed",
      "Time limit must be strictly followed",
      "Participants should not exceed given instructions",
    ],
  },
  {
    title: "Free Fire",
    description: "Online battle royale gaming tournament.",
    details:
      "Teams compete in custom Free Fire rooms. Top surviving teams qualify for final round.",
    icon: Gamepad2,
    venue: "Online Custom Room",
    time: "3:00 PM - 5:00 PM",
    coordinators: [
      { name: "Vishnu Priyan.K", phone: "+91 8610630387" },
      { name: "Muthuganesh.S", phone: "+91 9361020254" },
      { name: "Ashok.M", phone: "+91 8610630387" },
    ],
    rules: [
      "Squad of 4 players",
      "No hacking or cheats",
      "Custom room ID shared before match",
      "Organizers decision final",
    ],
  },
];