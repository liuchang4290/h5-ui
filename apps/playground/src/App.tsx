import { Button, uiVersion } from '@xbotgo/ui';

import './index.css';

export function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">XbotGo UI</p>
        <h1>Button v0 样式基线已建立。</h1>
        <p className="description">
          首个组件已经按设计板里的主色系落地，主按钮使用 `#FF7500` 到 `#BD120E` 的渐变，搭配白色文字和适合
          App 内嵌 H5 的触达尺寸。
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
          <code>button styling baseline ready</code>
        </div>
      </section>

      <section className="panel showcase">
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
      </section>

      <section className="panel palette">
        <div className="section-header">
          <div>
            <p className="section-label">Palette</p>
            <h2>提取出来的设计色板</h2>
          </div>
          <p className="section-copy">这些值已经映射为 `ui` 包里的 CSS Variables，后续可以继续扩展到更多组件。</p>
        </div>

        <div className="swatches">
          <div className="swatch">
            <span className="swatch-chip swatch-gradient" />
            <code>#FF7500 → #BD120E</code>
          </div>
          <div className="swatch">
            <span className="swatch-chip swatch-dark" />
            <code>#333333</code>
          </div>
          <div className="swatch">
            <span className="swatch-chip swatch-mid" />
            <code>#666666</code>
          </div>
          <div className="swatch">
            <span className="swatch-chip swatch-light" />
            <code>#999999</code>
          </div>
          <div className="swatch">
            <span className="swatch-chip swatch-orange" />
            <code>#EC6104</code>
          </div>
          <div className="swatch">
            <span className="swatch-chip swatch-blue" />
            <code>#007AFF</code>
          </div>
        </div>
      </section>
    </main>
  );
}
