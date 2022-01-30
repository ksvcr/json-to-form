import { FormConfig } from 'features/FormFromJson/types';
import { FormContextProvider } from 'features/FormFromJson/FormContext';

import { Fields } from 'features/FormFromJson/components/Fields';

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
