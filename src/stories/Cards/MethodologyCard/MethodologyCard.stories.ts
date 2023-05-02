import type { Meta, StoryObj } from '@storybook/react';

import { MethodologyCard } from './MethodologyCard';

const meta: Meta<typeof MethodologyCard> = {
  title: 'Cards/MethodologyCard',
  component: MethodologyCard,
  tags: ['autodocs'],
  args: {
    title: 'Methodology Title on Card',
    summary: 'Methodology summary on Card. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae neque fuga.',
    saved: false,
    ambit: 'Social',
    sectors: ["Energétic", "Equips electronics", "Telecomunicacions i tecnologies de la informació"]
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof MethodologyCard>;

export const Default: Story = {};

export const OneSector: Story = {
  args: {
    sectors: ["Energétic"]
  }
};

export const TwoSectors: Story = {
  args: {
    sectors: ["Energétic", "Equips electronics"]
  }
};

export const MoreThanTwoSectors: Story = {
  args: {
    sectors: ["Energétic", "Equips electronics", "Telecomunicacions i tecnologies de la informació"]
  }
};
