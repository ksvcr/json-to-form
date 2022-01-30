import { FormField } from 'features/FormFromJson/types';

import { Field } from 'features/FormFromJson/components/Field';
import { Control } from 'features/FormFromJson/components/Control';

type FieldsProps = {
  fields?: FormField[];
};

export const Fields = ({ fields }: FieldsProps) => {
  return (
    <>
      {(fields || []).map(field => (
        <Field key={field.id} name={field.name}>
          {(value, onChange) => <Control value={value} onChange={onChange} config={field} />}
        </Field>
      ))}
    </>
  );
};
