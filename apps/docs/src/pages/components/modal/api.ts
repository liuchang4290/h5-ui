export const modalApiRows = [
  {
    name: 'open',
    type: 'boolean',
    defaultValue: '-',
    description: '控制弹窗显示与隐藏。',
  },
  {
    name: 'title',
    type: 'ReactNode',
    defaultValue: '-',
    description: '弹窗标题。',
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: '-',
    description: '简要说明文案；适合确认类弹窗的正文。',
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: '-',
    description: '自定义内容区域，可放表单、说明文本或操作按钮。',
  },
  {
    name: 'actions',
    type: 'ModalAction[]',
    defaultValue: '-',
    description: '底部默认操作区；当前适合确认、取消这类分栏按钮。',
  },
  {
    name: 'footer',
    type: 'ReactNode | null',
    defaultValue: '-',
    description: '自定义底部内容；传 `null` 时不渲染 footer。',
  },
  {
    name: 'footerHeight',
    type: `CSSProperties['height']`,
    defaultValue: '-',
    description: '设置默认 footer 操作区高度，内部映射到 `--xb-modal-action-height`。',
  },
  {
    name: 'closable',
    type: 'boolean',
    defaultValue: 'false',
    description: '是否展示右上角关闭按钮。',
  },
  {
    name: 'maskClosable',
    type: 'boolean',
    defaultValue: 'false',
    description: '点击遮罩是否关闭弹窗。',
  },
  {
    name: 'titleAlign',
    type: `'left' | 'center'`,
    defaultValue: `'center'`,
    description: '标题对齐方式。',
  },
  {
    name: 'variant',
    type: `'default' | 'feature'`,
    defaultValue: `'default'`,
    description: '弹窗外观变体；`feature` 适合大内容说明类弹窗。',
  },
  {
    name: 'width',
    type: `CSSProperties['width']`,
    defaultValue: '-',
    description: '设置弹窗宽度。',
  },
  {
    name: 'onClose',
    type: '() => void',
    defaultValue: '-',
    description: '关闭动作回调，遮罩、关闭按钮和业务按钮都可复用。',
  },
  {
    name: 'style',
    type: 'ModalStyleOverrides',
    defaultValue: '-',
    description: '支持常规内联样式，同时可通过 `--xb-modal-*` 变量覆盖样式。',
  },
];

export const modalCssVariableRows = [
  {
    name: '--xb-modal-width',
    defaultValue: '343px',
    description: '弹窗宽度。',
  },
  {
    name: '--xb-modal-max-width',
    defaultValue: 'calc(100vw - 32px)',
    description: '弹窗最大宽度。',
  },
  {
    name: '--xb-modal-header-padding-top',
    defaultValue: '16px',
    description: '弹窗顶部内边距。',
  },
  {
    name: '--xb-modal-radius',
    defaultValue: '28px',
    description: '弹窗圆角。',
  },
  {
    name: '--xb-modal-bg',
    defaultValue: '#FFFFFF',
    description: '弹窗背景。',
  },
  {
    name: '--xb-modal-shadow',
    defaultValue: '内置默认值',
    description: '弹窗阴影。',
  },
  {
    name: '--xb-modal-mask-bg',
    defaultValue: 'rgba(15, 23, 42, 0.42)',
    description: '遮罩背景。',
  },
  {
    name: '--xb-modal-padding',
    defaultValue: '24px',
    description: '标题区和内容区的左右内边距。',
  },
  {
    name: '--xb-modal-body-gap',
    defaultValue: '16px',
    description: '正文区元素间距。',
  },
  {
    name: '--xb-modal-title',
    defaultValue: '#302B29',
    description: '标题颜色。',
  },
  {
    name: '--xb-modal-title-size',
    defaultValue: '17px',
    description: '标题字号。',
  },
  {
    name: '--xb-modal-text',
    defaultValue: '#49433F',
    description: '正文颜色。',
  },
  {
    name: '--xb-modal-divider',
    defaultValue: 'rgba(205, 211, 221, 0.92)',
    description: '分割线颜色。',
  },
  {
    name: '--xb-modal-feature-header-height',
    defaultValue: '64px',
    description: '大内容弹窗 header 高度。',
  },
  {
    name: '--xb-modal-feature-header-bg',
    defaultValue: 'linear-gradient(180deg, rgba(236, 97, 4, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
    description: '大内容弹窗 header 渐变背景。',
  },
  {
    name: '--xb-modal-feature-bg',
    defaultValue: '#F3F3F3',
    description: '大内容弹窗正文区背景。',
  },
  {
    name: '--xb-modal-close-color',
    defaultValue: 'rgba(39, 32, 29, 0.26)',
    description: '关闭按钮颜色。',
  },
  {
    name: '--xb-modal-action-height',
    defaultValue: '42px',
    description: '底部操作区按钮高度。',
  },
  {
    name: '--xb-modal-action-color',
    defaultValue: '#007AFF',
    description: '默认操作按钮文字颜色。',
  },
  {
    name: '--xb-modal-action-primary-color',
    defaultValue: '#007AFF',
    description: '主操作文字颜色。',
  },
  {
    name: '--xb-modal-action-danger-color',
    defaultValue: '#FF3B30',
    description: '危险操作文字颜色。',
  },
  {
    name: '--xb-modal-z-index',
    defaultValue: '1000',
    description: '弹窗层级。',
  },
];
