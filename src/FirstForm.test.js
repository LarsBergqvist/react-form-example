import { render, screen } from '@testing-library/react';
import FirstForm from './FirstForm';

test('renders FirstForm', () => {
    render(<FirstForm />);
    const firstNameInput = screen.getByLabelText(/First name/i);
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput.outerHTML).toContain('<input');

    const lastNameInput = screen.getByLabelText(/Last name/i);
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput.outerHTML).toContain('<input');

    const ageNameInput = screen.getByLabelText(/Age/i);
    expect(ageNameInput).toBeInTheDocument();
    expect(ageNameInput.outerHTML).toContain('<input');
});
