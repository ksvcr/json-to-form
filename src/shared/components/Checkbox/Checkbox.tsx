import { InputHTMLAttributes } from 'react';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'checked' | 'type'> & { value: Boolean };

export const Checkbox = ({ value, name, id, onChange }: CheckboxProps) => {
  return (
    <div className="flex">
      <div className="form-check">
        <input
          className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
          type="checkbox"
          name={name}
          checked={Boolean(value)}
          id={id}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
