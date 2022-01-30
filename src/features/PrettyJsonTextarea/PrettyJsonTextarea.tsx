import { useCallback, useState, ChangeEvent } from 'react';

import { Textarea } from 'shared/components/Textarea';

type PrettyJsonTextareaProps<T> = {
  value: T;
  onChange: (value: T) => void;
};

export const PrettyJsonTextarea = <T extends object>({ value, onChange }: PrettyJsonTextareaProps<T>) => {
  const [jsonString, setJsonString] = useState(() => JSON.stringify(value, null, 2));

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setJsonString(value);
  }, []);

  const handleApply = useCallback(() => {
    try {
      const parsedValue = JSON.parse(jsonString);
      setJsonString(JSON.stringify(parsedValue, null, 2));
      onChange(parsedValue);
    } catch (error) {
      console.error(error);
    }
  }, [jsonString, onChange]);

  return (
    <>
      <Textarea value={jsonString} onChange={handleChange} />

      <button type="button" onClick={handleApply}>
        Apply
      </button>
    </>
  );
};
