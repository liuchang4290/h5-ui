import type { DocsPageMeta } from '../../../app/docs-types';

export const toastMeta: DocsPageMeta = {
  anchors: [
    { href: '#overview', label: '概述' },
    { href: '#import', label: '引入方式' },
    { href: '#examples', label: '代码演示' },
    { href: '#api', label: 'API' },
    { href: '#css-vars', label: '样式变量' },
  ],
  breadcrumb: '组件 / 反馈',
  description:
    '用于轻量状态反馈。当前支持 success、danger、warning、info、loading 五种类型，支持位置配置、自动关闭时长、可选操作按钮以及可选关闭按钮。',
  id: 'components/toast',
  sidebarGroup: '反馈',
  sidebarLabel: 'Toast 轻提示',
  title: 'Toast 轻提示',
};
