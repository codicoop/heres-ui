import type { Meta, StoryObj } from '@storybook/react';

import { ContainerWithAside } from './ContainerWithAside';

const meta: Meta<typeof ContainerWithAside> = {
  title: 'Layouts/ContainerWithAside',
  component: ContainerWithAside,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ContainerWithAside>;

export const Default: Story = {};
