import { InputHTMLAttributes } from 'react';

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const TextInput = ({ value, name, id, onChange }: TextInputProps) => {
  return <input type="text" name={name} value={value} id={id} onChange={onChange} />;
};
