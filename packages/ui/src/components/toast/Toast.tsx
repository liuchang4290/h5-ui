import { useEffect } from 'react';

import type { ToastPosition, ToastProps } from './types';

import { cx } from '../../internal/cx';

const POSITION_CLASS_NAME: Record<ToastPosition, string> = {
  'bottom-center': 'xb-toast__viewport--bottom-center',
  'bottom-left': 'xb-toast__viewport--bottom-left',
  'bottom-right': 'xb-toast__viewport--bottom-right',
  'top-center': 'xb-toast__viewport--top-center',
  'top-left': 'xb-toast__viewport--top-left',
  'top-right': 'xb-toast__viewport--top-right',
};

export function Toast({
  action,
  autoClose = true,
  closable,
  description,
  duration = 2500,
  onClose,
  open,
  position = 'top-center',
  style,
  title,
  type = 'info',
}: ToastProps) {
  const resolvedClosable = closable ?? type === 'loading';

  useEffect(() => {
    if (!open || !autoClose || type === 'loading') {
      return;
    }

    const timer = window.setTimeout(() => {
      onClose?.();
    }, Math.max(duration, 0));

    return () => {
      window.clearTimeout(timer);
    };
  }, [autoClose, duration, onClose, open, type]);

  if (!open) {
    return null;
  }

  return (
    <div className={cx('xb-toast__viewport', POSITION_CLASS_NAME[position])}>
      <div className={cx('xb-toast', `xb-toast--${type}`)} role="status" style={style}>
        <span aria-hidden="true" className={cx('xb-toast__icon', `xb-toast__icon--${type}`)} />
        <div className="xb-toast__content">
          {title ? <div className="xb-toast__title">{title}</div> : null}
          {description ? <div className="xb-toast__description">{description}</div> : null}
        </div>
        {action ? (
          <button className="xb-toast__action" disabled={action.disabled} onClick={action.onClick} type="button">
            {action.label}
          </button>
        ) : null}
        {resolvedClosable ? (
          <button aria-label="Close toast" className="xb-toast__close" onClick={onClose} type="button">
            <span />
            <span />
          </button>
        ) : null}
      </div>
    </div>
  );
}
