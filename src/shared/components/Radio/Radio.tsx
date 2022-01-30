import { InputHTMLAttributes } from 'react';

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string };

export const Radio = ({ value, checked, name, id, label, onChange }: RadioProps) => {
  return (
    <label className="form-check form-check-inline">
      <span className="form-check-label inline-block text-gray-800">{label}</span>
      <input
        value={value}
        checked={checked}
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        className="form-check-input form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
      />
    </label>
  );
};
