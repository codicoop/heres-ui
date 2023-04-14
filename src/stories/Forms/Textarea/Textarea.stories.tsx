import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    label: 'Textarea Label',
    name: 'textarea-name',
    placeholder: 'Textarea Placeholder',
    value: 'Textarea Value',
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {}