import type { Meta, StoryObj } from '@storybook/react';

import { GoToSection } from './GoToSection';

const meta: Meta<typeof GoToSection> = {
  title: 'Cards/GoToSection',
  component: GoToSection,
  tags: ['autodocs'],
  args: {
    name: 'Bones pràctiques',
    color: 'white',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam.',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'gray', 'white']
      },
    }
  },
};

export default meta;
type Story = StoryObj<typeof GoToSection>;

export const Default: Story = {};
