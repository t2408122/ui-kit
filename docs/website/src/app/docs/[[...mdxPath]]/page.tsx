import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents as getMDXComponents } from '../../../mdx-components';
import type { Metadata } from 'next';

type MDXPath = string[];

interface PageProps {
  params: Promise<{
    mdxPath: MDXPath;
  }>;
}

export const generateStaticParams = generateStaticParamsFor('mdxPath');

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { metadata } = await importPage(resolvedParams.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents({}).wrapper;

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const result = await importPage(resolvedParams.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent params={resolvedParams} />
    </Wrapper>
  );
}
