import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container Example</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur facilis ipsum possimus, eum
          aliquam recusandae praesentium quibusdam consequatur soluta dolores obcaecati nesciunt neque. Dolor id
          voluptas vero unde excepturi!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
