export const quickStartRules = [
  '样式文件只需要在应用入口引入一次，不要在每个页面重复引入。',
  '按钮默认宽度为 `100%`，需要按内容自适应时使用 `fit`。',
  'Modal 是受控组件，业务侧自行维护 `open` 状态和关闭逻辑。',
  '组件样式优先通过公开 props 和 `--xb-*` CSS 变量扩展，不建议直接覆盖内部类名。',
];

export const quickStartValidationSteps = [
  {
    label: '本地预览',
    value: 'docs / playground',
    description: '组件开发完成后，先在说明站和 playground 里一起确认视觉和交互。',
  },
  {
    label: '类型检查',
    value: 'pnpm typecheck',
    description: '提测前先跑类型检查，避免发包后业务项目才暴露基础类型问题。',
  },
  {
    label: '构建验证',
    value: 'pnpm build',
    description: '发布前确认 UI 包、文档站和本地预览都能正常构建产物。',
  },
];
