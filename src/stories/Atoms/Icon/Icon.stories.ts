import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
