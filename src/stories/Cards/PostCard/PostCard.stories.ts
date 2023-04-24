import type { Meta, StoryObj } from '@storybook/react';

import { PostCard } from './PostCard';

const meta: Meta<typeof PostCard> = {
  title: 'Cards/PostCard',
  component: PostCard,
  tags: ['autodocs'],
  args: {
    title: 'Post Title on Card',
    summary: 'Post summary on Card. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae neque fuga.',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {};
