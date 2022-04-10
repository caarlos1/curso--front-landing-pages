import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Título Dark',
    colorDark: false,
    uppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
    colorDark: { type: 'boolean' },
    uppercase: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} />;

Light.args = {
  children: 'Título Light',
  colorDark: true,
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
