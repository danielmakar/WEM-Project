import { html } from 'lit-html';

import './menu_component';

export default {
  title: 'WEM/Menu',
};

//👇 We create a “template” of how args map to rendering
const Template = ({ orientation }) =>
  html`<menu-component .orientation=${orientation}><a href='#'>Item 1</a><a href='#'>Item 2</a></menu-component>`;

//👇 Each story then reuses that template
export const Horizontal = Template.bind({});

Horizontal.args = {
    orientation: 'horizontal'
}

export const Vertical = Template.bind({});

Vertical.args = {
    orientation: 'vertical'
}