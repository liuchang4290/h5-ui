import { useEffect, useState } from 'react';

import { uiVersion } from '@xbotgo/ui';

import type { DocsPageId } from './app/docs-types';
import { defaultPageId, getDocsPage, isDocsPageId, sidebarGroups } from './app/routes';

function getCurrentPageId() {
  if (typeof window === 'undefined') {
    return defaultPageId;
  }

  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');

  return isDocsPageId(page) ? page : defaultPageId;
}

function updatePageUrl(pageId: DocsPageId, replace = false) {
  const params = new URLSearchParams(window.location.search);
  params.set('page', pageId);

  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  const historyMethod = replace ? 'replaceState' : 'pushState';

  window.history[historyMethod]({}, '', nextUrl);
}

export function App() {
  const [currentPageId, setCurrentPageId] = useState<DocsPageId>(() => getCurrentPageId());
  const currentPage = getDocsPage(currentPageId);
  const CurrentPage = currentPage.Page;

  useEffect(() => {
    if (!window.location.search.includes('page=')) {
      updatePageUrl(defaultPageId, true);
      setCurrentPageId(defaultPageId);
    }

    function handlePopState() {
      setCurrentPageId(getCurrentPageId());
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  function handleNavigate(pageId: DocsPageId) {
    if (pageId === currentPageId) {
      return;
    }

    updatePageUrl(pageId);
    setCurrentPageId(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="docsShell">
      <header className="docsHeader">
        <div className="brand">
          <span className="brandLogo">X</span>
          <span className="brandInfo">
            <strong>XbotGo UI</strong>
            <span>内部 H5 React 组件库</span>
          </span>
        </div>

        <div className="headerMeta">
          <span className="headerMetaPage">{currentPage.meta.title}</span>
          <span className="headerMetaDivider" aria-hidden="true" />
          <span>v{uiVersion}</span>
        </div>
      </header>

      <div className="docsBody">
        <aside className="docsSidebar">
          {sidebarGroups.map((group) => (
            <section key={group.title} className="sidebarGroup">
              <h2>{group.title}</h2>
              <div className="sidebarLinks">
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    className={item.pageId === currentPageId ? 'sidebarLink isActive' : 'sidebarLink'}
                    onClick={() => handleNavigate(item.pageId)}
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </aside>

        <main className="docsContent">
          <div className="docsContentInner">
            <CurrentPage />
          </div>
        </main>

        <aside className="docsToc">
          <div className="tocCard">
            <p>本页目录</p>
            <nav>
              {currentPage.meta.anchors.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
