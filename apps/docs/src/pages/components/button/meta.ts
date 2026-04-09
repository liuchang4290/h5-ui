import type { DocsPageMeta } from '../../../app/docs-types';

export const buttonMeta: DocsPageMeta = {
  anchors: [
    { href: '#overview', label: '概述' },
    { href: '#examples', label: '代码演示' },
    { href: '#api', label: 'API' },
    { href: '#css-vars', label: '样式变量' },
  ],
  breadcrumb: '组件 / 通用',
  description:
    '用于页面主操作。当前支持 `primary`、`secondary`、`default`、`text` 四种类型，以及 `loading`、`disabled`、`fit`、`width`、`height`、尺寸配置和父层 CSS 变量覆盖样式。',
  id: 'components/button',
  sidebarGroup: '通用',
  sidebarLabel: 'Button 按钮',
  title: 'Button 按钮',
};
