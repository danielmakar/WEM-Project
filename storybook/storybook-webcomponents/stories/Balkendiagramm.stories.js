import { html } from 'lit-html';

import './balkediagramm_component';

export default {
  title: 'WEM/Balkendiagramm',
};

//👇 We create a “template” of how args map to rendering
// const Template = () =>
//   html`<bezier-animation></bezier-animation>`;

//👇 Each story then reuses that template
export const Basic = () => html`<balken-diagramm></balken-diagramm>`;