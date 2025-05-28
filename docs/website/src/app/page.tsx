'use client';

import Link from 'next/link';
import styles from './page.module.css';

import React, { useRef, useEffect, useState } from 'react';

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [bgPos, setBgPos] = useState('50% 50%');

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const container = document.body;
      const rect = container.getElementsByTagName('main')[0].getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(1, x / rect.width));
      setBgPos(`${percent * 100}% 50%`);
    }
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', () => setBgPos('50% 50%'));
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', () => setBgPos('50% 50%'));
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.bgCircle} />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title} ref={titleRef} style={{ backgroundPosition: bgPos }}>
            Iocare UI Kit
          </h1>
          <p className={styles.description}>
            IoCare의 UI KIT를 이용하여
            <br />
            지금 바로 웹앱 개발을 시작해보세요!
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/docs" className={styles.ctaButton}>
              빠른 시작하기
            </Link>
            <Link
              href="https://github.com/t2408122/ui-kit"
              target="_blank"
              rel="noopener"
              className={styles.ctaSecondary}
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <h3>Based React</h3>
            <p>최신 React와 TypeScript로 개발되어 유지보수와 확장이 쉽습니다.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Complete UI</h3>
            <p>완성형 컴포넌트를 통해 빠른 개발속도와 일관된 UI/UX를 제공합니다.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Open Source</h3>
            <p>누구나 자유롭게 사용하고 기여할 수 있습니다.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
