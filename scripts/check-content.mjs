// Content guard for the built site: run after `npm run build`.
// Fails if the site mentions anything that must never appear, or if the project list drifted.
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const text = html.toLowerCase();
const failures = [];

// Excluded project: must not appear in any form (names base64-encoded so the repo never spells them out).
const banned = ['YmVuaXM=', 'YmVuaXMtYm90', 'YmVuaXNib3Q='].map((b) => Buffer.from(b, 'base64').toString());
for (const term of banned) {
  if (text.includes(term)) failures.push('an excluded project name is present');
}

// Exactly these projects, in this order.
const expected = ['Skrong Lifting', 'ToneDeaf', 'Multi-agent development workflow'];
const found = [...html.matchAll(/<h3[^>]*>\s*(?:<a[^>]*>)?([^<]+?)\s*(?:<\/a>)?\s*<\/h3>/g)]
  .map((m) => m[1].trim())
  .filter((t) => !t.includes('·')); // experience headings use "role · org"
if (JSON.stringify(found) !== JSON.stringify(expected)) {
  failures.push(`projects were ${JSON.stringify(found)}, expected ${JSON.stringify(expected)}`);
}

for (const id of ['about', 'stack', 'projects', 'experience', 'contact']) {
  if (!html.includes(`id="${id}"`)) failures.push(`missing section #${id}`);
}

if (!html.includes('Zach Clark')) failures.push('name missing');
if (/zachary/i.test(html)) failures.push('old name "Zachary" still on the page');

// Confirmed content: these real values must be on the page.
const required = [
  'Backend Developer',
  'https://github.com/z4chclark',
  'https://www.linkedin.com/in/zclark9',
  'Software Engineering Intern',
  'Aril Inc.',
  'Foreign English Teacher',
  'Xin Lu Elementary School',
  'Santa Clara University',
  'B.S. Computer Science',
  'Outside code: lifting, learning Mandarin, watching Warriors basketball.',
];
for (const value of required) {
  if (!html.includes(value)) failures.push(`missing confirmed content: ${value}`);
}

if (failures.length) {
  console.error('Content check failed:\n- ' + failures.join('\n- '));
  process.exit(1);
}
console.log('Content check passed: 5 sections, 3 projects in order, no excluded terms.');
