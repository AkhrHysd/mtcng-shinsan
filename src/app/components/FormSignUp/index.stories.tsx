import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FormSignUp, Props } from '.'; // FormSignUpコンポーネントのimport先を適切に指定してください

export default {
  title: 'Components/FormSignUp',
  component: FormSignUp,
} as Meta;

const Template: Story<Props> = (args) => <FormSignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValues: {
    email: 'example@email.com',
    familyName: 'Suzuki',
    firstName: 'Taro',
  },
};