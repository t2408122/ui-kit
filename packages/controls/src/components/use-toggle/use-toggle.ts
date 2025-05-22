'use client';

const 켜짐 = '1';
const 꺼짐 = '0';

function useToggle(
  value: number,
  values?: {
    on: string;
    off: string;
  }
) {
  const off = values?.off ?? 꺼짐;
  const on = values?.on ?? 켜짐;

  const isToggleOn = value !== +off;

  const handleControlValueToggle = (func: (nextValue: string) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      func(e.target.checked ? on : off);
    };
  };

  const handleControlValueToggleButton = (func: (nextValue: string) => void) => {
    return (): void => {
      func(isToggleOn ? off : on);
    };
  };

  return {
    isToggleOn,
    handleControlValueToggle,
    handleControlValueToggleButton,
  };
}

export default useToggle;
