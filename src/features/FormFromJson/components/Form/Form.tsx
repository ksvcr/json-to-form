import { useCallback } from 'react';

import { FormConfig } from 'features/FormFromJson/types';

import { Fields } from 'features/FormFromJson/components/Fields';
import { useForm } from 'features/FormFromJson/FormContext';
import { Button } from 'shared/components/Button';

import styles from './Form.module.css';

type FormProps = {
  config: FormConfig;
};

export const Form = ({ config }: FormProps) => {
  const { formData, handleReset } = useForm();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      console.log(formData);
    },
    [formData]
  );

  return (
    <>
      <h2>{config.title}</h2>
      <form onSubmit={handleSubmit}>
        <Fields fields={config.fields} />

        <div className={styles.controls}>
          {!config.hideSubmit && <Button type="submit">{config.submitText || 'Ok'}</Button>}
          {!config.hideCancel && (
            <Button type="button" onClick={handleReset}>
              {config.cancelText || 'Reset'}
            </Button>
          )}
        </div>
      </form>
    </>
  );
};
