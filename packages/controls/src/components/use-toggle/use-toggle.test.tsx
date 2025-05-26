import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useToggle from './use-toggle';

describe('useToggle', () => {
  it('should return correct isToggleOn value', () => {
    const { result, rerender } = renderHook(({ value }) => useToggle(value), {
      initialProps: { value: 1 },
    });
    expect(result.current.isToggleOn).toBe(true);
    rerender({ value: 0 });
    expect(result.current.isToggleOn).toBe(false);
  });

  it('should call callback with correct value on handleControlValueToggle', () => {
    const cb = vi.fn();
    const { result } = renderHook(() => useToggle(0));
    const event = { target: { checked: true } };
    act(() => {
      result.current.handleControlValueToggle(cb)(event as any);
    });
    expect(cb).toHaveBeenCalledWith('1');
  });
});
