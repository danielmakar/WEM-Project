import Eingabe from '../components/Eingabe.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'WEM/Eingabe',
  component: Eingabe
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Eingabe },
  template: '<Eingabe/>',
});

export const Basic = Template.bind({});