'use client';

import { use } from 'react';
import { ToggleSwitch } from '@iocare-ui-kit/controls';
import React from 'react';

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);

  const [value, setValue] = React.useState(0);

  return (
    <div>
      {resolvedParams.slug}
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

export default Page;
