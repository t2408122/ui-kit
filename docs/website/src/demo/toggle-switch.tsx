'use client';

import React from 'react';
import { ToggleSwitch } from '@iocare-ui-kit/controls';

function ToggleSwtich() {
  const [value, setValue] = React.useState(0);

  return (
    <ToggleSwitch
      id="toggle-switch"
      value={value}
      onControl={(newValue) => {
        console.log('hello', newValue);
        setValue(Number(newValue));
      }}
    />
  );
}

export default ToggleSwtich;
