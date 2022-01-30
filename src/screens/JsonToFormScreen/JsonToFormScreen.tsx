import { useCallback, useMemo, useState } from 'react';

import { FormConfig } from 'features/FormFromJson/types';

import { FormFromJson } from 'features/FormFromJson';
import { PrettyJsonTextarea } from 'features/PrettyJsonTextarea';

import { Tabs } from 'shared/components/Tabs';
import { DefaultLayout } from 'shared/layouts/DefaultLayout';

import { defaultJsonConfig } from './defaultJsonConfig';

export const JsonToFormScreen = () => {
  const [json, setJson] = useState<FormConfig>(defaultJsonConfig);

  const handleChange = useCallback((value: FormConfig) => {
    setJson(value);
  }, []);

  const tabItems = useMemo(
    () => [
      {
        title: 'Config',
        id: 'config',
        content: <PrettyJsonTextarea value={json} onChange={handleChange} />
      },
      {
        title: 'Result',
        id: 'result',
        content: <FormFromJson config={json} />
      }
    ],
    [handleChange, json]
  );

  return (
    <DefaultLayout>
      <Tabs items={tabItems} />
    </DefaultLayout>
  );
};
