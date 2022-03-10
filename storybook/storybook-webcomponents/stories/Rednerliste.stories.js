import { html } from 'lit-html';

import './rednerliste_component';

export default {
  title: 'WEM/Rednerliste',
};

//👇 We create a “template” of how args map to rendering
// const Template = () =>
//   html`<bezier-animation></bezier-animation>`;

//👇 Each story then reuses that template
export const Basic = () => html`<redner-liste></redner-liste>`;