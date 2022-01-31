import { useCallback, useState, ChangeEvent } from 'react';

import { Textarea } from 'shared/components/Textarea';
import { Button } from 'shared/components/Button';
import { validateJson } from './validateJson';

import styles from './PrettyJsonTextarea.module.css';

type PrettyJsonTextareaProps<T> = {
  value: T;
  onChange: (value: T) => void;
};

export const PrettyJsonTextarea = <T extends object>({ value, onChange }: PrettyJsonTextareaProps<T>) => {
  const [jsonString, setJsonString] = useState(() => JSON.stringify(value, null, 2));
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setJsonString(value);
  }, []);

  const handleApply = useCallback(async () => {
    try {
      const parsedValue = JSON.parse(jsonString);
      setJsonString(JSON.stringify(parsedValue, null, 2));

      const state = validateJson(parsedValue);

      if (state.error) {
        setSuccess(false);
        setError(state.error.message);
        return;
      }

      setSuccess(true);
      setError(null);
      onChange(parsedValue);
    } catch (error) {
      setSuccess(false);
      if (error instanceof SyntaxError) {
        setError(error.message);
      }
    }
  }, [jsonString, onChange]);

  return (
    <>
      <Textarea className={styles.textarea} value={jsonString} onChange={handleChange} />
      {error && (
        <div className={styles.error} role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className={styles.success} role="status">
          Form is generated
        </div>
      )}

      <div className={styles.controls}>
        <Button type="button" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </>
  );
};
