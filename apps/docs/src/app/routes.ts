import type { DocsPageId, DocsPageModule, SidebarGroup } from './docs-types';

import { ButtonPage } from '../pages/components/button/page';
import { buttonMeta } from '../pages/components/button/meta';
import { ModalPage } from '../pages/components/modal/page';
import { modalMeta } from '../pages/components/modal/meta';
import { GuideIntroductionPage } from '../pages/guide/introduction/page';
import { guideIntroductionMeta } from '../pages/guide/introduction/meta';
import { GuideQuickStartPage } from '../pages/guide/quickstart/page';
import { guideQuickStartMeta } from '../pages/guide/quickstart/meta';
import { GuidePalettePage } from '../pages/guide/palette/page';
import { guidePaletteMeta } from '../pages/guide/palette/meta';

export const defaultPageId: DocsPageId = guideQuickStartMeta.id;

const docsPages: DocsPageModule[] = [
  {
    Page: GuideIntroductionPage,
    meta: guideIntroductionMeta,
  },
  {
    Page: GuideQuickStartPage,
    meta: guideQuickStartMeta,
  },
  {
    Page: GuidePalettePage,
    meta: guidePaletteMeta,
  },
  {
    Page: ButtonPage,
    meta: buttonMeta,
  },
  {
    Page: ModalPage,
    meta: modalMeta,
  },
];

const docsPageMap = Object.fromEntries(docsPages.map((page) => [page.meta.id, page])) as Record<DocsPageId, DocsPageModule>;

const sidebarGroupOrder: SidebarGroup['title'][] = ['指南', '通用', '反馈'];

export const sidebarGroups: SidebarGroup[] = sidebarGroupOrder
  .map((title) => ({
    title,
    items: docsPages
      .filter((page) => page.meta.sidebarGroup === title)
      .map((page) => ({
        label: page.meta.sidebarLabel,
        pageId: page.meta.id,
      })),
  }))
  .filter((group) => group.items.length > 0);

export function getDocsPage(pageId: DocsPageId) {
  return docsPageMap[pageId];
}

export function isDocsPageId(value: string | null): value is DocsPageId {
  return value !== null && value in docsPageMap;
}
