import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Molecules/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Call to action',
    bigBtn: false,
    relevance: 'call',
    type: 'button',
    color: 'primary',
  },
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
    color: {
      control: {
        type: 'select',
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const BigButton: Story = {
  args: {
    ...Default.args,
    bigBtn: true,
  },
};