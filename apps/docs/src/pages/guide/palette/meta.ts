import type { DocsPageMeta } from '../../../app/docs-types';

export const guidePaletteMeta: DocsPageMeta = {
  anchors: [
    { href: '#overview', label: '概述' },
    { href: '#tokens', label: '色板 Tokens' },
    { href: '#usage', label: '使用原则' },
  ],
  breadcrumb: '指南 / 设计色板',
  description:
    '这一页用于沉淀组件库当前使用的基础色值。首版先从按钮相关色板开始，后续随着组件数量增加再扩展为更完整的 tokens 体系。',
  id: 'guide/palette',
  sidebarGroup: '指南',
  sidebarLabel: '设计色板',
  title: '设计色板',
};
