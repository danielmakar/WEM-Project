import { html } from 'lit-html';

import './bezier_component';

export default {
  title: 'WEM/Bezier',
};

//👇 We create a “template” of how args map to rendering
// const Template = () =>
//   html`<bezier-animation></bezier-animation>`;

//👇 Each story then reuses that template
export const Basic = () => html`<bezier-animation></bezier-animation>`;