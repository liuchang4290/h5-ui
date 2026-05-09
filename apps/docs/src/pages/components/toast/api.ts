export const toastApiRows = [
  {
    name: 'open',
    type: 'boolean',
    defaultValue: '-',
    description: '控制 Toast 是否显示。',
  },
  {
    name: 'type',
    type: "'success' | 'danger' | 'warning' | 'info' | 'loading'",
    defaultValue: "'info'",
    description: '状态类型。',
  },
  {
    name: 'title',
    type: 'ReactNode',
    defaultValue: '-',
    description: '主标题文案。',
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: '-',
    description: '补充说明文案。',
  },
  {
    name: 'position',
    type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
    defaultValue: "'top-center'",
    description: 'Toast 出现的位置。',
  },
  {
    name: 'autoClose',
    type: 'boolean',
    defaultValue: 'true',
    description: '是否自动关闭。',
  },
  {
    name: 'duration',
    type: 'number',
    defaultValue: '2500',
    description: '自动关闭延迟（毫秒）。',
  },
  {
    name: 'action',
    type: 'ToastAction',
    defaultValue: '-',
    description: '可选操作按钮配置（例如“撤销”）。',
  },
  {
    name: 'closable',
    type: 'boolean',
    defaultValue: '`loading` 为 true，其它为 false',
    description: '是否显示右侧关闭按钮；显式传入时优先使用传入值。',
  },
  {
    name: 'onClose',
    type: '() => void',
    defaultValue: '-',
    description: '关闭回调（自动关闭、手动关闭都可触发）。',
  },
  {
    name: 'style',
    type: 'ToastStyleOverrides',
    defaultValue: '-',
    description: '支持常规内联样式，同时可通过 `--xb-toast-*` 变量覆盖样式。',
  },
];

export const toastCssVariableRows = [
  {
    name: '--xb-toast-bg',
    defaultValue: 'rgba(255, 255, 255, 0.96)',
    description: '卡片背景色。',
  },
  {
    name: '--xb-toast-border',
    defaultValue: 'rgba(148, 163, 184, 0.3)',
    description: '卡片边框颜色。',
  },
  {
    name: '--xb-toast-radius',
    defaultValue: '20px',
    description: '卡片圆角。',
  },
  {
    name: '--xb-toast-shadow',
    defaultValue: '内置默认值',
    description: '卡片阴影。',
  },
  {
    name: '--xb-toast-z-index',
    defaultValue: '1100',
    description: 'Toast 层级。',
  },
  {
    name: '--xb-toast-duration',
    defaultValue: '220ms',
    description: '入场动画时长。',
  },
  {
    name: '--xb-toast-success',
    defaultValue: '#16A34A',
    description: 'success 状态主色。',
  },
  {
    name: '--xb-toast-danger',
    defaultValue: '#DC2626',
    description: 'danger 状态主色。',
  },
  {
    name: '--xb-toast-warning',
    defaultValue: '#D97706',
    description: 'warning 状态主色。',
  },
  {
    name: '--xb-toast-info',
    defaultValue: '#2563EB',
    description: 'info 状态主色。',
  },
  {
    name: '--xb-toast-loading',
    defaultValue: '#475569',
    description: 'loading 状态主色。',
  },
  {
    name: '--xb-toast-text',
    defaultValue: '#1F2937',
    description: '文字颜色。',
  },
];
