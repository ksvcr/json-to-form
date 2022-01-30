import Joi from 'joi';
import { useCallback, useState, ChangeEvent } from 'react';

import { Textarea } from 'shared/components/Textarea';
import { validateJson } from './validateJson';

type PrettyJsonTextareaProps<T> = {
  value: T;
  onChange: (value: T) => void;
};

export const PrettyJsonTextarea = <T extends object>({ value, onChange }: PrettyJsonTextareaProps<T>) => {
  const [jsonString, setJsonString] = useState(() => JSON.stringify(value, null, 2));
  const [error, setError] = useState<string>();

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setJsonString(value);
  }, []);

  const handleApply = useCallback(async () => {
    try {
      const parsedValue = JSON.parse(jsonString);
      setJsonString(JSON.stringify(parsedValue, null, 2));

      await validateJson(parsedValue);
      onChange(parsedValue);
    } catch (error) {
      if (error instanceof SyntaxError || error instanceof Joi.ValidationError) {
        setError(error.message);
      }
    }
  }, [jsonString, onChange]);

  return (
    <>
      <Textarea value={jsonString} onChange={handleChange} />
      {error && <div>{error}</div>}
      <button type="button" onClick={handleApply}>
        Apply
      </button>
    </>
  );
};
