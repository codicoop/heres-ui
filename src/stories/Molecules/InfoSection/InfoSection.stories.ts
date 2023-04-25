import type { Meta, StoryObj } from '@storybook/react';

import { InfoSection } from './InfoSection';

const meta: Meta<typeof InfoSection> = {
  title: 'Molecules/InfoSection',
  component: InfoSection,
  tags: ['autodocs'],
  args: {
    category: 'Data d\'inici',
    data: 'Març 2022'
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof InfoSection>;

export const Default: Story = {};
