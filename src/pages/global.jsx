import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--single-line-body-base: Inter;

/* font sizes */
--font-size-xl: 1.25rem;
--single-line-body-base-size: 1rem;
--font-size-xs: 0.75rem;

/* Colors */
--color-white: #fff;
--color-black: #000;
--color-darkslateblue: #0f5bb4;
--border-neutral-secondary: #767676;
--text-default-default: #1e1e1e;
--color-gray-100: rgba(40, 40, 40, 0.31);
--color-gray-200: rgba(0, 0, 0, 0.1);
--background-neutral-tertiary: #e3e3e3;
--color-gainsboro-100: rgba(217, 217, 217, 0.5);
--color-dodgerblue: #2788f9;

/* Spacing */
--space-300: 0.75rem;
--corner-extra-small: 0.25rem;
--number15: 0.937rem;
--space-200: 0.5rem;
--radius-200: 0.5rem;

/* Gaps */
--gap-7xs: 0.375rem;

/* Paddings */
--padding-xs: 0.75rem;
--padding-11xs: 0.125rem;
--padding-9xs: 0.25rem;

/* Border radiuses */
--br-5xs: 8px;
--br-mini: 15px;
--br-11xs: 2px;
--br-9xs: 4px;

}
`;

export default GlobalStyle;
