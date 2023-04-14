import type { Meta, StoryObj } from '@storybook/react';

import { GoToSections } from './GoToSections';

const meta: Meta<typeof GoToSections> = {
  title: 'Cards/GoToSections',
  component: GoToSections,
  tags: ['autodocs'],
  args: {
    sections: [
      {
        name: 'Bones pràctiques',
        url: '/practiques',
        color: 'white',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam.',
      },
      {
        name: 'Notícies',
        url: '/blog',
        color: 'primary',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam.',
      },
      {
        name: 'Formació',
        url: '/formacio',
        color: 'secondary',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam.',
      },
      {
        name: 'Metodologies',
        url: '/metodologies',
        color: 'gray',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam.',
      },
    ],
  },
  argTypes: {
    sections: {
      description: 'List of sections',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GoToSections>;

export const Default: Story = {}
