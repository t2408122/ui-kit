import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from './index';

describe('Switch', () => {
  it('renders input[type=checkbox]', () => {
    const { getByRole } = render(<Switch id="switch-test" />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeTruthy();
  });

  it('applies dark theme class when theme is dark', () => {
    const { container } = render(<Switch id="switch-test" theme="dark" />);
    const rootDiv = container.firstChild as HTMLElement;
    expect(rootDiv.className).toMatch(/dark/);
  });
});
