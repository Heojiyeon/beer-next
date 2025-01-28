import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';

const meta: Meta<typeof Card> = {
  title: 'components/card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image: '/temp-route',
    name: 'temp beer',
    price: '$100',
    rating: {
      average: 3.44,
      reviews: 100,
    },
  },
};
