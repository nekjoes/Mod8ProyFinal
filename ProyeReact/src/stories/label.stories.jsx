import React from 'react';

import { Label } from '../componentes/label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Label {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  
  label: 'Simple',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

