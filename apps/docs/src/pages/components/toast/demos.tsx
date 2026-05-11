import { useState } from 'react';

import { Button, Toast } from '@xbotgo/ui';

export interface ToastDemoConfig {
  code: string;
  description: string;
  id: 'types' | 'position' | 'actions';
  label: string;
  title: string;
}

function TypesToastStage() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'success' | 'danger' | 'warning' | 'info' | 'loading'>('success');

  const trigger = (nextType: 'success' | 'danger' | 'warning' | 'info' | 'loading') => {
    setType(nextType);
    setOpen(false);
    requestAnimationFrame(() => setOpen(true));
  };

  return (
    <div className="toastDemoStack">
      <div className="toastDemoRow">
        <Button type="default" onClick={() => trigger('success')}>success</Button>
        <Button type="default" onClick={() => trigger('danger')}>danger</Button>
        <Button type="default" onClick={() => trigger('warning')}>warning</Button>
        <Button type="default" onClick={() => trigger('info')}>info</Button>
        <Button type="default" onClick={() => trigger('loading')}>loading</Button>
      </div>

      <Toast
        autoClose={type !== 'loading'}
        description="用于反馈当前操作的处理状态。"
        duration={2200}
        onClose={() => setOpen(false)}
        open={open}
        title={`当前状态: ${type}`}
        type={type}
      />
    </div>
  );
}

function PositionToastStage() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<'center' | 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'>('top-center');

  const trigger = (nextPosition: 'center' | 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right') => {
    setPosition(nextPosition);
    setOpen(false);
    requestAnimationFrame(() => setOpen(true));
  };

  return (
    <div className="toastDemoStack">
      <div className="toastDemoRow">
        <Button type="default" onClick={() => trigger('center')}>center</Button>
        <Button type="default" onClick={() => trigger('top-left')}>top-left</Button>
        <Button type="default" onClick={() => trigger('top-center')}>top-center</Button>
        <Button type="default" onClick={() => trigger('top-right')}>top-right</Button>
        <Button type="default" onClick={() => trigger('bottom-left')}>bottom-left</Button>
        <Button type="default" onClick={() => trigger('bottom-center')}>bottom-center</Button>
        <Button type="default" onClick={() => trigger('bottom-right')}>bottom-right</Button>
      </div>

      <Toast
        description="切换位置后再次触发即可预览。"
        duration={2400}
        onClose={() => setOpen(false)}
        open={open}
        position={position}
        title={`位置: ${position}`}
        type="info"
      />
    </div>
  );
}

function ActionsToastStage() {
  const [open, setOpen] = useState(false);
  const [autoClose, setAutoClose] = useState(true);
  const [closable, setClosable] = useState(false);

  const trigger = () => {
    setOpen(false);
    requestAnimationFrame(() => setOpen(true));
  };

  return (
    <div className="toastDemoStack">
      <div className="toastDemoRow">
        <Button type="default" onClick={() => setAutoClose((value) => !value)}>
          autoClose: {String(autoClose)}
        </Button>
        <Button type="default" onClick={() => setClosable((value) => !value)}>
          closable: {String(closable)}
        </Button>
        <Button onClick={trigger}>触发带操作按钮 Toast</Button>
      </div>

      <Toast
        action={{
          label: '撤销',
          onClick: () => setOpen(false),
        }}
        autoClose={autoClose}
        closable={closable}
        description="支持业务操作按钮；关闭按钮默认不显示，可按需开启。"
        duration={3000}
        onClose={() => setOpen(false)}
        open={open}
        title="保存成功"
        type="success"
      />
    </div>
  );
}

export const toastDemos: ToastDemoConfig[] = [
  {
    id: 'types',
    label: '状态类型',
    title: '五种状态反馈',
    description: '覆盖 success、danger、warning、info、loading 五种状态。',
    code: `import { useState } from 'react';
import { Button, Toast } from '@xbotgo/ui';

export function Demo() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'success' | 'danger' | 'warning' | 'info' | 'loading'>('success');

  const trigger = (nextType: typeof type) => {
    setType(nextType);
    setOpen(false);
    requestAnimationFrame(() => setOpen(true));
  };

  return (
    <>
      <Button onClick={() => trigger('success')}>success</Button>
      <Button onClick={() => trigger('danger')}>danger</Button>
      <Button onClick={() => trigger('warning')}>warning</Button>
      <Button onClick={() => trigger('info')}>info</Button>
      <Button onClick={() => trigger('loading')}>loading</Button>

      <Toast
        open={open}
        type={type}
        title={\`当前状态: \${type}\`}
        description="用于反馈当前操作的处理状态。"
        autoClose={type !== 'loading'}
        duration={2200}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`,
  },
  {
    id: 'position',
    label: '位置控制',
    title: '六个出现位置',
    description: '可将 Toast 放置在顶部或底部的左中右位置。',
    code: `import { useState } from 'react';
import { Button, Toast } from '@xbotgo/ui';

export function Demo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<'center' | 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'>('top-center');

  const trigger = (nextPosition: typeof position) => {
    setPosition(nextPosition);
    setOpen(false);
    requestAnimationFrame(() => setOpen(true));
  };

  return (
    <>
      <Button onClick={() => trigger('top-left')}>top-left</Button>
      <Button onClick={() => trigger('bottom-right')}>bottom-right</Button>

      <Toast
        open={open}
        type="info"
        title={\`位置: \${position}\`}
        description="切换位置后再次触发即可预览。"
        position={position}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`,
  },
  {
    id: 'actions',
    label: '行为配置',
    title: '自动关闭与可选操作',
    description: '支持操作按钮，关闭按钮默认不显示，可通过 closable 显式开启。',
    code: `import { useState } from 'react';
import { Button, Toast } from '@xbotgo/ui';

export function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>触发 Toast</Button>

      <Toast
        open={open}
        type="success"
        title="保存成功"
        description="支持业务操作按钮；关闭按钮默认不显示。"
        autoClose
        duration={3000}
        closable={false}
        action={{ label: '撤销', onClick: () => setOpen(false) }}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`,
  },
];

export function renderToastDemoStage(demoId: ToastDemoConfig['id']) {
  if (demoId === 'types') {
    return <TypesToastStage />;
  }

  if (demoId === 'position') {
    return <PositionToastStage />;
  }

  return <ActionsToastStage />;
}
