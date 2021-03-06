import { InputHTMLAttributes } from 'react';
import styles from './Radio.module.css';

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string };

export const Radio = ({ value, checked, name, id, label, onChange }: RadioProps) => {
  return (
    <label>
      <span className={styles.label}>{label}</span>
      <input value={value} checked={checked} id={id} name={name} onChange={onChange} type="radio" />
    </label>
  );
};
