import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from './Form';
import { FormChildrenPresenter } from './FormChildrenPresenter';
import { FormChildrenPresenter2 } from './FormChildrenPresenter2';
import { DevTool } from '@hookform/devtools';

export const FormPresenter: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormContext<FormType>();
  const onSubmit = (data: any) => {};
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormChildrenPresenter></FormChildrenPresenter>
        <FormChildrenPresenter2></FormChildrenPresenter2>
        <button type="submit">送信</button>
      </form>
      <DevTool control={control}></DevTool>
    </>
  );
};
