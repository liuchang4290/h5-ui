import { palette, tokenUsageRules } from './content';
import { guidePaletteMeta } from './meta';

export function GuidePalettePage() {
  return (
    <>
      <section className="docSection" id="overview">
        <div className="docBreadcrumb">{guidePaletteMeta.breadcrumb}</div>
        <div className="docHeadingSingle">
          <h1>{guidePaletteMeta.title}</h1>
          <p className="docDescription">{guidePaletteMeta.description}</p>
        </div>
      </section>

      <section className="docSection" id="tokens">
        <div className="sectionHeading">
          <h2>色板 Tokens</h2>
          <p>颜色值已经映射为 `packages/ui/src/foundations` 中的 CSS Variables，供组件和文档页统一复用。</p>
        </div>

        <div className="overviewPanels singleColumn">
          <article className="overviewPanel">
            <div className="swatchList">
              {palette.map((item) => (
                <div key={item.label} className="swatchRow">
                  <span className={`swatchChip ${item.className}`} />
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="docSection" id="usage">
        <div className="sectionHeading">
          <h2>使用原则</h2>
          <p>色板不仅是视觉参考，也用于约束组件实现方式，避免后续出现“颜色散落在各个组件里”的问题。</p>
        </div>

        <div className="usageGrid singleColumn">
          <article className="usagePanel">
            <div className="panelHeader">
              <p className="panelKicker">Rules</p>
              <h3>设计约束</h3>
            </div>
            <ul className="bulletList">
              {tokenUsageRules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
