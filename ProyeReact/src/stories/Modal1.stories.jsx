import React from 'react';

import { Label, Modal } from '../componentes/Modal1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Modal {...args}/>;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args  = {
  
  label: 'Ponga su Titutlo',
  label2: 'Modulo 7'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };