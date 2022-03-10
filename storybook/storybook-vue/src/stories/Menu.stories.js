import Menu from '../components/Menu.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'WEM/Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    items: { 
        control: {type: 'array' },
        defaultValue: ['Item 1', 'Item 2']
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Menu },
  template: '<Menu v-bind="$props" />',
});

export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Horizontal.args = {
  orientation: 'horizontal'
};

export const Vertical = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Vertical.args = {
  orientation: 'vertical'
};