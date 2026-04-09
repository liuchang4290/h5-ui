import type { CSSProperties } from "react";

import { Button } from "@xbotgo/ui";

export interface ButtonDemoNote {
  background: string;
  label: string;
  text: string;
}

export interface ButtonDemoConfig {
  code: string;
  description: string;
  id:
    | "types"
    | "sizes"
    | "fit"
    | "dimensions"
    | "states"
    | "block"
    | "override";
  label: string;
  notes?: ButtonDemoNote[];
  title: string;
}

export const buttonDemos: ButtonDemoConfig[] = [
  {
    id: "types",
    label: "类型",
    title: "按钮类型",
    description: "四种默认类型的背景和文字色如下。",
    notes: [
      {
        label: "primary",
        background: "#FF7500 -> #BD120E",
        text: "#FFFFFF",
      },
      {
        label: "secondary",
        background: "rgba(236, 97, 4, 0.12) -> rgba(255, 117, 0, 0.08)",
        text: "#EC6104",
      },
      {
        label: "default",
        background: "#FFFFFF -> #F7F7F7",
        text: "#333333",
      },
      {
        label: "text",
        background: "transparent",
        text: "#EC6104",
      },
    ],
    code: `import { Button } from '@xbotgo/ui';

export function Demo() {
  return (
    <>
      <Button>主按钮</Button>
      <Button type="secondary" width="100%">次级按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="text">文字按钮</Button>
    </>
  );
}`,
  },
  {
    id: "sizes",
    label: "尺寸",
    title: "按钮尺寸",
    description: "small、middle、large 三档尺寸对应不同内容密度和操作优先级。",
    code: `import { Button } from '@xbotgo/ui';

export function Demo() {
  return (
    <>
      <Button size="small">小号按钮</Button>
      <Button size="middle">中号按钮</Button>
      <Button size="large">大号按钮</Button>
    </>
  );
}`,
  },
  {
    id: "fit",
    label: "自适应",
    title: "fit 自适应",
    description:
      "开启 fit 后按钮会按内容撑开，并支持通过 paddingBlock 和 paddingInline 单独配置上下、左右内边距。",
    code: `import { Button } from '@xbotgo/ui';

export function Demo() {
  return (
    <>
      <Button fit>自适应按钮</Button>
      <Button
        fit={{
          paddingBlock: 12,
          paddingInline: 32,
        }}
        type="secondary"
      >
        自定义内边距
      </Button>
    </>
  );
}`,
  },
  {
    id: "dimensions",
    label: "宽高",
    title: "宽高属性",
    description:
      "通过 width 和 height 直接设置按钮尺寸，适合业务里有明确像素规格的场景。",
    code: `import { Button } from '@xbotgo/ui';

export function Demo() {
  return (
    <>
      <Button width={240} height={48}>
        固定宽高
      </Button>
      <Button type="secondary" width="100%" height={52}>
        整行按钮
      </Button>
    </>
  );
}`,
  },
  {
    id: "states",
    label: "状态",
    title: "交互状态",
    description:
      "组件内置 loading 和 disabled 语义，减少业务页面重复维护状态逻辑。",
    code: `import { Button } from '@xbotgo/ui';

export function Demo() {
  return (
    <>
      <Button>默认状态</Button>
      <Button loading>提交中</Button>
      <Button disabled>不可点击</Button>
    </>
  );
}`,
  },
  // `block` 仍保留在组件代码里，这里先从文档示例中隐藏。
  // {
  //   id: "block",
  //   label: "通栏",
  //   title: "通栏按钮",
  //   description: "通栏按钮用于底部主操作区，适合需要抢占整行注意力的场景。",
  //   code: `import { Button } from '@xbotgo/ui';
  //
  // export function Demo() {
  //   return (
  //     <Button block size="large">
  //       通栏按钮
  //     </Button>
  //   );
  // }`,
  // },
  {
    id: "override",
    label: "变量覆盖",
    title: "父层变量覆盖样式",
    description:
      "在父层设置 CSS 变量即可覆盖组件圆角、高度、背景和文字色，不需要重写组件内部样式。",
    code: `import type { CSSProperties } from 'react';
import { Button } from '@xbotgo/ui';

const wrapperStyle = {
  '--xb-button-bg': '#111827',
  '--xb-button-text': '#ffffff',
  '--xb-button-height': '40px',
  '--xb-button-padding-inline': '18px',
  '--xb-button-radius': '12px',
} satisfies CSSProperties;

export function Demo() {
  return (
    <div style={wrapperStyle}>
      <Button>父层覆盖样式</Button>
    </div>
  );
}`,
  },
];

export function renderButtonDemoStage(demoId: ButtonDemoConfig["id"]) {
  if (demoId === "types") {
    return (
      <div className="previewStack">
        <Button>主按钮</Button>
        <Button type="secondary">次级按钮</Button>
        <Button type="default">默认按钮</Button>
        <Button type="text">文字按钮</Button>
      </div>
    );
  }

  if (demoId === "sizes") {
    return (
      <div className="previewStack">
        <Button size="small">小号按钮</Button>
        <Button size="middle">中号按钮</Button>
        <Button size="large">大号按钮</Button>
      </div>
    );
  }

  if (demoId === "fit") {
    return (
      <div className="previewStack">
        <Button fit>自适应按钮</Button>
        <Button
          fit={{
            paddingBlock: 12,
            paddingInline: 32,
          }}
          type="secondary"
        >
          自定义内边距
        </Button>
      </div>
    );
  }

  if (demoId === "dimensions") {
    return (
      <div className="previewStack">
        <Button width={240} height={48}>
          固定宽高
        </Button>
        <Button type="secondary" width="100%" height={52}>
          整行按钮
        </Button>
      </div>
    );
  }

  if (demoId === "states") {
    return (
      <div className="previewStack">
        <Button>默认状态</Button>
        <Button loading>提交中</Button>
        <Button disabled>不可点击</Button>
      </div>
    );
  }

  if (demoId === "block") {
    return (
      <div className="previewStack">
        <Button block size="large">
          通栏按钮
        </Button>
      </div>
    );
  }

  if (demoId === "override") {
    return (
      <div
        className="previewStack"
        style={
          {
            "--xb-button-bg": "#111827",
            "--xb-button-border": "#111827",
            "--xb-button-height": "40px",
            "--xb-button-padding-inline": "18px",
            "--xb-button-radius": "12px",
            "--xb-button-shadow": "none",
            "--xb-button-text": "#ffffff",
          } as CSSProperties
        }
      >
        <Button>父层覆盖样式</Button>
        <Button type="secondary">同层级其他按钮</Button>
      </div>
    );
  }

  return (
    <div className="previewStack">
      <Button>立即预约</Button>
    </div>
  );
}
