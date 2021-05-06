import { css } from '@linaria/core';
import { cell } from './cell';

export const row = css`
  display: contents;
  background-color: var(--background-color);

  &:hover {
    background-color: var(--row-hover-background-color);
  }

  &[aria-selected="true"] {
    background-color: var(--row-selected-background-color);

    &:hover {
      background-color: var(--row-selected-hover-background-color);
    }
  }
`;

export const rowClassname = `rdg-row ${row}`;

const summaryRow = css`
  z-index: 3;
  > .${cell} {
    position: sticky;
    border-top: 2px solid var(--summary-border-color);
  }
`;

export const summaryRowClassname = `rdg-summary-row ${summaryRow}`;