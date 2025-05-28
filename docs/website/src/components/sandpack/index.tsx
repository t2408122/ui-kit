'use client';

import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackProviderProps,
  SandpackLayoutProps,
  CodeEditorProps,
  PreviewProps,
  SandpackCodeEditor,
} from '@codesandbox/sandpack-react';
import React from 'react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function useControlsCode() {
  const [code, setCode] = React.useState('');
  React.useEffect(() => {
    fetch(`${baseUrl}/controls-dist-index.js`)
      .then((res) => res.text())
      .then(setCode);
  }, []);
  return code;
}

function useThemesCssCode() {
  const [css, setCss] = React.useState('');
  React.useEffect(() => {
    fetch(`${baseUrl}/themes-dist-index.css`)
      .then((res) => res.text())
      .then(setCss);
  }, []);
  return css;
}

interface SandpackProps
  extends Omit<SandpackProviderProps, 'template' | 'customSetup' | 'options'> {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  providerOptions?: SandpackProviderProps;
  layoutOptions?: SandpackLayoutProps;
  editorOptions?: CodeEditorProps;
  previewOptions?: PreviewProps & {
    showConsole?: boolean;
    showConsoleButton?: boolean;
    layout?: 'preview' | 'tests' | 'console';
  };
}

export default function App(props: SandpackProps) {
  const controlsCode = useControlsCode();
  const themesCssCode = useThemesCssCode();
  if (!controlsCode || !themesCssCode) return <div>Loading controls or theme css...</div>;

  return (
    <SandpackProvider
      template="react-ts"
      {...props}
      files={{
        ...props.files,
        '/themes-dist-index.css': {
          hidden: true,
          code: themesCssCode,
        },
        '/App.tsx': {
          hidden: true,
          code: `
import React from 'react';
import Example from './Example'
import './themes-dist-index.css';

export default function App() {
    return (
        <Example />
    );
}
    `,
        },
        '/node_modules/@iocare-ui-kit/controls/package.json': {
          hidden: true,
          code: JSON.stringify({
            name: '@iocare-ui-kit/controls',
            main: './index.js',
            type: 'module',
          }),
        },
        '/node_modules/@iocare-ui-kit/controls/index.js': {
          hidden: true,
          code: controlsCode,
        },
      }}
    >
      <SandpackLayout>
        <SandpackPreview />
        <SandpackCodeEditor />
      </SandpackLayout>
    </SandpackProvider>
  );
}
