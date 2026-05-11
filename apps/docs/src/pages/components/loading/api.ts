export const loadingApiRows = [
  {
    name: 'size',
    type: "'small' | 'middle' | 'large'",
    defaultValue: "'middle'",
    description: '加载器尺寸。',
  },
  {
    name: 'spinning',
    type: 'boolean',
    defaultValue: 'true',
    description: '是否执行旋转动画。',
  },
  {
    name: 'className',
    type: 'string',
    defaultValue: '-',
    description: '自定义类名。',
  },
  {
    name: 'style',
    type: 'LoadingStyleOverrides',
    defaultValue: '-',
    description: '支持常规内联样式，同时可通过 `--xb-loading-*` 变量覆盖样式。',
  },
];

export const loadingCssVariableRows = [
  {
    name: '--xb-loading-size',
    defaultValue: '22px',
    description: '加载器尺寸。',
  },
  {
    name: '--xb-loading-color',
    defaultValue: '#475569',
    description: '主色（顶部描边颜色）。',
  },
  {
    name: '--xb-loading-stroke-width',
    defaultValue: '2px',
    description: '描边粗细。',
  },
  {
    name: '--xb-loading-duration',
    defaultValue: '900ms',
    description: '旋转动画时长。',
  },
];
