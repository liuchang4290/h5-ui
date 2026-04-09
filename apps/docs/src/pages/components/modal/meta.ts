import type { DocsPageMeta } from '../../../app/docs-types';

export const modalMeta: DocsPageMeta = {
  anchors: [
    { href: '#overview', label: '概述' },
    { href: '#import', label: '引入方式' },
    { href: '#examples', label: '代码演示' },
    { href: '#api', label: 'API' },
    { href: '#css-vars', label: '样式变量' },
  ],
  breadcrumb: '组件 / 反馈',
  description:
    '用于承载确认、提示和大内容说明场景。当前支持双操作 footer、右上角关闭按钮、自定义正文、宽度配置和父层 CSS 变量覆盖样式。',
  id: 'components/modal',
  sidebarGroup: '反馈',
  sidebarLabel: 'Modal 弹窗',
  title: 'Modal 弹窗',
};
