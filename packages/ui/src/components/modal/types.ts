import type { CSSProperties, ReactNode } from 'react';

export type ModalVariant = 'default' | 'feature';

export type ModalTitleAlign = 'left' | 'center';

export type ModalActionTone = 'default' | 'primary' | 'danger';

export interface ModalAction {
  autoFocus?: boolean;
  disabled?: boolean;
  key?: string;
  label: ReactNode;
  onClick?: () => void;
  tone?: ModalActionTone;
}

export type ModalStyleVariableName =
  | '--xb-modal-action-color'
  | '--xb-modal-action-danger-color'
  | '--xb-modal-action-height'
  | '--xb-modal-action-primary-color'
  | '--xb-modal-bg'
  | '--xb-modal-body-gap'
  | '--xb-modal-close-color'
  | '--xb-modal-divider'
  | '--xb-modal-feature-bg'
  | '--xb-modal-feature-header-bg'
  | '--xb-modal-feature-header-height'
  | '--xb-modal-header-padding-top'
  | '--xb-modal-mask-bg'
  | '--xb-modal-max-width'
  | '--xb-modal-padding'
  | '--xb-modal-radius'
  | '--xb-modal-shadow'
  | '--xb-modal-text'
  | '--xb-modal-title'
  | '--xb-modal-title-size'
  | '--xb-modal-width'
  | '--xb-modal-z-index';

export type ModalStyleOverrides = CSSProperties & Partial<Record<ModalStyleVariableName, string>>;

export interface ModalProps {
  actions?: ModalAction[];
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  closable?: boolean;
  description?: ReactNode;
  footer?: ReactNode | null;
  footerHeight?: CSSProperties['height'];
  maskClosable?: boolean;
  maskStyle?: CSSProperties;
  onClose?: () => void;
  open: boolean;
  style?: ModalStyleOverrides;
  title?: ReactNode;
  titleAlign?: ModalTitleAlign;
  variant?: ModalVariant;
  width?: CSSProperties['width'];
}
