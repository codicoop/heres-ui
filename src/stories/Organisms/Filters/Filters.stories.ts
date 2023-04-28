import type { Meta, StoryObj } from '@storybook/react';

import { Filters } from './Filters';

const meta: Meta<typeof Filters> = {
  title: 'Organisms/Filters',
  component: Filters,
  tags: ['autodocs'],
  args: {
    filters: [
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
        name: "Àmbit",
        value: "scope",
        options: ["Tots", "Àmbit 1", "Àmbit 2", "Àmbit 3"],
        color: "secondary",
      },
      {
        name: "Organització",
        value: "org",
        options: ["Tots", "Org 1", "Org 2", "Org 3"],
        color: "gray",
      },
      {
        name: "Any",
        value: "year",
        options: ["Tots", "2021", "2020", "2019"],
        color: "gray",
      },
    ]
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const Default: Story = {};
