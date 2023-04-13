import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Molecules/Button',
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
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Call to action',
  },
};