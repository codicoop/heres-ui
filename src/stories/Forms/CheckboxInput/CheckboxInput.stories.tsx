import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxInput } from './CheckboxInput';

const meta: Meta<typeof CheckboxInput> = {
  title: 'Forms/Checkbox',
  component: CheckboxInput,
  tags: ['autodocs'],
  args: {
    label: 'Checkbox Label',
    name: 'checkbox-name',
    checkPosition: 'left',
    checked: false,
    onChange: () => {},
    className: '',
  },
  argTypes: {
    checkPosition: {
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxInput>;

export const Default: Story = {}