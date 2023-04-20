import type { Meta, StoryObj } from '@storybook/react';

import { SideSectionFilter } from './SideSectionFilter';

const meta: Meta<typeof SideSectionFilter> = {
  title: 'Organisms/SideSectionFilter',
  component: SideSectionFilter,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof SideSectionFilter>;

export const Default: Story = {};
