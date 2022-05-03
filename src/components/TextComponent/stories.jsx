import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia enim fugiat ex ipsa, non libero assumenda voluptatem doloremque quibusdam beatae? Assumenda saepe tempora dolorem! Expedita ad quae maiores facere maxime!',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
