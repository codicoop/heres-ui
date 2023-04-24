import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'menu',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
    },
    color: {
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
