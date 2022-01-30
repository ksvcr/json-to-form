import { render, screen } from '@testing-library/react';

import { FormConfig } from 'features/FormFromJson/types';

import { FormFromJson } from './FormFromJson';

describe('when rendered with form title', () => {
  const config: FormConfig = {
    title: 'Form test title',
    fields: []
  };

  it('should contain an expected text', () => {
    render(<FormFromJson config={config} />);
    const result = screen.getByText(new RegExp('Form test title'));
    expect(result).toBeInTheDocument();
  });
});

describe('when rendered with submit text', () => {
  const config: FormConfig = {
    title: 'Form',
    submitText: 'Submit Test',
    fields: []
  };

  it('should contain an expected text', () => {
    render(<FormFromJson config={config} />);
    const result = screen.getByText(new RegExp('Submit Test'));
    expect(result).toBeInTheDocument();
  });
});

describe('when rendered with hidden submit button', () => {
  const config: FormConfig = {
    title: 'Form',
    submitText: 'Submit Test',
    hideSubmit: true,
    fields: []
  };

  it('should hide submit button', () => {
    render(<FormFromJson config={config} />);
    const result = screen.queryByText(new RegExp('Submit Test'));
    expect(result).not.toBeInTheDocument();
  });
});

describe('when rendered with cancel text', () => {
  const config: FormConfig = {
    title: 'Form',
    cancelText: 'Cancel Test',
    fields: []
  };

  it('should contain an expected text', () => {
    render(<FormFromJson config={config} />);
    const result = screen.getByText(new RegExp('Cancel Test'));
    expect(result).toBeInTheDocument();
  });
});

describe('when rendered with hidden cancel button', () => {
  const config: FormConfig = {
    title: 'Form',
    cancelText: 'Cancel Test',
    hideCancel: true,
    fields: []
  };

  it('should hide cancel button', () => {
    render(<FormFromJson config={config} />);
    const result = screen.queryByText(new RegExp('Cancel Test'));
    expect(result).not.toBeInTheDocument();
  });
});

describe('when rendered with text field', () => {
  const config: FormConfig = {
    title: 'Form',
    fields: [
      {
        label: 'Text',
        id: 'text',
        name: 'text',
        type: 'text',
        value: 'text'
      }
    ]
  };

  it('should contain an expected element', () => {
    render(<FormFromJson config={config} />);
    const result = screen.getByLabelText(new RegExp('Text'));
    expect(result).toBeInTheDocument();
  });

  it('should contain expected attributes', () => {
    render(<FormFromJson config={config} />);
    const result = screen.getByLabelText(new RegExp('Text'));
    expect(result).toHaveAttribute('type', 'text');
    expect(result).toHaveAttribute('name', 'text');
    expect(result).toHaveAttribute('id', 'text');
    expect(result).toHaveValue('text');
  });
});

describe('when rendered with radio fields', () => {
  const config: FormConfig = {
    title: 'Form',
    fields: [
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

  it('should contain an expected element', () => {
    render(<FormFromJson config={config} />);
    const result = screen.getByLabelText(new RegExp('Radio 1'));
    expect(result).toBeInTheDocument();
  });
});
