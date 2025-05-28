import nextra from 'nextra';
import { remarkSandpack } from 'remark-sandpack';

const withNextra = nextra({
  contentDirBasePath: '/docs',
  mdxOptions: {
    remarkPlugins: [remarkSandpack],
  },
});

export default withNextra({
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
});
