import { FormConfig } from 'features/FormFromJson/types';

export const defaultJsonConfig: FormConfig = {
  title: 'Form',
  fields: [
    {
      label: 'Text',
      id: 'text',
      name: 'text',
      type: 'text'
    },
    {
      label: 'Textarea',
      id: 'textarea',
      name: 'textarea',
      type: 'textarea'
    },
    {
      label: 'Date',
      id: 'date',
      name: 'date',
      type: 'date',
      value: '2020-01-01'
    },
    {
      label: 'Number',
      id: 'number',
      name: 'number',
      type: 'number',
      value: 3
    },
    {
      label: 'Checkbox',
      id: 'checkbox',
      name: 'checkbox',
      type: 'checkbox',
      value: false
    },
    {
      label: 'Radio',
      name: 'radio',
      id: 'radio',
      type: 'radio',
      value: 'radio-1',
      options: [
        {
          label: 'Radio 1',
          value: 'radio-1'
        },
        {
          label: 'Radio 2',
          value: 'radio-2'
        }
      ]
    }
  ]
};
