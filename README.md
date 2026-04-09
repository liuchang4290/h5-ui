# XbotGo UI Hybrid

内部 H5 React 组件库实验仓库，当前目标是先跑通组件库基础设施与首个组件 `Button`。

## Workspace

```text
apps/
  docs/         # 自定义说明站
  playground/   # 本地预览与联调
docs/
  decisions/    # 架构与工具决策记录
packages/
  ui/           # 组件库主包
    src/
      components/
      foundations/
      internal/
```

## Commands

```bash
pnpm install
pnpm dev
pnpm docs:dev
pnpm build
pnpm docs:build
pnpm typecheck
```

## Current Status

- `monorepo` 已初始化
- `@xbotgo/ui` 已可构建
- `apps/playground` 已可本地启动
- `apps/docs` 已切换为自定义 React 文档站
- 已落地首个 `Button` 组件样式基线

## Button Usage

```tsx
import { Button } from '@xbotgo/ui';
import '@xbotgo/ui/styles.css';

export function Example() {
  return (
    <Button type="primary" size="middle">
      立即使用
    </Button>
  );
}
```

文档方案决策见 `docs/decisions/0001-docs-stack-v0.md`。
