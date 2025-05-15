'use client';

import { Flex, Text, Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes</Text>
      <Button>Let&apos;s go</Button>
      <Link href="/components/button">Button</Link>
    </Flex>
  );
}
