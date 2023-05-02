import type { Meta, StoryObj } from '@storybook/react';

import { PracticeCard } from './PracticeCard';

const meta: Meta<typeof PracticeCard> = {
  title: 'Cards/PracticeCard',
  component: PracticeCard,
  tags: ['autodocs'],
  args: {
    title: 'Practice Card',
    summary: 'This is a practice card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed voluptates, nobis iure veniam animi magni assumenda eos ipsam quos. Tenetur, error alias?',
    ambit: 'Social',
    sector: 'Sector social',
    methodology: 'Metodologia 1',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof PracticeCard>;

export const Default: Story = {};
