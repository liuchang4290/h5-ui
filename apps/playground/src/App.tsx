import { useEffect, useMemo, useState } from 'react';

import { Button, Loading, Modal, Toast, uiVersion } from '@xbotgo/ui';

import './index.css';

type ComponentId = 'button' | 'loading' | 'modal' | 'toast';
type ToastType = 'success' | 'danger' | 'warning' | 'info' | 'loading';
type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'center';

const COMPONENTS: Array<{ id: ComponentId; label: string; description: string }> = [
  { id: 'button', label: 'Button', description: '按钮样式与交互状态' },
  { id: 'loading', label: 'Loading', description: '转圈加载指示器' },
  { id: 'modal', label: 'Modal', description: '弹窗结构、动作区与遮罩行为' },
  { id: 'toast', label: 'Toast', description: '轻提示状态、位置与自动关闭' },
];

function readHash(): ComponentId {
  const value = window.location.hash.replace('#', '') as ComponentId;
  return COMPONENTS.some((item) => item.id === value) ? value : 'button';
}

function ButtonPreview() {
  return (
    <>
      <div className="section-header">
        <div>
          <p className="section-label">Preview</p>
          <h2>按钮状态预览</h2>
        </div>
        <p className="section-copy">主按钮渐变色取自 `#FF7500` 到 `#BD120E`，前景文字为白色。</p>
      </div>

      <div className="button-grid">
        <Button>立即预约</Button>
        <Button type="secondary">次级操作</Button>
        <Button type="default">默认按钮</Button>
        <Button type="text">文字按钮</Button>
        <Button size="small">小号按钮</Button>
        <Button size="large">大号按钮</Button>
        <Button loading>提交中</Button>
        <Button disabled>不可点击</Button>
      </div>

      <div className="block-demo">
        <Button block size="large">
          通栏按钮
        </Button>
      </div>
    </>
  );
}

function ModalPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="section-header">
        <div>
          <p className="section-label">Preview</p>
          <h2>Modal 交互预览</h2>
        </div>
        <p className="section-copy">支持遮罩、ESC 关闭、动作按钮和 feature 变体。</p>
      </div>

      <div className="modal-actions">
        <Button onClick={() => setOpen(true)}>打开默认弹窗</Button>
      </div>

      <Modal
        actions={[
          { label: '取消', onClick: () => setOpen(false) },
          { label: '确认', tone: 'primary', onClick: () => setOpen(false) },
        ]}
        closable
        description="这是一条弹窗内容文案，可用于确认型交互。"
        maskClosable
        onClose={() => setOpen(false)}
        open={open}
        title="确认操作"
      />
    </>
  );
}

function LoadingPreview() {
  const [spinning, setSpinning] = useState(true);

  return (
    <>
      <div className="section-header">
        <div>
          <p className="section-label">Preview</p>
          <h2>Loading 转圈效果</h2>
        </div>
        <p className="section-copy">支持 small / middle / large 尺寸和 spinning 开关。</p>
      </div>

      <div className="loading-demo">
        <div className="loading-demo-row">
          <Loading size="small" spinning={spinning} />
          <Loading size="middle" spinning={spinning} />
          <Loading size="large" spinning={spinning} />
        </div>

        <div className="loading-demo-row">
          <Button type="default" onClick={() => setSpinning((value) => !value)}>
            spinning: {String(spinning)}
          </Button>
        </div>
      </div>
    </>
  );
}

const TOAST_TYPES: ToastType[] = ['success', 'danger', 'warning', 'info', 'loading'];
const TOAST_POSITIONS: ToastPosition[] = [
  'center',
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

function ToastPreview() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ToastType>('success');
  const [position, setPosition] = useState<ToastPosition>('top-center');
  const [autoClose, setAutoClose] = useState(true);
  const [withAction, setWithAction] = useState(false);
  const [closable, setClosable] = useState(false);

  return (
    <>
      <div className="section-header">
        <div>
          <p className="section-label">Preview</p>
          <h2>Toast 状态与行为</h2>
        </div>
        <p className="section-copy">支持 success、danger、warning、info、loading 和 6 个位置。</p>
      </div>

      <div className="toast-config">
        <div className="toast-config-row">
          <span className="label">类型</span>
          <div className="chips">
            {TOAST_TYPES.map((item) => (
              <button
                className={`chip ${item === type ? 'is-active' : ''}`}
                key={item}
                onClick={() => setType(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="toast-config-row">
          <span className="label">位置</span>
          <div className="chips">
            {TOAST_POSITIONS.map((item) => (
              <button
                className={`chip ${item === position ? 'is-active' : ''}`}
                key={item}
                onClick={() => setPosition(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="toast-config-row">
          <label className="toggle">
            <input checked={autoClose} onChange={(event) => setAutoClose(event.target.checked)} type="checkbox" />
            自动关闭 (loading 时会保持常驻)
          </label>
          <label className="toggle">
            <input checked={withAction} onChange={(event) => setWithAction(event.target.checked)} type="checkbox" />
            显示操作按钮
          </label>
          <label className="toggle">
            <input checked={closable} onChange={(event) => setClosable(event.target.checked)} type="checkbox" />
            显示关闭按钮
          </label>
        </div>
      </div>

      <div className="modal-actions">
        <Button
          onClick={() => {
            setOpen(false);
            requestAnimationFrame(() => setOpen(true));
          }}
        >
          触发 Toast
        </Button>
      </div>

      <Toast
        action={withAction ? { label: '撤销', onClick: () => setOpen(false) } : undefined}
        autoClose={autoClose}
        closable={closable}
        description="这是一条用于反馈操作状态的提示文案。"
        duration={2200}
        onClose={() => setOpen(false)}
        open={open}
        position={position}
        title={`当前状态: ${type}`}
        type={type}
      />
    </>
  );
}

export function App() {
  const [activeId, setActiveId] = useState<ComponentId>('button');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveId(readHash());
    };

    setActiveId(readHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const activeComponent = useMemo(() => COMPONENTS.find((item) => item.id === activeId) ?? COMPONENTS[0], [activeId]);

  const renderPreview = () => {
    if (activeId === 'loading') {
      return <LoadingPreview />;
    }
    if (activeId === 'toast') {
      return <ToastPreview />;
    }
    if (activeId === 'modal') {
      return <ModalPreview />;
    }
    return <ButtonPreview />;
  };

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">XbotGo UI</p>
        <h1>组件 Playground 总览</h1>
        <p className="description">
          这里是运行时统一入口：左侧切换组件，右侧查看对应交互 demo。后续新增组件时，保持这个结构即可持续扩展。
        </p>
      </section>

      <section className="panel">
        <div className="row">
          <span className="label">包名</span>
          <code>@xbotgo/ui</code>
        </div>
        <div className="row">
          <span className="label">版本</span>
          <code>{uiVersion}</code>
        </div>
        <div className="row">
          <span className="label">状态</span>
          <code>{activeComponent.label} previewing</code>
        </div>
      </section>

      <section className="panel explorer">
        <aside className="component-nav" aria-label="组件导航">
          {COMPONENTS.map((item) => (
            <a
              className={`component-link ${item.id === activeId ? 'is-active' : ''}`}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setActiveId(item.id)}
            >
              <span className="component-link-title">{item.label}</span>
              <span className="component-link-desc">{item.description}</span>
            </a>
          ))}
        </aside>
        <div className="preview-area">{renderPreview()}</div>
      </section>

      <section className="panel palette">
        <div className="section-header">
          <div>
            <p className="section-label">How To Expand</p>
            <h2>新增组件的最小步骤</h2>
          </div>
        </div>
        <div className="steps">
          <div className="step">1. 在 `COMPONENTS` 里新增组件 id 和名称</div>
          <div className="step">2. 新建一个 `{`{Component}Preview`}` 演示组件</div>
          <div className="step">3. 在 `renderPreview()` 中接入渲染分支</div>
        </div>
      </section>
    </main>
  );
}
