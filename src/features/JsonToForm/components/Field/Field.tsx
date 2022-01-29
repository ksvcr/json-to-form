import { ReactNode } from 'react';

import { FormField, FieldValue } from 'features/JsonToForm/types';

import { useFormField } from 'features/JsonToForm/FormContext';

type FieldProps = {
  children: (value: FieldValue, onChange: (value: FieldValue) => void) => ReactNode;
  name: FormField['name'];
};

export const Field = ({ name, children }: FieldProps) => {
  const { fieldValue, onFieldChange } = useFormField(name);

  return <>{children(fieldValue, onFieldChange)}</>;
};
