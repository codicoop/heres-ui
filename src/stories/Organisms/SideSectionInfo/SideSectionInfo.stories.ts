import type { Meta, StoryObj } from '@storybook/react';

import { SideSectionInfo } from './SideSectionInfo';

const meta: Meta<typeof SideSectionInfo> = {
  title: 'Organisms/SideSectionInfo',
  component: SideSectionInfo,
  tags: ['autodocs'],
  args: {
    generalInfoSection: {
      type: 'practice',
      title: 'Pràctica 1',
      sectionInfo: [
        {
          category: 'Data d\'inici',
          data: 'Març 2022'
        },
        {
          category: 'Data final',
          data: 'Octubre 2022'
        },
        {
          category: 'Organització',
          data: 'Organització 1'
        },
        {
          category: 'Àmbit',
          data: 'Àmbit 1'
        },
        {
          category: 'Metodologia de referència',
          data: 'Metodologia 1'
        },
      ],
      img: 'https://picsum.photos/900/600',
    },
    relatedType: 'formation',
    relatedItems: [
      {
        id: 'formation-1',
        title: 'Formació 1',
        img: 'https://picsum.photos/900/600',
      },
    ]
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof SideSectionInfo>;

export const Default: Story = {};
