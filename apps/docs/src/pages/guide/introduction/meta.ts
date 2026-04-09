import type { DocsPageMeta } from '../../../app/docs-types';

export const guideIntroductionMeta: DocsPageMeta = {
  anchors: [
    { href: '#overview', label: '概述' },
    { href: '#goals', label: '建设目标' },
    { href: '#structure', label: '仓库结构' },
    { href: '#workflow', label: '开发流程' },
  ],
  breadcrumb: '指南 / 介绍',
  description:
    'XbotGo UI 是一个面向公司内部 App 内嵌 H5 场景的 React 组件库。当前阶段先从 `Button` 开始，目标是跑通设计规范、工程结构、组件实现、文档说明和业务复用这条完整链路。',
  id: 'guide/introduction',
  sidebarGroup: '指南',
  sidebarLabel: '介绍',
  title: '介绍',
};
