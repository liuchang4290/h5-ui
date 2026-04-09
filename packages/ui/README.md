# @xbotgo/ui

面向公司内部 H5 场景的 React 组件库。

当前版本先提供基础的通用组件和统一视觉基线，适合 App 内嵌 H5、活动页和业务功能页接入。

## 安装

```bash
pnpm add @xbotgo/ui
```

`@xbotgo/ui` 依赖 `react` 和 `react-dom`，请确保业务项目已安装兼容版本。

## 引入样式

在应用入口引入一次全局样式：

```tsx
import '@xbotgo/ui/styles.css';
```

不建议在页面或单个组件内重复引入样式文件。

## 快速开始

```tsx
import { useState } from 'react';
import { Button, Modal } from '@xbotgo/ui';
import '@xbotgo/ui/styles.css';

export function DemoPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开弹窗</Button>

      <Modal
        open={open}
        title="确认删除"
        description="是否删除当前内容？"
        onClose={() => setOpen(false)}
        actions={[
          { key: 'cancel', label: '取消', onClick: () => setOpen(false) },
          { key: 'confirm', label: '确认', tone: 'primary', onClick: () => setOpen(false) },
        ]}
      />
    </>
  );
}
```

## 已提供组件

- `Button`
- `Modal`

## Button

```tsx
import { Button } from '@xbotgo/ui';

export function ButtonExample() {
  return (
    <>
      <Button type="primary">主按钮</Button>
      <Button type="secondary">次按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="text">文字按钮</Button>
    </>
  );
}
```

### Button 说明

- 默认宽度为 `100%`
- `type="text"` 默认按内容宽度展示
- 需要按内容自适应时，使用 `fit`
- 需要精确控制尺寸时，可传 `width` 和 `height`

```tsx
<Button fit>自适应按钮</Button>

<Button
  fit={{
    paddingBlock: 12,
    paddingInline: 20,
  }}
  type="secondary"
>
  自定义内边距
</Button>

<Button width={240} height={44}>
  固定尺寸
</Button>
```

## Modal

```tsx
import { Modal } from '@xbotgo/ui';

export function ModalExample() {
  return (
    <Modal
      open
      title="确认操作"
      description="请确认是否继续当前流程。"
      actions={[
        { key: 'cancel', label: '取消' },
        { key: 'confirm', label: '确认', tone: 'primary' },
      ]}
    />
  );
}
```

### Modal 说明

- `Modal` 是受控组件，业务侧维护 `open`
- 默认宽度为 `343px`
- 默认顶部内边距为 `16px`
- 默认 footer 高度为 `42px`
- 大内容弹窗可使用 `variant="feature"`
- 需要调整底部按钮区高度时，可使用 `footerHeight`

```tsx
<Modal
  open
  title="功能介绍"
  variant="feature"
  footerHeight={50}
  actions={[
    { key: 'cancel', label: '稍后再说' },
    { key: 'confirm', label: '立即开启', tone: 'primary' },
  ]}
>
  <div>这里放更复杂的内容区域。</div>
</Modal>
```

## 样式覆盖

所有组件都支持通过 `style` 传入 CSS Variables 做父级样式覆盖，优先使用公开变量，不建议直接覆盖内部类名。

```tsx
<Button
  style={{
    '--xb-button-radius': '14px',
    '--xb-button-height': '48px',
    '--xb-button-bg': 'linear-gradient(180deg, #ff8a00 0%, #e45100 100%)',
  }}
>
  自定义按钮
</Button>
```

```tsx
<Modal
  open
  title="自定义弹窗"
  style={{
    '--xb-modal-width': '320px',
    '--xb-modal-radius': '20px',
    '--xb-modal-feature-header-bg':
      'linear-gradient(180deg, rgba(236, 97, 4, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
  }}
/>
```

## 本地开发

```bash
pnpm install
pnpm --filter @xbotgo/ui build
pnpm --filter @xbotgo/docs dev
pnpm --filter @xbotgo/playground dev
```

## 发布前检查

```bash
pnpm typecheck
pnpm build
cd packages/ui
npm pack --dry-run
```
