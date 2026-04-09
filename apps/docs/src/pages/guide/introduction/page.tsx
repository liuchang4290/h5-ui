import { libraryGoals } from './content';
import { guideIntroductionMeta } from './meta';

export function GuideIntroductionPage() {
  return (
    <>
      <section className="docSection" id="overview">
        <div className="docBreadcrumb">{guideIntroductionMeta.breadcrumb}</div>
        <div className="docHeadingSingle">
          <h1>{guideIntroductionMeta.title}</h1>
          <p className="docDescription">{guideIntroductionMeta.description}</p>
        </div>
      </section>

      <section className="docSection" id="goals">
        <div className="sectionHeading">
          <h2>建设目标</h2>
          <p>组件库不只是提供可复用代码，更重要的是形成统一的设计语言和接入方式。</p>
        </div>

        <div className="summaryGrid">
          {libraryGoals.map((item) => (
            <article key={item.label} className="summaryCard">
              <span className="summaryLabel">{item.label}</span>
              <strong className="summaryValue">{item.value}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="docSection" id="structure">
        <div className="sectionHeading">
          <h2>仓库结构</h2>
          <p>当前仓库采用 monorepo 组织，组件库、文档站和本地 playground 分开维护，但仍在同一工作区联调。</p>
        </div>

        <div className="exampleBlock">
          <div className="exampleToolbar">
            <span>Workspace</span>
            <span>Structure</span>
          </div>
          <div className="exampleCode">
            <pre>
              <code>{`apps/
  docs/         # 自定义说明站
  playground/   # 本地联调
packages/
  ui/
    src/
      components/   # 组件实现
      foundations/  # tokens 与基础样式
      internal/     # 仅包内复用的工具
docs/
  decisions/    # 决策记录`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="docSection" id="workflow">
        <div className="sectionHeading">
          <h2>开发流程</h2>
          <p>文档页建议和组件本身同步建设，避免组件实现和使用说明脱节。</p>
        </div>

        <div className="overviewPanels singleColumn">
          <article className="overviewPanel">
            <div className="panelHeader">
              <p className="panelKicker">Step 1</p>
              <h2>确定组件边界</h2>
            </div>
            <p className="panelParagraph">先明确组件定位、视觉类型、交互状态和业务边界，避免实现过程中持续摇摆。</p>
          </article>

          <article className="overviewPanel">
            <div className="panelHeader">
              <p className="panelKicker">Step 2</p>
              <h2>实现并联调</h2>
            </div>
            <p className="panelParagraph">
              在 `packages/ui/src/components` 中实现组件，通过 `@xbotgo/ui` 的公开入口在 `apps/playground` 里验证交互和样式是否稳定。
            </p>
          </article>

          <article className="overviewPanel">
            <div className="panelHeader">
              <p className="panelKicker">Step 3</p>
              <h2>补齐文档说明</h2>
            </div>
            <p className="panelParagraph">
              在 `apps/docs` 中同步补上使用场景、示例代码、API 表和注意事项，形成真正可复用的组件文档。
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
