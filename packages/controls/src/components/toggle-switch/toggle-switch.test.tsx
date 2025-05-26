import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToggleSwitch } from './toggle-switch';

// 기본 렌더링 테스트

describe('ToggleSwitch', () => {
  it('renders without crashing', () => {
    const onControl = vi.fn();
    const { getByRole } = render(
      <ToggleSwitch id="test" value={1} onControl={onControl} />
    );
    expect(getByRole('checkbox')).toBeTruthy();
  });

  it('calls onControl with correct value when toggled', () => {
    const onControl = vi.fn();
    const { getByRole } = render(
      <ToggleSwitch id="test" value={0} onControl={onControl} />
    );
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onControl).toHaveBeenCalled();
  });
});
