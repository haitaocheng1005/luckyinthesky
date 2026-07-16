import type { ReactElement } from 'react';

type DoodleKind =
  | 'coffee'
  | 'croissant'
  | 'bagel'
  | 'matcha'
  | 'teapot'
  | 'cake'
  | 'sandwich'
  | 'pancakes';

const doodles: ReadonlyArray<{ id: string; kind: DoodleKind }> = [
  { id: 'coffee-left', kind: 'coffee' },
  { id: 'croissant-left', kind: 'croissant' },
  { id: 'bagel-centre', kind: 'bagel' },
  { id: 'matcha-centre', kind: 'matcha' },
  { id: 'teapot-right', kind: 'teapot' },
  { id: 'cake-right', kind: 'cake' },
  { id: 'sandwich-right', kind: 'sandwich' },
  { id: 'pancakes-centre', kind: 'pancakes' },
];

function DoodleIcon({ kind }: { kind: DoodleKind }): ReactElement {
  if (kind === 'coffee') {
    return (
      <svg viewBox="0 0 64 64" focusable="false">
        <path className="doodle-fill-cream" d="M13 24h34v21a9 9 0 0 1-9 9H22a9 9 0 0 1-9-9V24Z" />
        <path d="M47 29h4a8 8 0 0 1 0 16h-4" />
        <path d="M23 18c-5-5 5-7 0-12M34 18c-5-5 5-7 0-12" />
        <path className="doodle-accent" d="M18 29c8 4 16 4 24 0" />
      </svg>
    );
  }

  if (kind === 'croissant') {
    return (
      <svg viewBox="0 0 64 64" focusable="false">
        <path
          className="doodle-fill-yellow"
          d="M9 38c3-14 12-23 23-23s20 9 23 23c-4 8-12 12-23 12S13 46 9 38Z"
        />
        <path d="M20 20c4 7 5 16 2 25M32 15c-2 11-2 23 0 35M44 20c-4 7-5 16-2 25" />
        <path d="M10 37c7 1 12 5 15 10M54 37c-7 1-12 5-15 10" />
      </svg>
    );
  }

  if (kind === 'matcha') {
    return (
      <svg viewBox="0 0 64 64" focusable="false">
        <path className="doodle-fill-cream" d="M16 18h32l-4 37H20l-4-37Z" />
        <path className="doodle-fill-green" d="m19 33 2 19h22l2-19c-8 4-18-4-26 0Z" />
        <path d="m40 22 7-16M45 8l6 3" />
        <circle className="doodle-accent" cx="27" cy="40" r="2" />
        <circle className="doodle-accent" cx="37" cy="47" r="2" />
        <path d="M14 18h36" />
      </svg>
    );
  }

  if (kind === 'bagel') {
    return (
      <svg viewBox="0 0 64 64" focusable="false">
        <ellipse className="doodle-fill-yellow" cx="32" cy="32" rx="24" ry="18" />
        <ellipse className="doodle-fill-cream" cx="32" cy="32" rx="9" ry="7" />
        <path className="doodle-fill-green" d="M11 36c9 5 33 7 43-1-7 12-35 17-43 1Z" />
        <path d="M19 22l3 2M30 18l2 3M43 21l-3 2M49 29l-3 1" />
        <circle className="doodle-accent" cx="18" cy="31" r="1.8" />
      </svg>
    );
  }

  if (kind === 'teapot') {
    return (
      <svg viewBox="0 0 64 64" focusable="false">
        <path className="doodle-fill-pink" d="M18 27h29v12c0 9-6 15-15 15s-14-6-14-15V27Z" />
        <path className="doodle-fill-cream" d="M23 27c1-7 17-7 19 0H23Z" />
        <path d="M27 19h11M32 19v-5" />
        <path d="M18 31 7 38l11 3M47 31h3a9 9 0 0 1 0 18h-5" />
        <path d="M25 11c-4-4 4-6 0-10M37 11c-4-4 4-6 0-10" />
        <circle className="doodle-accent" cx="33" cy="39" r="3" />
      </svg>
    );
  }

  if (kind === 'cake') {
    return (
      <svg viewBox="0 0 64 64" focusable="false">
        <path className="doodle-fill-pink" d="M18 31h28l-4 23H22l-4-23Z" />
        <path
          className="doodle-fill-cream"
          d="M18 31c-2-8 4-12 10-10 1-9 15-9 15 1 7 0 10 6 6 11-8 3-23 3-31-2Z"
        />
        <path d="M25 37v12M32 37v14M39 37v12" />
        <circle className="doodle-accent" cx="34" cy="15" r="3" />
      </svg>
    );
  }

  if (kind === 'sandwich') {
    return (
      <svg viewBox="0 0 64 64" focusable="false">
        <path className="doodle-fill-yellow" d="m10 27 22-15 22 15-22 8-22-8Z" />
        <path className="doodle-fill-green" d="m11 33 21 8 21-8-21-6-21 6Z" />
        <path className="doodle-fill-pink" d="m11 39 21 10 21-10-21-7-21 7Z" />
        <path className="doodle-fill-cream" d="m10 45 22 9 22-9-22-9-22 9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" focusable="false">
      <ellipse className="doodle-fill-yellow" cx="32" cy="44" rx="22" ry="8" />
      <ellipse className="doodle-fill-cream" cx="32" cy="36" rx="22" ry="8" />
      <ellipse className="doodle-fill-pink" cx="32" cy="28" rx="22" ry="8" />
      <path d="M10 28v16M54 28v16" />
      <path className="doodle-accent" d="M31 17c5-7 12-3 11 3-1 5-7 8-11 10-4-3-10-6-10-11 1-6 8-8 10-2Z" />
    </svg>
  );
}

export function FallingCafeDoodles(): ReactElement {
  return (
    <div className="falling-cafe-doodles" aria-hidden="true">
      {doodles.map((doodle) => (
        <span className="falling-doodle" key={doodle.id}>
          <DoodleIcon kind={doodle.kind} />
        </span>
      ))}
    </div>
  );
}
