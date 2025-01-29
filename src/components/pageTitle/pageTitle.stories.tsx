import type { Meta, StoryObj } from '@storybook/react';
import PageTitle from '.';

const meta: Meta<typeof PageTitle> = {
  title: 'components/pageTitle',
  component: PageTitle,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
  args: {
    title: '임시 페이지 타이틀입니다.',
  },
};
