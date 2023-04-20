import type { Meta, StoryObj } from '@storybook/react';

import { SideSectionFilter } from './SideSectionFilter';

const meta: Meta<typeof SideSectionFilter> = {
  title: 'Organisms/SideSectionFilter',
  component: SideSectionFilter,
  tags: ['autodocs'],
  args: {
    title: 'Bones pràctiques',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae consequatur maxime temporibus necessitatibus enim eaque inventore, omnis, dolorum assumenda dignissimos voluptate soluta sapiente asperiores, laboriosam velit repudiandae harum architecto nisi earum!',
    filters: [
      {
        name: "Any",
        value: "year",
        options: ["Tots", "2021", "2020", "2019"],
        color: "gray",
      },
      {
        name: "Metodologia",
        value: "methodology",
        options: ["Tots", "Metodologia 1", "Metodologia 2", "Metodologia 3"],
        color: "primary",
      },
      {
        name: "Sector",
        value: "sector",
        options: ["Tots", "Sector 1", "Sector 2", "Sector 3"],
        color: "white",
      },
      {
        name: "Tema",
        value: "theme",
        options: ["Tots", "Tema 1", "Tema 2", "Tema 3"],
        color: "secondary",
      },
    ],
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof SideSectionFilter>;

export const Default: Story = {};
