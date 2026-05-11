import type { CSSProperties, ReactNode } from 'react';

export type ToastType = 'success' | 'danger' | 'warning' | 'info' | 'loading';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'center';

export interface ToastAction {
  disabled?: boolean;
  label: ReactNode;
  onClick?: () => void;
}

export type ToastStyleVariableName =
  | '--xb-toast-bg'
  | '--xb-toast-border'
  | '--xb-toast-danger'
  | '--xb-toast-duration'
  | '--xb-toast-info'
  | '--xb-toast-loading'
  | '--xb-toast-radius'
  | '--xb-toast-shadow'
  | '--xb-toast-success'
  | '--xb-toast-text'
  | '--xb-toast-warning'
  | '--xb-toast-z-index';

export type ToastStyleOverrides = CSSProperties & Partial<Record<ToastStyleVariableName, string>>;

export interface ToastProps {
  action?: ToastAction;
  autoClose?: boolean;
  closable?: boolean;
  description?: ReactNode;
  duration?: number;
  onClose?: () => void;
  open: boolean;
  position?: ToastPosition;
  style?: ToastStyleOverrides;
  title?: ReactNode;
  type?: ToastType;
}
