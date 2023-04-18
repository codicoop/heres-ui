import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Typography/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    children: 'Title Lorem Ipsum',
    underline: false,
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {};

export const Underline: Story = {
  args: {
    ...Default.args,
    underline: true,
  },
};
