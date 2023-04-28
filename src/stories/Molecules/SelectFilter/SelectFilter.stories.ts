import type { Meta, StoryObj } from '@storybook/react';

import { SelectFilter } from './SelectFilter';

const meta: Meta<typeof SelectFilter> = {
  title: 'Molecules/SelectFilter',
  component: SelectFilter,
  tags: ['autodocs'],
  args: {
    name: "Metodologia",
    value: "methodology",
    options: ["Tots", "Metodologia 1", "Metodologia 2", "Metodologia 3"],
    color: "primary",
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof SelectFilter>;

export const Default: Story = {};
