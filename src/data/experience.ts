// Experience timeline. PLACEHOLDERS: real entries come from the final resume.
// Do not fill in employers or dates until they are confirmed.

export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  summary: string;
  todo?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    period: 'TODO: dates',
    role: 'TODO: role',
    org: 'TODO: organisation',
    summary: 'TODO: one line from the final resume.',
    todo: true,
  },
  {
    period: 'TODO: dates',
    role: 'TODO: degree',
    org: 'TODO: university',
    summary: 'TODO: software degree, one line.',
    todo: true,
  },
];
