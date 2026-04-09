import type { DocsPageMeta } from '../../../app/docs-types';

export const guideQuickStartMeta: DocsPageMeta = {
  anchors: [
    { href: '#overview', label: '概述' },
    { href: '#install', label: '安装引入' },
    { href: '#usage', label: '最小示例' },
    { href: '#debug', label: '本地联调' },
    { href: '#rules', label: '接入约定' },
  ],
  breadcrumb: '指南 / 快速开始',
  description:
    '这一页只回答业务项目如何接入：安装什么、入口怎么引样式、最小代码怎么写，以及本地联调和上线前要跑哪些命令。',
  id: 'guide/quickstart',
  sidebarGroup: '指南',
  sidebarLabel: '快速开始',
  title: '快速开始',
};
