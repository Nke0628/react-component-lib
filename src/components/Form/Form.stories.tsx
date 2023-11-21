import { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Form {...args}></Form>;
  },
};
