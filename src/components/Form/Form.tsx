import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormPresenter } from './FormPresenter';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const FormSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export type FormType = z.infer<typeof FormSchema>;

export const Form: React.FC = () => {
  const methods = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(FormSchema),
  });
  return (
    <FormProvider {...methods}>
      <FormPresenter></FormPresenter>
    </FormProvider>
  );
};
