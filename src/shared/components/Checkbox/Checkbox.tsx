import { InputHTMLAttributes } from 'react';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'checked' | 'type'> & { value: Boolean };

export const Checkbox = ({ value, name, id, onChange }: CheckboxProps) => {
  return <input type="checkbox" name={name} checked={Boolean(value)} id={id} onChange={onChange} />;
};
