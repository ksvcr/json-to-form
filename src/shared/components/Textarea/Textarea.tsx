import { TextareaHTMLAttributes } from 'react';
import cn from 'classnames/bind';

import { FieldValue } from 'features/FormFromJson/types';

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> & {
  value: FieldValue;
  className?: string;
};

export const Textarea = ({ value, name, id, className, onChange, ...props }: TextareaProps) => {
  return <textarea className={cn(className)} name={name} value={value?.toString()} id={id} onChange={onChange} />;
};
