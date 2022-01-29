import { ChangeEventHandler } from 'react';

import { FieldValue, FieldOption, FormField } from 'features/JsonToForm/types';
import { Radio } from 'shared/components/Radio';

type RadioGroupProps = {
  options?: FieldOption[];
  id: FormField['id'];
  name: FormField['name'];
  value: FieldValue;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const RadioGroup = ({ options, name, id, value, onChange }: RadioGroupProps) => {
  return (
    <div>
      {(options || []).map(option => {
        const isChecked = option.value === value;

        return (
          <Radio
            label={option.label}
            id={id}
            name={name}
            key={option.label}
            value={option.value.toString()}
            checked={isChecked}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};
