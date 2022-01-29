import { InputHTMLAttributes } from 'react';

type DateProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Date = ({ value, name, id, onChange }: DateProps) => {
  return <input type="date" name={name} value={value?.toString()} id={id} onChange={onChange} />;
};
