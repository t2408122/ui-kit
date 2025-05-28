# Iocare UI Kit – Get Started

Iocare UI Kit는 React, TypeScript 기반의 컴포넌트와 테마를 제공하는 모노레포 형태의 오픈소스 UI 라이브러리입니다.

## 📦 프로젝트 구조

```
ui-kit/
├── packages/
│   ├── controls/   # 주요 컴포넌트 (ToggleSwitch 등)
│   └── themes/     # 스타일/테마(Switch 등)
├── docs/website/   # Next.js 기반 문서/사이트
```

## 🚀 빠른 시작

### 1. 설치

패키지는 아직 npm에 배포되어 있지 않으므로, 직접 빌드하여 사용하거나 workspace 경로를 지정해 사용할 수 있습니다.

```bash
# 예시: 패키지 직접 링크
pnpm add ../packages/controls ../packages/themes
```

### 2. 주요 컴포넌트 사용 예시

```tsx
import { ToggleSwitch } from '@iocare-ui-kit/controls';

function Example() {
  const [value, setValue] = useState(1); // 1: 켜짐, 0: 꺼짐
  return <ToggleSwitch id="my-toggle" value={value} onControl={(v) => setValue(Number(v))} />;
}
```

#### ToggleSwitch Props

| Prop       | Type           | Default | Description                 |
| ---------- | -------------- | ------- | --------------------------- |
| id         | string         |         | 고유 식별자                 |
| value      | number         |         | 현재 값 (1/0)               |
| values     | {on,off}       | 1/0     | 켜짐/꺼짐 값 커스텀         |
| usePressed | boolean        | true    | pressed 상태 data-attr 사용 |
| onControl  | (string)=>void |         | 값 변경 콜백                |

### 3. 테마/스타일 적용

Switch 등 일부 컴포넌트는 `@iocare-ui-kit/themes`의 스타일을 사용합니다. 필요시 아래처럼 import하세요:

```ts
import '@iocare-ui-kit/themes/index.css';
```

## 📝 문서/사이트 개발

문서 사이트는 Next.js 기반입니다:

```bash
cd docs/website
pnpm install
pnpm dev
```

로컬에서 <http://localhost:3000>으로 접속해 확인할 수 있습니다.

## 🧩 주요 기술 스택

- React 19, TypeScript, Vite, Next.js 14
- Vitest, Testing Library
- 모노레포(workspace) 구조

---

### 더 많은 컴포넌트와 활용법은 좌측 메뉴에서 확인하세요!
