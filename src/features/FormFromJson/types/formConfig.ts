export type FieldType = 'number' | 'text' | 'textarea' | 'checkbox' | 'date' | 'radio';

export type FieldValue = string | number | boolean;

export type FieldOption = {
  label: string;
  value: FieldValue;
};

export type FormField = {
  label: string;
  type: FieldType;
  name: string;
  id: string;
  value?: FieldValue;
  options?: FieldOption[];
};

export type FormConfig = {
  title: string;
  fields: FormField[];
};
