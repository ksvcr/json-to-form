import { TextareaHTMLAttributes } from 'react';
import { FieldValue } from 'features/FormFromJson/types';

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> & { value: FieldValue };

export const Textarea = ({ value, name, id, onChange }: TextareaProps) => {
  return <textarea name={name} value={value?.toString()} id={id} onChange={onChange} />;
};
