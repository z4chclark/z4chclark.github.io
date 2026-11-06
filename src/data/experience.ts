// Experience and education, newest first.

export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  summary?: string;
  todo?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    period: 'Aug 2025 – Jul 2026',
    role: 'Foreign English Teacher',
    org: 'Xin Lu Elementary School, Taoyuan, Taiwan',
    summary: 'Delivered structured English instruction to 100+ students across multiple grade levels.',
  },
  {
    period: 'Jun 2024',
    role: 'B.S. Computer Science',
    org: 'Santa Clara University, Santa Clara, CA',
  },
  {
    period: 'Jul 2023 – Sep 2023',
    role: 'Software Engineering Intern',
    org: 'Aril Inc., Los Gatos, CA',
    summary:
      'Built a C++ netlist parser that automated extraction of electronic design data, with validation and error handling for malformed inputs.',
  },
];
