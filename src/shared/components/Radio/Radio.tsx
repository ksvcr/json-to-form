import { InputHTMLAttributes } from 'react';

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string };

export const Radio = ({ value, checked, name, id, label, onChange }: RadioProps) => {
  return (
    <label>
      <span>{label}</span>
      <input value={value} checked={checked} id={id} name={name} onChange={onChange} type="radio" />
    </label>
  );
};
