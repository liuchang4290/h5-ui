# H5 React 组件库 V0 方案文档

## 1. Executive Summary

### Problem Statement

公司内部 H5 项目缺少统一的 React 组件基座，导致 UI 风格不一致、相同组件重复开发、业务接入成本偏高，也不利于后续多个业务线复用。

当前已有部分设计稿，但组件覆盖不完整。项目的第一阶段目标不是一次性建设完整组件体系，而是先通过 `Button` 跑通一条从设计约束到工程产物再到业务接入的最小闭环。

### Proposed Solution

采用 `monorepo` 方式建设内部 H5 React 组件库，第一阶段只交付一个可复用、可构建、可发布的 `Button` 组件，同时把后续扩展需要的基础设施一起搭好，包括目录结构、样式变量、构建产物、示例预览和发包能力。

组件库源码以 `workspace` 管理，组件产物保持标准 npm package 形态。这样后续既可以在同一仓库内被业务工程直接依赖，也可以在准备好内部制品库后发布为私有 npm 包。

### Success Criteria

- `monorepo` 基础结构完成，能承载后续多个 package 和 demo 应用。
- `Button` 组件完成设计稿映射，至少支持 `type`、`size`、`disabled`、`loading`、`block` 等核心能力。
- 组件库可以成功构建出可分发产物，具备标准类型声明和样式产物。
- `Button` 能在一个本地 demo / playground 中被正常引用和展示。
- 形成一份可执行的组件开发规范，作为后续新增组件的模板。

## 2. User Experience & Functionality

### User Personas

- 前端开发：需要直接复用标准组件，减少重复开发和样式调整。
- 前端负责人/基建维护者：需要统一组件规范、目录结构和发布方式。
- 设计师：需要组件实现尽量稳定映射设计稿，减少跨项目 UI 偏差。
- 业务线团队：需要未来能低成本接入同一套基础组件。

### User Stories

- 作为前端开发，我希望直接引入统一的 `Button` 组件，这样我不需要在每个 H5 项目里重复写按钮样式和状态逻辑。
- 作为组件库维护者，我希望组件库使用 `monorepo` 管理，这样我可以在同一仓库内维护组件源码、演示应用和后续工具包。
- 作为前端负责人，我希望组件产物具备可发包能力，这样后续多个业务线都可以稳定复用。
- 作为设计协作者，我希望 `Button` 的视觉规范、交互状态和尺寸定义被明确下来，这样后续扩展其他组件时不会出现规则漂移。

### Acceptance Criteria

- 仓库结构中至少包含一个组件 package 和一个预览/验证应用。
- `Button` 对外 API 清晰，支持常见移动端 H5 场景下的展示和交互。
- 组件样式不依赖业务项目私有样式约定，具备独立可用性。
- 组件库构建结果包含 `esm` 产物、类型声明和样式文件。
- 新增组件时可以复用同一套目录结构、命名规则和开发流程。

### Non-Goals

- `v0` 不追求一次性建设完整组件库。
- `v0` 不引入复杂主题系统、多品牌换肤或深色模式。
- `v0` 不实现业务组件，例如商品卡、支付面板、地址选择器。
- `v0` 不优先建设重型文档体系，例如偏平台化的一体式说明站。
- `v0` 不承诺覆盖所有 App WebView 边缘兼容性问题，只保证主流内嵌 H5 场景可用。

## 3. AI System Requirements

本项目不涉及 AI 功能，当前章节不适用。

## 4. Technical Specifications

### Architecture Overview

`v0` 推荐采用轻量 `monorepo`，优先保证结构清晰，不急于引入过重的基建工具。

推荐方案：

- 包管理：`pnpm`
- workspace 管理：`pnpm-workspace.yaml`
- 组件源码：`React + TypeScript`
- 组件构建：`tsup`
- 本地预览：`Vite`
- 样式方案：`CSS Modules + CSS Variables`
- 代码规范：`ESLint + Prettier`
- 版本与发版：`Changesets` 或先手动版本，`v0` 阶段可先不自动化

### Why Monorepo

选择 `monorepo` 的原因：

- 组件源码、demo 应用、未来 token 包和工具包可以统一管理。
- 本地联调更简单，适合内部组件库早期快速迭代。
- 后续如果需要拆分 `ui`、`icons`、`tokens`、`hooks`，结构更平滑。
- 对“先做一个 `Button`，后续逐步扩展”的节奏更友好。

### Recommended Repository Structure

```text
xbotgo-ui-hybrid/
  apps/
    playground/          # 本地演示与联调应用
  packages/
    ui/                  # 组件库主包
  docs/
    decisions/           # 可选，记录架构决策
  package.json
  pnpm-workspace.yaml
  tsconfig.base.json
```

当组件数量增加后，可再扩展：

```text
packages/
  ui/                    # 基础组件
  tokens/                # 设计变量
  utils/                 # 通用工具
  hooks/                 # 通用 hooks
```

### Package Responsibilities

#### `packages/ui`

职责：

- 输出内部 H5 React 基础组件
- 管理组件 API、样式、类型定义
- 维护统一的导出入口

`v0` 范围：

- 只包含 `Button`
- 沉淀通用目录约定和组件模板

#### `apps/playground`

职责：

- 本地预览组件
- 验证组件接入方式
- 承载最基础的使用示例

`v0` 不追求完整文档站，只要能稳定展示组件状态即可。

### Styling Strategy

推荐使用 `CSS Modules + CSS Variables`，原因如下：

- 对内嵌 H5 足够稳定，不依赖运行时 CSS-in-JS 注入。
- 样式边界清晰，默认隔离性好。
- 后续可以通过 CSS Variables 逐步过渡到 design tokens。
- 对按钮这类基础组件来说，开发成本和维护成本更低。

`v0` 建议仅定义少量基础变量：

- 颜色：主色、文本色、禁用色、边框色、白色
- 圆角：默认圆角、胶囊圆角
- 字号：小、中、大
- 高度：小、中、大
- 间距：左右 padding、图标间距

### Design Token Strategy

虽然设计稿目前只有部分组件，但 `v0` 仍然建议先抽一层最小 tokens，避免后续按钮实现直接写死视觉值。

推荐分层：

- `global tokens`：品牌主色、语义色、字号、圆角、阴影
- `component tokens`：按钮专属高度、字体、背景、边框、禁用态透明度

`v0` 不单独拆 `tokens` package，可以先在 `packages/ui` 内维护，等组件数量增加后再独立。

### Button Scope

`Button` 是 `v0` 唯一组件，但它要承担“组件模板”的职责，因此 API 不宜过简，也不宜一次做太重。

#### Recommended Props

- `type`: `primary | secondary | default | text`
- `size`: `small | middle | large`
- `disabled`: `boolean`
- `loading`: `boolean`
- `block`: `boolean`
- `children`: `ReactNode`
- `className`: `string`
- `style`: `CSSProperties`
- `onClick`: 标准 React 点击事件

可延后到 `v0.1` 的能力：

- `icon`
- `danger`
- `ghost`
- `shape`
- `href`

#### Recommended States

- 默认态
- 按下态
- 禁用态
- 加载态
- 通栏态

#### Recommended Visual Rules

- 移动端点击区域要足够大，优先保证可触达性。
- 按钮高度和字号应与设计稿一致，不允许业务层二次随意改造基础尺寸。
- 加载态要阻断重复点击。
- 禁用态不仅要做视觉弱化，还要移除交互反馈。
- 按钮文案需要兼容中文常见长度，避免默认样式一压就变形。

### Component Development Convention

为了让 `Button` 成为模板组件，建议统一以下规范：

- 每个组件独立目录
- 组件文件、样式文件、类型文件按约定命名
- 统一从包级 `index.ts` 导出
- 组件必须保留 `className` 和 `style` 扩展点
- 尽量不在基础组件中引入业务语义

建议目录形态：

```text
packages/ui/src/
  components/
    button/
      Button.tsx
      style.css
      types.ts
      index.ts
  foundations/
    tokens.css
  internal/
    cx.ts
  index.ts
  styles.css
```

### Build & Output Strategy

`v0` 目标不是追求所有格式全覆盖，而是先保证“可构建、可引用、可发包”。

建议构建产物：

- `esm`
- 类型声明文件 `d.ts`
- 样式文件

可选：

- `cjs` 可在确有历史项目兼容需求时再补

### Publishing Strategy

你前面提到“第三个问题没太懂”，这里把“发包方式”直接解释清楚。

组件库最终有两种常见接入方式：

- 方式 A：业务项目和组件库都在同一个 `monorepo`，业务项目通过 workspace 直接引用
- 方式 B：组件库单独产出 npm 包，业务项目通过内部私有 npm 安装

当前推荐策略：

- 源码管理使用 `monorepo`
- 组件产物保持标准 npm package 结构
- `v0` 先完成本地打包验证
- 后续如果公司已有私有制品库，再接入私有 npm 发布流程

这样做的好处是，当前不需要被发布平台卡住，同时不会把后续跨仓库复用的路堵死。

### Integration Points

- 设计输入：现有部分设计稿，`Button` 需优先与设计稿对齐
- 使用方：公司内部 H5 React 项目
- 运行环境：App 内嵌 H5 WebView
- 发布目标：短期先本地打包验证，后续接入内部 npm 仓库

### Security & Privacy

组件库本身不处理用户隐私数据。安全关注点主要在：

- 不在基础组件中嵌入业务埋点
- 不内置与业务耦合的网络请求逻辑
- 发布物不泄漏内部无关源码或调试文件

## 5. Risks & Roadmap

### Phased Rollout

#### MVP / V0

目标：

- 建立 `monorepo` 基础结构
- 建立 `packages/ui` 和 `apps/playground`
- 实现 `Button`
- 跑通构建
- 跑通本地示例
- 跑通可发包形态

交付物：

- 一套可继续扩展的仓库结构
- 一个可复用的 `Button`
- 一份基础组件开发规范

#### V0.1

目标：

- 增加 `Input`、`Cell`、`Toast`、`Modal` 等高频基础组件
- 提炼更稳定的 design tokens
- 增加基础测试和发布流程

#### V1.0

目标：

- 支撑至少一个真实业务项目接入
- 补齐核心基础组件
- 完成私有 npm 发布流程
- 建立版本管理和变更说明机制

### Technical Risks

#### 设计稿不完整

风险：

- 如果只依据部分设计稿开发，后续新增组件时可能出现尺寸、颜色、交互状态不统一。

应对：

- `v0` 先抽取最小 tokens
- 对 `Button` 的视觉规则单独文档化

#### App WebView 差异

风险：

- 不同 App 容器的点击反馈、字体渲染、禁用态样式可能存在差异。

应对：

- `v0` 只使用稳定 CSS 能力
- 避免依赖复杂动画和新特性

#### 发布链路未确定

风险：

- 如果内部 npm 制品库接入较慢，组件库虽然写完但短期难以复用。

应对：

- `v0` 先保证本地打包与 workspace 引用可用
- 把发布平台接入放到 `v0.1` 或 `v1.0`

#### 过早追求大而全

风险：

- 如果一开始就建设完整主题系统、文档站和大量组件，项目节奏会被拖慢。

应对：

- `v0` 严格控制范围，只做 `Button` 和必要底座

## Open Decisions

以下事项当前建议先标记为 `TBD`，不阻塞 `v0` 推进：

- 私有 npm 仓库的具体地址和权限方案
- `Button` 设计稿中的精确尺寸、颜色和字体值
- 是否需要兼容旧版 React 项目
- 是否必须输出 `cjs`
- 是否在 `v0` 就接入单元测试

## Recommended Next Step

下一步建议不是继续讨论抽象架构，而是直接进入 `Button` 的细化设计：

1. 明确 `Button` 设计稿中各状态视觉值
2. 冻结 `Button` 的首版 API
3. 初始化 `monorepo` 结构
4. 用 `Button` 跑通构建、预览和发包

如果上述闭环跑通，这个仓库就已经具备继续扩展为内部 H5 React 组件库的基础条件。
