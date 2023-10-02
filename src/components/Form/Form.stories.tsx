import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from './Form';

export default {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args}></Form>;

export const Default = Template.bind({});
