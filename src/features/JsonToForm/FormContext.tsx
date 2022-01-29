import { createContext, useContext, useMemo, useState, useCallback, ReactNode } from 'react';

import { FormConfig, FormField, FieldValue } from 'features/JsonToForm/types';

type FormData = Record<FormField['name'], FieldValue>;

type FormContextValue = {
  formData: FormData;
  onChange: (name: FormField['name'], value: FieldValue) => void;
};

type FormContextProviderProps = {
  config: FormConfig;
  children: ReactNode;
};

export const FormContext = createContext<FormContextValue | null>(null);

const getDefaultValues = (config: FormConfig) => {
  return config.fields.reduce((acc, field) => {
    const { value, name } = field;
    acc[name] = value ?? '';

    return acc;
  }, {} as FormData);
};

export const FormContextProvider = ({ children, config }: FormContextProviderProps) => {
  const [formData, setFormData] = useState(() => getDefaultValues(config));

  const handleChange = useCallback((name, value) => {
    setFormData(prevFormData => {
      return { ...prevFormData, [name]: value };
    });
  }, []);

  const providerValue = useMemo(() => ({ formData, onChange: handleChange }), [formData, handleChange]);

  return <FormContext.Provider value={providerValue}>{children}</FormContext.Provider>;
};

export function useFormField(name: FormField['name']) {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  const { formData, onChange } = context;

  const handleChange = useCallback(
    (value: FieldValue) => {
      onChange(name, value);
    },
    [name, onChange]
  );

  const fieldValue = formData[name];

  return useMemo(() => ({ onFieldChange: handleChange, fieldValue }), [handleChange, fieldValue]);
}
