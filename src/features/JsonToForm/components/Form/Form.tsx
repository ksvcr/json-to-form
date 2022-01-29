import { FormConfig } from 'features/JsonToForm/types';
import { FormContextProvider } from 'features/JsonToForm/FormContext';

import { Fields } from 'features/JsonToForm/components/Fields';

type FormProps = {
  config: FormConfig;
};

export const Form = ({ config }: FormProps) => {
  return (
    <FormContextProvider config={config}>
      <h2>{config.title}</h2>
      <form>
        <Fields fields={config.fields} />
      </form>
    </FormContextProvider>
  );
};
