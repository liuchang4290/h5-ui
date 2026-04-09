export const palette = [
  { label: 'Brand Gradient', value: '#FF7500 → #BD120E', className: 'swatchGradient' },
  { label: 'Text Primary', value: '#333333', className: 'swatchDark' },
  { label: 'Text Secondary', value: '#666666', className: 'swatchMid' },
  { label: 'Text Tertiary', value: '#999999', className: 'swatchLight' },
  { label: 'Accent Orange', value: '#EC6104', className: 'swatchOrange' },
  { label: 'Accent Blue', value: '#007AFF', className: 'swatchBlue' },
];

export const tokenUsageRules = [
  '主按钮的渐变色固定使用品牌主色系，不建议在业务层覆盖为其他渐变。',
  '正文和说明文字优先使用三级文字色体系，避免直接在组件里写散落的灰度值。',
  '功能色应先抽象成 token，再映射到组件，而不是在组件样式里直接写原始十六进制值。',
];
