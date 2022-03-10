import { html } from 'lit-html';

import './tabellen_component';

export default {
  title: 'WEM/Tabellenkalkulation',
};

//👇 We create a “template” of how args map to rendering
const Template = ({ rows, columns }) =>
  html`<tabellen-kalkulation .rows=${rows} .columns=${columns}></tabellen-kalkulation>`;

//👇 Each story then reuses that template
export const Small = Template.bind({});

Small.args = {
    rows: 3,
    columns: 3
}

export const Big = Template.bind({});

Big.args = {
    rows: 6,
    columns: 6
}