// Projects, in display order. Adding a project = adding one object here.

export interface Project {
  name: string;
  status: 'Shipped' | 'In progress' | 'In daily use';
  oneLiner: string;
  proof: string;
  architecture: string;
  stack: string[];
  href?: string; // optional link (repo, TestFlight, demo)
}

export const projects: Project[] = [
  {
    name: 'Skrong Lifting',
    status: 'Shipped',
    oneLiner:
      'iPhone workout tracker: set logging, exercise library, rest timer and estimated one-rep max.',
    proof:
      'Designed, built and shipped v1.0 on 2026-10-17 to real testers through TestFlight; scope was cut to ship, and tester feedback drives the next versions.',
    architecture: 'SwiftUI app → TestFlight build → real testers → feedback → next release',
    stack: ['Swift', 'SwiftUI', 'TestFlight'],
  },
  {
    name: 'ToneDeaf',
    status: 'In progress',
    oneLiner:
      'Mandarin sentence-shadowing trainer: hear a native sentence, repeat it, get one score and the single mistake that matters most.',
    proof:
      'Blends Azure Speech pronunciation assessment 50/50 with a custom F0 pitch-contour tone judge that scores each syllable’s pitch shape from 0 to 1; v1 data is the AISHELL-3 corpus.',
    architecture:
      'Recording → FastAPI → Azure pronunciation assessment + F0 tone judge → blended score + highlighted mistake',
    stack: ['Python', 'FastAPI', 'Azure Speech API', 'AISHELL-3'],
  },
  {
    name: 'Multi-agent development workflow',
    status: 'In daily use',
    oneLiner:
      'A two-agent system I designed and operate: a personal agent and a coding agent collaborate across projects through a file-based Markdown protocol.',
    proof:
      'Runs my real multi-project development day to day: structured inboxes and status files, ID-routed questions and decisions, and least-privilege rules (the orchestrator may only append to inboxes; it never approves pushes, spending or deletions).',
    architecture:
      'Personal agent → Markdown inbox → coding agent → status file → back to me for anything that needs a human yes',
    stack: ['Markdown protocol', 'Shell hooks', 'Git'],
  },
];
