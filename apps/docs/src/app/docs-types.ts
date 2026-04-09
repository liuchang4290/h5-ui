import type { ComponentType } from 'react';

export type DocsPageId =
  | 'guide/introduction'
  | 'guide/quickstart'
  | 'guide/palette'
  | 'components/button'
  | 'components/modal';

export interface PageAnchor {
  href: string;
  label: string;
}

export interface DocsPageMeta {
  anchors: PageAnchor[];
  breadcrumb: string;
  description: string;
  id: DocsPageId;
  sidebarGroup: '指南' | '通用' | '反馈';
  sidebarLabel: string;
  title: string;
}

export interface DocsPageModule {
  Page: ComponentType;
  meta: DocsPageMeta;
}

export interface SidebarGroup {
  items: Array<{
    label: string;
    pageId: DocsPageId;
  }>;
  title: DocsPageMeta['sidebarGroup'];
}
