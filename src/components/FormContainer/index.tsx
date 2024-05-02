import { FC, ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormContainerProps {
  children?: ReactNode;
  context: UseFormReturn<any, any>;
  onSubmit: (data: any) => void;
}
const FormContainer: FC<FormContainerProps> = (props) => {
  const { children, context, onSubmit } = props;
  const { handleSubmit } = context;
  return (
    <FormProvider {...context}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FormContainer;
