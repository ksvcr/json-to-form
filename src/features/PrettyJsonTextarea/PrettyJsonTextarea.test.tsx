import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormConfig } from 'features/FormFromJson/types';

import { PrettyJsonTextarea } from './PrettyJsonTextarea';

const mockOnChange = jest.fn();

describe('when the apply button is clicked with valid config', () => {
  const config: FormConfig = {
    title: 'Form',
    fields: []
  };

  it('should call the onChange function', () => {
    render(<PrettyJsonTextarea value={config} onChange={mockOnChange} />);

    userEvent.click(screen.getByRole('button'));

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should contain a success text', () => {
    render(<PrettyJsonTextarea value={config} onChange={mockOnChange} />);
    userEvent.click(screen.getByRole('button'));

    const result = screen.getByText(new RegExp('Form is generated'));
    expect(result).toBeInTheDocument();
  });
});

describe('when the apply button is clicked with invalid config', () => {
  const config: FormConfig = {
    title: 'Form',
    fields: []
  };

  it('should contain an error text', () => {
    render(<PrettyJsonTextarea value={config} onChange={mockOnChange} />);

    const textarea = screen.getByRole('textbox');

    userEvent.clear(textarea);
    userEvent.type(textarea, '{}');

    userEvent.click(screen.getByRole('button'));

    const result = screen.getByRole('alert');
    expect(result).toBeInTheDocument();
  });
});
