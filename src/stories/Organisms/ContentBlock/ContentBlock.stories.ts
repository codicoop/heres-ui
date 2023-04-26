import type { Meta, StoryObj } from '@storybook/react';

import { ContentBlock } from './ContentBlock';

const meta: Meta<typeof ContentBlock> = {
  title: 'Organisms/ContentBlock',
  component: ContentBlock,
  tags: ['autodocs'],
  args: {
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
    img: 'https://via.placeholder.com/250x150',
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ContentBlock>;

export const Default: Story = {};

export const WithoutImage: Story = {
  args: {
    img: undefined,
  },
};

export const WithoutText: Story = {
  args: {
    text: undefined,
  },
};

export const WithoutImageSideLeft: Story = {
  args: {
    imgSide: 'left',
  },
};
