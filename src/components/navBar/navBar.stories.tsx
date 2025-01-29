import type { Meta, StoryObj } from '@storybook/react';
import NavBar from '.';

const meta: Meta<typeof NavBar> = {
  title: 'components/navBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    story => <div style={{ justifyContent: 'center' }}>{story()}</div>,
  ],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Head: Story = {
  args: {
    ulStyle: 'flex w-[30%] md:w-full h-full justify-around items-center',
    liStyle: 'text-[20px] flex-1 flex justify-center items-center h-full',
  },
};

export const Bottom: Story = {
  args: {
    ulStyle:
      'fixed bottom-0 w-full bg-white h-[5rem] flex justify-around items-center border rounded-t-3xl shadow-inner',
    liStyle: 'text-[20px]',
  },
};
