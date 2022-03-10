import { html } from 'lit-html';

import './einkaufsliste_component';

export default {
  title: 'WEM/Einkaufsliste',
};

//👇 We create a “template” of how args map to rendering
// const Template = () =>
//   html`<bezier-animation></bezier-animation>`;

//👇 Each story then reuses that template
export const Basic = () => html`<einkaufs-liste></einkaufs-liste>`;