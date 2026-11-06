// Site-wide constants. Edit here; every section reads from this file.

export const name = 'Zach Clark';

export const headline = 'Backend Developer';

export const location = 'Taipei, Taiwan';

export const tagline =
  'I design backend systems, wire up APIs and services, and ship real projects end to end.';

// About: 3-4 lines, no filler.
export const about = [
  'Software degree, backend focus. I build and ship real projects: an iPhone app in the hands of testers, a pronunciation-scoring API, and the multi-agent workflow I develop with every day.',
  'My part is the design and the judgement: I design the systems, integrate the APIs and services, direct and audit an AI coding workflow, and review, test and ship what it produces.',
  'Based in Taipei.',
  'Outside code: lifting in Taipei, learning Mandarin, watching Warriors basketball.',
];

// Links. Every `todo: true` entry is a placeholder: the real URL has not been provided yet.
export interface Link {
  label: string;
  href: string;
  todo?: boolean;
}

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/z4chclark' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zclark9' },
  { label: 'Resume (PDF)', href: '#', todo: true }, // TODO: put the PDF in public/ and link it, e.g. '/resume.pdf'
  { label: 'Email', href: '#', todo: true }, // TODO: 'mailto:<address>'
];
