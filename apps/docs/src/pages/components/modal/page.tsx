import { modalApiRows, modalCssVariableRows } from './api';
import { modalDemos, renderModalDemoStage } from './demos';
import { modalMeta } from './meta';

export function ModalPage() {
  return (
    <>
      <section className="docSection" id="overview">
        <div className="docBreadcrumb">{modalMeta.breadcrumb}</div>
        <div className="docHeading">
          <div className="docHeadingMain">
            <h1>{modalMeta.title}</h1>
            <p className="docDescription">{modalMeta.description}</p>
          </div>

          <div className="introPreview">
            <div className="introPreviewHeader">
              <span>Live Preview</span>
              <span>Modal</span>
            </div>
            <div className="introPreviewBody">{renderModalDemoStage('rename')}</div>
          </div>
        </div>
      </section>

      <section className="docSection" id="examples">
        <div className="sectionHeading">
          <h2>代码演示</h2>
          <p>先覆盖最常见的三类移动端弹窗，正文都支持自由扩展。</p>
        </div>

        <div className="exampleList">
          {modalDemos.map((demo) => (
            <article key={demo.id} className="exampleBlock exampleBlockDense">
              <div className="exampleIntro">
                <div className="exampleIntroMain">
                  <p className="exampleLabel">{demo.label}</p>
                  <h3>{demo.title}</h3>
                  <p className="exampleIntroDescription">{demo.description}</p>
                </div>
              </div>

              <div className="examplePreview">
                <div className="exampleToolbar">
                  <span>Preview</span>
                  <span>{demo.label}</span>
                </div>
                <div className="exampleCanvas">{renderModalDemoStage(demo.id)}</div>
              </div>

              <div className="exampleCode">
                <div className="exampleToolbar">
                  <span>Code</span>
                  <span>TSX</span>
                </div>
                <pre>
                  <code>{demo.code}</code>
                </pre>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="docSection" id="api">
        <div className="sectionHeading">
          <h2>API</h2>
          <p>当前已实现的 props 如下。</p>
        </div>

        <div className="apiTableWrap">
          <table className="apiTable">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {modalApiRows.map((row) => (
                <tr key={row.name}>
                  <td>
                    <code>{row.name}</code>
                  </td>
                  <td>
                    <code>{row.type}</code>
                  </td>
                  <td>
                    <code>{row.defaultValue}</code>
                  </td>
                  <td>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="docSection" id="css-vars">
        <div className="sectionHeading">
          <h2>样式变量</h2>
          <p>支持在父层通过 CSS 变量覆盖样式，适合业务侧按页面场景细调弹窗外观。</p>
        </div>

        <div className="apiTableWrap">
          <table className="apiTable">
            <thead>
              <tr>
                <th>Variable</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {modalCssVariableRows.map((row) => (
                <tr key={row.name}>
                  <td>
                    <code>{row.name}</code>
                  </td>
                  <td>
                    <code>{row.defaultValue}</code>
                  </td>
                  <td>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
