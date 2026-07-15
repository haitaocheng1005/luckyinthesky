import type { ReactElement } from 'react';

export function LogoMark(): ReactElement {
  return (
    <span className="logo-mark">
      <svg className="logo-badge" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <circle className="logo-badge-disc" cx="32" cy="32" r="29" />
        <path className="logo-badge-line" d="M10 43h44M13 42V31h9v11m3 0V24h7v18m-3-18v-7m-3 4h6m4 21V33h8v9m3 0V28h6v14" />
        <circle className="logo-badge-clock" cx="28.5" cy="29" r="2.4" />
        <path className="logo-badge-wave" d="M12 47c7-3 12 3 19 0s12 3 21 0M14 51c6-2 11 2 17 0s11 2 19 0" />
        <path className="logo-badge-star" d="m48 13 1.7 4.6 4.8-1.5-3 4 4 2.8-5-.5-1.3 4.8-1.4-4.8-5 .5 4-2.8-3-4 4.8 1.5L48 13Z" />
      </svg>
      <span className="logo-words">
        <strong>Lucy</strong>
        <small>in the sky</small>
      </span>
    </span>
  );
}
