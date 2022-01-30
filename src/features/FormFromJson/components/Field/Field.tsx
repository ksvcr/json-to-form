import { ReactNode } from 'react';

import { FormField, FieldValue } from 'features/FormFromJson/types';

import { useFormField } from 'features/FormFromJson/FormContext';

type FieldProps = {
  children: (value: FieldValue, onChange: (value: FieldValue) => void) => ReactNode;
  name: FormField['name'];
};

export const Field = ({ name, children }: FieldProps) => {
  const { fieldValue, onFieldChange } = useFormField(name);

  return <>{children(fieldValue, onFieldChange)}</>;
};
