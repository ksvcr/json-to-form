import { FormConfig } from 'features/FormFromJson/types';
import { FormContextProvider } from 'features/FormFromJson/FormContext';

import { Form } from 'features/FormFromJson/components/Form';

type FormFromJsonProps = {
  config: FormConfig;
};

export const FormFromJson = ({ config }: FormFromJsonProps) => (
  <FormContextProvider config={config}>
    <Form config={config} />
  </FormContextProvider>
);
