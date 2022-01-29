import { FormField } from 'features/JsonToForm/types';

import { Field } from 'features/JsonToForm/components/Field';
import { Control } from 'features/JsonToForm/components/Control';

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
