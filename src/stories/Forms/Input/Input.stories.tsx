import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Input Label',
    name: 'input-name',
    placeholder: 'Input Placeholder',
    type: 'text',
    value: 'Input Value',
    onChange: () => {},
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {}