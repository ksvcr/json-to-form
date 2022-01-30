import { FormConfig } from 'features/FormFromJson/types';

import { Form } from 'features/FormFromJson/components/Form';

type FormFromJsonProps = {
  config: FormConfig;
};

export const FormFromJson = ({ config }: FormFromJsonProps) => <Form config={config} />;
