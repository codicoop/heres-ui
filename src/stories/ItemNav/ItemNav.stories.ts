import type { Meta, StoryObj } from '@storybook/react';

import { ItemNav } from './ItemNav';

const meta: Meta<typeof ItemNav> = {
  title: 'Molecules/ItemNav',
  component: ItemNav,
  tags: ['autodocs'],
  args: {
    children: 'ItemNav',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ItemNav>;

export const Default: Story = {};
