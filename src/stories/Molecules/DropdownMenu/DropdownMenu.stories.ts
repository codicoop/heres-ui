import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu } from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  args: {
    text: 'DropdownMenu',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {};
