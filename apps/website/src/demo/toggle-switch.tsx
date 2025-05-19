'use client';

import { ToggleSwitch } from '@iocare-ui-kit/controls';
import React from 'react';

function ToggleSwtich() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <ToggleSwitch
        id="toggle-switch"
        value={value}
        onControl={(newValue) => {
          console.log('hello', newValue);
          setValue(Number(newValue));
        }}
      />
    </div>
  );
}

export default ToggleSwtich;
