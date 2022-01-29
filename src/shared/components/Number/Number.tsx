import { InputHTMLAttributes } from 'react';

type NumberProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Number = ({ value, name, id, onChange }: NumberProps) => {
  return <input type="number" name={name} value={value} id={id} onChange={onChange} />;
};
