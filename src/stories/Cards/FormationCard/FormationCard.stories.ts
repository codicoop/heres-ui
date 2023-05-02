import type { Meta, StoryObj } from '@storybook/react';

import { FormationCard } from './FormationCard';

const meta: Meta<typeof FormationCard> = {
  title: 'Cards/FormationCard',
  component: FormationCard,
  tags: ['autodocs'],
  args: {
    title: 'Formation Card',
    summary: 'This is a formation card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed voluptates, nobis iure veniam animi magni assumenda eos ipsam quos. Tenetur, error alias?',
    img: 'https://picsum.photos/seed/picsum/200/300',
    modality: 'Presencial',
    lenguage: 'Català',
    price: 'Gratuït',
    duration: '20 hores',
    methodology: 'Casos pràctics',
    organization: 'Organització 1',
    startDate: '01/01/2021',
    endDate: '01/02/2021',
    teachers: ['Teacher 1', 'Teacher 2'],
    level: 'Avançat',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof FormationCard>;

export const Default: Story = {};
