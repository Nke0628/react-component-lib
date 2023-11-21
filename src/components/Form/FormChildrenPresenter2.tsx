import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from './Form';

export const FormChildrenPresenter2: React.FC = () => {
  const { register } = useFormContext<FormType>();
  return <input id="email" type="text" {...register('password')} />;
};
