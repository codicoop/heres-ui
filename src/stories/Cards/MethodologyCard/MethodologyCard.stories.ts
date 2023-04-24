import type { Meta, StoryObj } from '@storybook/react';

import { MethodologyCard } from './MethodologyCard';

const meta: Meta<typeof MethodologyCard> = {
  title: 'Cards/MethodologyCard',
  component: MethodologyCard,
  tags: ['autodocs'],
  args: {
    title: 'Methodology Title on Card',
    summary: 'Methodology summary on Card. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae neque fuga.',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof MethodologyCard>;

export const Default: Story = {};
