import type { Meta, StoryObj } from '@storybook/react';

import { JazzyAction } from './JazzyAction';

const meta: Meta<typeof JazzyAction> = {
  title: 'Molecules/JazzyAction',
  component: JazzyAction,
  tags: ['autodocs'],
  args: {
    text: 'Veure més',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof JazzyAction>;

export const Default: Story = {};

export const WithColor: Story = {
  args: {
    color: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'arrowRightThick',
  },
};

export const WithIconAndColor: Story = {
  args: {
    icon: 'arrowRightThick',
    color: 'primary',
  },
};
