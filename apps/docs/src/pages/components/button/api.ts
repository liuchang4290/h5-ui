export const buttonApiRows = [
  {
    name: 'type',
    type: `'primary' | 'secondary' | 'default' | 'text'`,
    defaultValue: `'primary'`,
    description: '定义按钮的视觉类型。',
  },
  {
    name: 'size',
    type: `'small' | 'middle' | 'large'`,
    defaultValue: `'middle'`,
    description: '定义按钮尺寸。',
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'false',
    description: '展示加载态并阻断点击。',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: '禁用按钮并移除交互反馈。',
  },
  // `block` 仍保留在组件代码里，这里先从文档 API 中隐藏。
  // {
  //   name: 'block',
  //   type: 'boolean',
  //   defaultValue: 'false',
  //   description: '显式声明整行布局；默认按钮已占满父容器，`fit` 模式除外。',
  // },
  {
    name: 'fit',
    type: 'ButtonFit',
    defaultValue: 'false',
    description: '开启内容自适应模式；也可传入 `{ paddingBlock, paddingInline }` 配置上下和左右内边距。',
  },
  {
    name: 'width',
    type: `CSSProperties['width']`,
    defaultValue: '-',
    description: '设置按钮宽度，并同步覆盖默认最小宽度约束。',
  },
  {
    name: 'height',
    type: `CSSProperties['height']`,
    defaultValue: '-',
    description: '设置按钮高度，并同步覆盖默认最小高度约束。',
  },
  {
    name: 'htmlType',
    type: `'button' | 'submit' | 'reset'`,
    defaultValue: `'button'`,
    description: '映射到原生 button 的 type。',
  },
  {
    name: 'style',
    type: 'ButtonStyleOverrides',
    defaultValue: '-',
    description: '支持常规内联样式，同时可通过 `--xb-button-*` 变量覆盖组件样式。',
  },
];

export const buttonCssVariableRows = [
  {
    name: '--xb-button-bg',
    defaultValue: '按 type 决定',
    description: '按钮背景。',
  },
  {
    name: '--xb-button-text',
    defaultValue: '按 type 决定',
    description: '按钮文字颜色。',
  },
  {
    name: '--xb-button-border',
    defaultValue: '按 type 决定',
    description: '按钮描边颜色。',
  },
  {
    name: '--xb-button-shadow',
    defaultValue: '按 type 决定',
    description: '按钮阴影。',
  },
  {
    name: '--xb-button-radius',
    defaultValue: '999px',
    description: '按钮圆角。',
  },
  {
    name: '--xb-button-height',
    defaultValue: '按 size 决定',
    description: '按钮高度。',
  },
  {
    name: '--xb-button-width',
    defaultValue: '100%（`text` 为 auto）',
    description: '按钮宽度。',
  },
  {
    name: '--xb-button-min-width',
    defaultValue: '按 size/type 决定',
    description: '按钮最小宽度。',
  },
  {
    name: '--xb-button-padding-block',
    defaultValue: '0px',
    description: '按钮上下内边距。',
  },
  {
    name: '--xb-button-padding-inline',
    defaultValue: '按 size/type 决定',
    description: '按钮左右内边距。',
  },
  {
    name: '--xb-button-font-size',
    defaultValue: '按 size 决定',
    description: '按钮字号。',
  },
  {
    name: '--xb-button-gap',
    defaultValue: '8px',
    description: '图标与文字间距。',
  },
  {
    name: '--xb-button-focus-outline',
    defaultValue: 'rgba(0, 122, 255, 0.2)',
    description: '键盘聚焦描边颜色。',
  },
  {
    name: '--xb-button-active-shadow',
    defaultValue: '内置默认值',
    description: '按下态阴影。',
  },
  {
    name: '--xb-button-active-transform',
    defaultValue: 'translateY(1px) scale(0.985)',
    description: '按下态位移与缩放。',
  },
  {
    name: '--xb-button-disabled-bg',
    defaultValue: '按 type 决定',
    description: '禁用态背景。',
  },
  {
    name: '--xb-button-disabled-text',
    defaultValue: '按 type 决定',
    description: '禁用态文字颜色。',
  },
  {
    name: '--xb-button-disabled-border',
    defaultValue: '按 type 决定',
    description: '禁用态描边颜色。',
  },
  {
    name: '--xb-button-disabled-shadow',
    defaultValue: 'none',
    description: '禁用态阴影。',
  },
];
