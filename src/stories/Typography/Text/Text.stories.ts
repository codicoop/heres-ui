import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    extra: {
      control: {
        type: 'boolean',
      },
    }
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Text',
    extra: false,
  },
};

export const Heading: Story = {
  args: {
    ...Default.args,
    variant: 'title',
  },
};