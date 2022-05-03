import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <>
        <h1>Section Background Example</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur facilis ipsum possimus, eum
          aliquam recusandae praesentium quibusdam consequatur soluta dolores obcaecati nesciunt neque. Dolor id
          voluptas vero unde excepturi!
        </p>
      </>
    ),
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
