import { FormConfig } from 'features/JsonToForm/types';

import { Form } from 'features/JsonToForm/components/Form';

type JsonToFormProps = {
  config: FormConfig;
};

export const JsonToForm = ({ config }: JsonToFormProps) => <Form config={config} />;
