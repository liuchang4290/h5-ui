import { useState } from 'react';

import { Button, Loading } from '@xbotgo/ui';

export interface LoadingDemoConfig {
  code: string;
  description: string;
  id: 'sizes' | 'states' | 'custom';
  label: string;
  title: string;
}

function SizesLoadingStage() {
  return (
    <div className="loadingDocRow">
      <Loading size="small" />
      <Loading size="middle" />
      <Loading size="large" />
    </div>
  );
}

function StatesLoadingStage() {
  const [spinning, setSpinning] = useState(true);

  return (
    <div className="loadingDocStack">
      <div className="loadingDocRow">
        <Loading spinning={spinning} />
      </div>
      <Button type="default" onClick={() => setSpinning((value) => !value)}>
        spinning: {String(spinning)}
      </Button>
    </div>
  );
}

function CustomLoadingStage() {
  return (
    <div className="loadingDocRow">
      <Loading
        style={{
          '--xb-loading-color': '#ec6104',
          '--xb-loading-duration': '700ms',
          '--xb-loading-size': '30px',
          '--xb-loading-stroke-width': '3px',
        }}
      />
    </div>
  );
}

export const loadingDemos: LoadingDemoConfig[] = [
  {
    id: 'sizes',
    label: '尺寸',
    title: '三档尺寸',
    description: '支持 small、middle、large 三种尺寸。',
    code: `import { Loading } from '@xbotgo/ui';

export function Demo() {
  return (
    <>
      <Loading size="small" />
      <Loading size="middle" />
      <Loading size="large" />
    </>
  );
}`,
  },
  {
    id: 'states',
    label: '状态',
    title: '动画开关',
    description: '通过 spinning 控制是否旋转。',
    code: `import { useState } from 'react';
import { Button, Loading } from '@xbotgo/ui';

export function Demo() {
  const [spinning, setSpinning] = useState(true);

  return (
    <>
      <Loading spinning={spinning} />
      <Button type="default" onClick={() => setSpinning((value) => !value)}>
        spinning: {String(spinning)}
      </Button>
    </>
  );
}`,
  },
  {
    id: 'custom',
    label: '样式覆盖',
    title: '自定义颜色与速度',
    description: '通过 CSS 变量覆盖颜色、尺寸、描边和动画时长。',
    code: `import { Loading } from '@xbotgo/ui';

export function Demo() {
  return (
    <Loading
      style={{
        '--xb-loading-color': '#ec6104',
        '--xb-loading-duration': '700ms',
        '--xb-loading-size': '30px',
        '--xb-loading-stroke-width': '3px',
      }}
    />
  );
}`,
  },
];

export function renderLoadingDemoStage(demoId: LoadingDemoConfig['id']) {
  if (demoId === 'sizes') {
    return <SizesLoadingStage />;
  }

  if (demoId === 'states') {
    return <StatesLoadingStage />;
  }

  return <CustomLoadingStage />;
}
