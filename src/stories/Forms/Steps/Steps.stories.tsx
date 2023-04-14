import type { Meta, StoryObj } from '@storybook/react';

import { Steps } from './Steps';

const meta: Meta<typeof Steps> = {
  title: 'Forms/Steps',
  component: Steps,
  tags: ['autodocs'],
  args: {
    steps: 3,
    progress: 0,
  },
  argTypes: {
    steps: {
      description: 'Total number of steps',
      defaultValue: 3,
    },
    progress: {
      description: 'Number of completed steps',
      defaultValue: 0,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {}