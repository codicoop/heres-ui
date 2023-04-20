import type { Meta, StoryObj } from '@storybook/react';

import { PracticeCard } from './PracticeCard';

const meta: Meta<typeof PracticeCard> = {
  title: 'Cards/PracticeCard',
  component: PracticeCard,
  tags: ['autodocs'],
  args: {
    title: 'Practice Card',
    summary: 'This is a practice card',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof PracticeCard>;

export const Default: Story = {};
