import { useCallback, ChangeEvent, memo } from 'react';

import { FormField, FieldValue } from 'features/FormFromJson/types';

import { RadioGroup } from 'features/FormFromJson/components/RadioGroup';

import { TextInput } from 'shared/components/TextInput';
import { Number } from 'shared/components/Number';
import { Date } from 'shared/components/Date';
import { Checkbox } from 'shared/components/Checkbox';
import { Textarea } from 'shared/components/Textarea';

import styles from './Control.module.css';

type ControlProps = {
  value: FieldValue;
  config: FormField;
  onChange: (value: FieldValue) => void;
};

export const Control = memo(({ value, config, onChange }: ControlProps) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { type, checked, value } = e.target;

      const inputValue = type === 'checkbox' ? checked : value;
      onChange(inputValue);
    },
    [onChange]
  );

  const handleTextareaChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;

      onChange(value);
    },
    [onChange]
  );

  const getControl = () => {
    switch (config.type) {
      case 'text':
        return <TextInput value={value.toString()} id={config.id} name={config.name} onChange={handleInputChange} />;
      case 'number':
        return <Number value={value.toString()} id={config.id} name={config.name} onChange={handleInputChange} />;
      case 'textarea':
        return <Textarea value={value} id={config.id} name={config.name} onChange={handleTextareaChange} />;
      case 'radio':
        return (
          <RadioGroup
            value={value}
            options={config.options}
            id={config.id}
            name={config.name}
            onChange={handleInputChange}
          />
        );
      case 'checkbox':
        return <Checkbox value={Boolean(value)} id={config.id} name={config.name} onChange={handleInputChange} />;
      case 'date':
        return <Date value={value.toString()} id={config.id} name={config.name} onChange={handleInputChange} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={config.id || config.name}>
        {config.label}
      </label>
      {getControl()}
    </div>
  );
});
