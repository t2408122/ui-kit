import nextra from 'nextra';

const withNextra = nextra({
  contentDirBasePath: '/docs',
});

export default withNextra({
  output: 'export',
  basePath: '/ui-kit',
  assetPrefix: '/ui-kit',
  trailingSlash: true,
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.tsx',
    },
  },
});
