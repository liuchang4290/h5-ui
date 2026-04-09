import { quickStartRules, quickStartValidationSteps } from './content';
import { guideQuickStartMeta } from './meta';

export function GuideQuickStartPage() {
  return (
    <>
      <section className="docSection" id="overview">
        <div className="docBreadcrumb">{guideQuickStartMeta.breadcrumb}</div>
        <div className="docHeadingSingle">
          <h1>{guideQuickStartMeta.title}</h1>
          <p className="docDescription">{guideQuickStartMeta.description}</p>
        </div>
      </section>

      <section className="docSection" id="install">
        <div className="sectionHeading">
          <h2>安装引入</h2>
          <p>业务项目只需要安装 UI 包，并在应用入口引入一次样式文件。</p>
        </div>

        <div className="exampleBlock">
          <div className="exampleToolbar">
            <span>Install</span>
            <span>Bash</span>
          </div>
          <div className="exampleCode">
            <pre>
              <code>{`pnpm add @xbotgo/ui`}</code>
            </pre>
          </div>
        </div>

        <div className="exampleBlock">
          <div className="exampleToolbar">
            <span>Entry</span>
            <span>TSX</span>
          </div>
          <div className="exampleCode">
            <pre>
              <code>{`import React from 'react';
import ReactDOM from 'react-dom/client';

import '@xbotgo/ui/styles.css';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="docSection" id="usage">
        <div className="sectionHeading">
          <h2>最小示例</h2>
          <p>先从按钮和弹窗两个基础组件接入，确认样式、状态和交互链路都正常。</p>
        </div>

        <div className="exampleBlock">
          <div className="exampleToolbar">
            <span>Usage</span>
            <span>TSX</span>
          </div>
          <div className="exampleCode">
            <pre>
              <code>{`import { useState } from 'react';
import { Button, Modal } from '@xbotgo/ui';

export function DemoPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开弹窗</Button>

      <Modal
        open={open}
        title="Delete video"
        description="Whether to delete the selected video ?"
        onClose={() => setOpen(false)}
        actions={[
          { key: 'cancel', label: 'Cancel', onClick: () => setOpen(false) },
          { key: 'confirm', label: 'Confirm', tone: 'primary', onClick: () => setOpen(false) },
        ]}
      />
    </>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="docSection" id="debug">
        <div className="sectionHeading">
          <h2>本地联调</h2>
          <p>组件开发时，建议同时开文档站和 playground，前者看说明，后者看自由组合场景。</p>
        </div>

        <div className="overviewPanels singleColumn">
          <article className="overviewPanel">
            <div className="panelHeader">
              <p className="panelKicker">Docs</p>
              <h3>说明站</h3>
            </div>
            <div className="exampleCode">
              <pre>
                <code>{`pnpm --filter @xbotgo/docs dev`}</code>
              </pre>
            </div>
          </article>

          <article className="overviewPanel">
            <div className="panelHeader">
              <p className="panelKicker">Playground</p>
              <h3>自由联调</h3>
            </div>
            <div className="exampleCode">
              <pre>
                <code>{`pnpm --filter @xbotgo/playground dev`}</code>
              </pre>
            </div>
          </article>
        </div>

        <div className="summaryGrid summaryGridMetrics">
          {quickStartValidationSteps.map((item) => (
            <article key={item.label} className="summaryCard summaryCardMetric">
              <span className="summaryLabel">{item.label}</span>
              <strong className="summaryValue">{item.value}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="docSection" id="rules">
        <div className="sectionHeading">
          <h2>接入约定</h2>
          <p>这几条约定先统一下来，后续业务接入会省很多解释成本。</p>
        </div>

        <div className="usageGrid singleColumn">
          <article className="usagePanel">
            <div className="panelHeader">
              <p className="panelKicker">Rules</p>
              <h3>推荐做法</h3>
            </div>
            <ul className="bulletList">
              {quickStartRules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
