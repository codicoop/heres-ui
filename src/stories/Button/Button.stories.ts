import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'UI-base/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    relevance: {
      control: {
        type: 'select',
      }
    },
    type: {
      control: {
        type: 'select',
      }
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Call: Story = {
  args: {
    label: 'Call to action',
  },
};