import { useState } from 'react';

import { Button, Modal } from '@xbotgo/ui';

export interface ModalDemoConfig {
  code: string;
  description: string;
  id: 'rename' | 'confirm' | 'feature';
  label: string;
  title: string;
}

function RenameModalStage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="default" width={168} onClick={() => setOpen(true)}>
        打开重命名弹窗
      </Button>

      <Modal
        actions={[
          {
            key: 'cancel',
            label: 'Cancel',
            onClick: () => setOpen(false),
          },
          {
            key: 'confirm',
            label: 'Confirm',
            onClick: () => setOpen(false),
            tone: 'primary',
          },
        ]}
        ariaLabel="Rename"
        onClose={() => setOpen(false)}
        open={open}
        title="Rename"
      >
        <input className="modalDemoInput" defaultValue="Play ball with friends" />
      </Modal>
    </>
  );
}

function ConfirmModalStage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="default" width={156} onClick={() => setOpen(true)}>
        打开确认弹窗
      </Button>

      <Modal
        actions={[
          {
            key: 'cancel',
            label: 'Cancel',
            onClick: () => setOpen(false),
          },
          {
            key: 'confirm',
            label: 'Confirm',
            onClick: () => setOpen(false),
            tone: 'primary',
          },
        ]}
        ariaLabel="Delete confirmation"
        description="Whether to delete the selected video ?"
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
}

function FeatureModalStage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button width={172} onClick={() => setOpen(true)}>
        打开内容弹窗
      </Button>

      <Modal
        ariaLabel="Firmware Initialization"
        closable
        footer={null}
        onClose={() => setOpen(false)}
        open={open}
        title="Firmware Initialization"
        variant="feature"
        width={688}
      >
        <div className="modalDemoArticle">
          <p>Dear User:</p>
          <p>
            We Have Confirmed The Deactivation Of YourChameleon Device As Previously Informed Viaemail. Once You
            Complete The Provided Steps.We Will Promptly Ship Your Brand-NewChameleon Device Within 24 Hours Based On
            Theshipping Info You Provided.
          </p>
          <p>Thank You For Your Understanding.</p>
        </div>

        <Button block size="large">
          Connect
        </Button>
      </Modal>
    </>
  );
}

export const modalDemos: ModalDemoConfig[] = [
  {
    id: 'rename',
    label: '重命名',
    title: '表单型确认弹窗',
    description: '适合标题明确、需要补充一项输入内容后再确认的轻量操作。',
    code: `import { useState } from 'react';
import { Button, Modal } from '@xbotgo/ui';

export function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="default" onClick={() => setOpen(true)}>
        打开重命名弹窗
      </Button>

      <Modal
        open={open}
        title="Rename"
        onClose={() => setOpen(false)}
        actions={[
          { key: 'cancel', label: 'Cancel', onClick: () => setOpen(false) },
          { key: 'confirm', label: 'Confirm', tone: 'primary', onClick: () => setOpen(false) },
        ]}
      >
        <input defaultValue="Play ball with friends" />
      </Modal>
    </>
  );
}`,
  },
  {
    id: 'confirm',
    label: '确认',
    title: '纯确认弹窗',
    description: '适合删除、退出这类需要用户明确二次确认的场景。',
    code: `import { useState } from 'react';
import { Button, Modal } from '@xbotgo/ui';

export function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="default" onClick={() => setOpen(true)}>
        打开确认弹窗
      </Button>

      <Modal
        open={open}
        description="Whether to delete the selected video ?"
        onClose={() => setOpen(false)}
        actions={[
          { key: 'cancel', label: 'Cancel', onClick: () => setOpen(false) },
          { key: 'confirm', label: 'Confirm', tone: 'primary', onClick: () => setOpen(false) },
        ]}
      />
    </>
  );
}`,
  },
  {
    id: 'feature',
    label: '大内容',
    title: '大内容说明弹窗',
    description: '适合承载较长说明文案和主要 CTA，支持右上角关闭按钮。',
    code: `import { useState } from 'react';
import { Button, Modal } from '@xbotgo/ui';

export function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开内容弹窗</Button>

      <Modal
        open={open}
        title="Firmware Initialization"
        variant="feature"
        width={688}
        closable
        footer={null}
        onClose={() => setOpen(false)}
      >
        <p>Dear User:</p>
        <p>
          We Have Confirmed The Deactivation Of YourChameleon Device As Previously Informed Viaemail.
        </p>
        <Button block size="large">
          Connect
        </Button>
      </Modal>
    </>
  );
}`,
  },
];

export function renderModalDemoStage(demoId: ModalDemoConfig['id']) {
  if (demoId === 'rename') {
    return <RenameModalStage />;
  }

  if (demoId === 'confirm') {
    return <ConfirmModalStage />;
  }

  return <FeatureModalStage />;
}
