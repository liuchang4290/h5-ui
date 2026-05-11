import type { DocsPageMeta } from '../../../app/docs-types';

export const loadingMeta: DocsPageMeta = {
  anchors: [
    { href: '#overview', label: '概述' },
    { href: '#import', label: '引入方式' },
    { href: '#examples', label: '代码演示' },
    { href: '#api', label: 'API' },
    { href: '#css-vars', label: '样式变量' },
  ],
  breadcrumb: '组件 / 通用',
  description: '用于表示加载中状态。当前提供转圈样式，支持 small/middle/large 尺寸、动画开关与 CSS 变量覆盖。',
  id: 'components/loading',
  sidebarGroup: '通用',
  sidebarLabel: 'Loading 加载中',
  title: 'Loading 加载中',
};
