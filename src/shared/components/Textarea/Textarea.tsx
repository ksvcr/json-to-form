import { TextareaHTMLAttributes } from 'react';
import { FieldValue } from 'features/JsonToForm/types';

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> & { value: FieldValue };

export const Textarea = ({ value, name, id, onChange }: TextareaProps) => {
  return (
    <textarea
      name={name}
      value={value?.toString()}
      id={id}
      onChange={onChange}
      className="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
    />
  );
};
