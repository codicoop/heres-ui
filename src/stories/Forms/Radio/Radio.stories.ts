import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
    title: 'Forms/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {
  
  },
  argTypes: {
  
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};
