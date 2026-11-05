// Stack, grouped by area. Set `inProgress: true` on anything still being learned.

export interface StackItem {
  name: string;
  inProgress?: boolean;
}

export interface StackGroup {
  area: string;
  items: StackItem[];
}

export const stack: StackGroup[] = [
  {
    area: 'Backend',
    items: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Pydantic' },
      { name: 'REST APIs' },
      { name: 'C++' },
    ],
  },
  {
    area: 'Infra & tools',
    items: [
      { name: 'Git / GitHub' },
      { name: 'SSH / Tailscale' },
      { name: 'Oracle Cloud' },
      { name: 'Docker', inProgress: true },
      { name: 'PostgreSQL', inProgress: true },
    ],
  },
  {
    area: 'Shipped with',
    items: [{ name: 'Swift / SwiftUI' }, { name: 'TestFlight' }, { name: 'Azure Speech API' }],
  },
];
