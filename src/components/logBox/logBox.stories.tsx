import type { Meta, StoryObj } from '@storybook/react';
import LogBox from '.';

const meta: Meta<typeof LogBox> = {
  title: 'components/logBox',
  component: LogBox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LogBox>;

export const Default: Story = {
  args: {
    title: '임시 타이틀',
    description: '로그 박스 임시 설명글입니다.',
    createdDate: '2025-01-28',
  },
};
