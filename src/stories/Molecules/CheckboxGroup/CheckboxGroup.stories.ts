import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Molecules/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: {
    legend: 'Checkbox Group',
    name: 'checkbox-group',
    options: [
      { label: 'Option 1', value: 'option-1', },
      { label: 'Option 2', value: 'option-2', },
      { label: 'Option 3', value: 'option-3', },
    ],
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {};
