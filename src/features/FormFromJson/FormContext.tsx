import { createContext, useContext, useMemo, useState, useCallback, ReactNode } from 'react';

import { FormConfig, FormField, FieldValue } from 'features/FormFromJson/types';

type FormData = Record<FormField['name'], FieldValue>;

type FormContextValue = {
  formData: FormData;
  config: FormConfig;
  onChange: (newData: FormData) => void;
  onChangeByName: (name: FormField['name'], value: FieldValue) => void;
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

  const handleChangeByName = useCallback((name, value) => {
    setFormData(prevFormData => {
      return { ...prevFormData, [name]: value };
    });
  }, []);

  const handleChange = useCallback(data => {
    setFormData(data);
  }, []);

  const providerValue = useMemo(
    () => ({ formData, config, onChangeByName: handleChangeByName, onChange: handleChange }),
    [formData, config, handleChangeByName, handleChange]
  );

  return <FormContext.Provider value={providerValue}>{children}</FormContext.Provider>;
};

export function useFormField(name: FormField['name']) {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  const { formData, onChangeByName } = context;

  const handleChange = useCallback(
    (value: FieldValue) => {
      onChangeByName(name, value);
    },
    [name, onChangeByName]
  );

  const fieldValue = formData[name];

  return useMemo(() => ({ onFieldChange: handleChange, fieldValue }), [handleChange, fieldValue]);
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  const { formData, config, onChange } = context;

  const handleReset = useCallback(() => {
    onChange(getDefaultValues(config));
  }, [config, onChange]);

  return useMemo(() => ({ formData, handleReset }), [formData, handleReset]);
}
