import { useEffect, useId } from 'react';

import type { ModalProps } from './types';

import { cx } from '../../internal/cx';

let activeModalLockCount = 0;
let bodyOverflowBeforeLock = '';

function lockBodyScroll() {
  if (typeof document === 'undefined') {
    return;
  }

  if (activeModalLockCount === 0) {
    bodyOverflowBeforeLock = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  activeModalLockCount += 1;
}

function unlockBodyScroll() {
  if (typeof document === 'undefined' || activeModalLockCount === 0) {
    return;
  }

  activeModalLockCount -= 1;

  if (activeModalLockCount === 0) {
    document.body.style.overflow = bodyOverflowBeforeLock;
  }
}

function toCssSize(value: ModalProps['footerHeight']) {
  if (value === undefined) {
    return undefined;
  }

  return typeof value === 'number' ? `${value}px` : value;
}

export function Modal({
  actions,
  ariaLabel,
  children,
  className,
  closable = false,
  description,
  footer,
  footerHeight,
  maskClosable = false,
  maskStyle,
  onClose,
  open,
  style,
  title,
  titleAlign = 'center',
  variant = 'default',
  width,
}: ModalProps) {
  const titleId = useId();
  const bodyId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    lockBodyScroll();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      unlockBodyScroll();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const hasDefaultFooter = footer !== null && footer === undefined && Boolean(actions?.length);
  const hasCustomFooter = footer !== undefined && footer !== null;
  const hasFooter = hasDefaultFooter || hasCustomFooter;
  const resolvedFooterHeight = toCssSize(footerHeight);
  const panelStyle: ModalProps['style'] | undefined =
    width === undefined && resolvedFooterHeight === undefined
      ? style
      : {
          ...style,
          ...(width !== undefined ? { width } : {}),
          ...(resolvedFooterHeight !== undefined ? { '--xb-modal-action-height': resolvedFooterHeight } : {}),
        };

  return (
    <div className="xb-modal">
      <div
        aria-hidden="true"
        className="xb-modal__mask"
        onClick={maskClosable ? onClose : undefined}
        style={maskStyle}
      />

      <div
        aria-describedby={description || children ? bodyId : undefined}
        aria-label={title ? undefined : ariaLabel ?? (typeof description === 'string' ? description : undefined)}
        aria-labelledby={title ? titleId : undefined}
        aria-modal="true"
        className={cx(
          'xb-modal__panel',
          variant === 'feature' && 'xb-modal__panel--variant-feature',
          !title && 'xb-modal__panel--titleless',
          !hasFooter && 'xb-modal__panel--footerless',
          className,
        )}
        role="dialog"
        style={panelStyle}
      >
        {closable ? (
          <button aria-label="Close modal" className="xb-modal__close" onClick={onClose} type="button">
            <span />
            <span />
          </button>
        ) : null}

        {title ? (
          <header className={cx('xb-modal__header', titleAlign === 'left' && 'xb-modal__header--left')}>
            <h2 className="xb-modal__title" id={titleId}>
              {title}
            </h2>
          </header>
        ) : null}

        {(description || children) ? (
          <div className="xb-modal__body" id={bodyId}>
            {description ? <div className="xb-modal__description">{description}</div> : null}
            {children}
          </div>
        ) : null}

        {hasDefaultFooter ? (
          <footer
            className="xb-modal__footer"
            style={{
              gridTemplateColumns: `repeat(${actions!.length}, minmax(0, 1fr))`,
            }}
          >
            {actions!.map((action, index) => (
              <button
                autoFocus={action.autoFocus}
                className={cx(
                  'xb-modal__action',
                  action.tone === 'primary' && 'xb-modal__action--primary',
                  action.tone === 'danger' && 'xb-modal__action--danger',
                  index > 0 && 'xb-modal__action--divided',
                )}
                disabled={action.disabled}
                key={action.key ?? `${index}-${String(action.label)}`}
                onClick={action.onClick}
                type="button"
              >
                {action.label}
              </button>
            ))}
          </footer>
        ) : null}

        {hasCustomFooter ? <div className="xb-modal__footer-slot">{footer}</div> : null}
      </div>
    </div>
  );
}
