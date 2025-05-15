'use client';

import useToggle from '../use-toggle/use-toggle';
import { Switch } from '@iocare-ui-kit/primitives';

interface ToggleSwitchProps {
  id: string;
  value: number;
  values?: {
    on: string;
    off: string;
  };
  usePressed?: boolean;
  onControl: (nextValue: string) => void;
}

function ToggleSwitch({ id, value, values, onControl, usePressed = true }: ToggleSwitchProps) {
  const { isToggleOn: isOn, handleControlValueToggle } = useToggle(value, values);
  return (
    <Switch
      id={id}
      checked={isOn}
      onChange={handleControlValueToggle(onControl)}
      usePressed={usePressed}
    />
  );
}

export { ToggleSwitch };
export type { ToggleSwitchProps };
