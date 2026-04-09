import { buttonApiRows, buttonCssVariableRows } from './api';
import { buttonDemos, renderButtonDemoStage } from './demos';
import { buttonMeta } from './meta';

export function ButtonPage() {
  return (
    <>
      <section className="docSection" id="overview">
        <div className="docBreadcrumb">{buttonMeta.breadcrumb}</div>
        <div className="docHeading">
          <div className="docHeadingMain">
            <h1>{buttonMeta.title}</h1>
            <p className="docDescription">{buttonMeta.description}</p>
          </div>

          <div className="introPreview">
            <div className="introPreviewHeader">
              <span>Live Preview</span>
              <span>Button</span>
            </div>
            <div className="introPreviewBody">{renderButtonDemoStage('types')}</div>
          </div>
        </div>
      </section>

      <section className="docSection" id="import">
        <div className="sectionHeading">
          <h2>引入方式</h2>
          <p>组件按需从 UI 包导入，样式文件只需要在应用入口引入一次。</p>
        </div>

        <div className="exampleBlock">
          <div className="exampleToolbar">
            <span>Import</span>
            <span>TSX</span>
          </div>
          <div className="exampleCode">
            <pre>
              <code>{`import '@xbotgo/ui/styles.css';
import { Button } from '@xbotgo/ui';`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="docSection" id="examples">
        <div className="sectionHeading">
          <h2>代码演示</h2>
          <p>只保留常用场景示例，方便直接复制使用。</p>
        </div>

        <div className="exampleList">
          {buttonDemos.map((demo) => (
            <article key={demo.id} className="exampleBlock exampleBlockDense">
              <div className="exampleIntro">
                <div className="exampleIntroMain">
                  <p className="exampleLabel">{demo.label}</p>
                  <h3>{demo.title}</h3>
                  <p className="exampleIntroDescription">{demo.description}</p>
                </div>
              </div>

              {demo.notes?.length ? (
                <div className="exampleNotes">
                  {demo.notes.map((note) => (
                    <div key={note.label} className="exampleNoteCard">
                      <span>{note.label}</span>
                      <p>
                        背景 <code>{note.background}</code>
                      </p>
                      <p>
                        文字 <code>{note.text}</code>
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="examplePreview">
                <div className="exampleToolbar">
                  <span>Preview</span>
                  <span>{demo.label}</span>
                </div>
                <div className="exampleCanvas">{renderButtonDemoStage(demo.id)}</div>
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
              {buttonApiRows.map((row) => (
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
          <p>支持在父层通过 CSS 变量覆盖样式，后续组件也会沿用同样的覆盖方式。</p>
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
              {buttonCssVariableRows.map((row) => (
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
