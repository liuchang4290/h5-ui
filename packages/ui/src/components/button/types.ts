import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'default' | 'text';

export type ButtonSize = 'small' | 'middle' | 'large';

export interface ButtonFitConfig {
  paddingBlock?: CSSProperties['paddingBlock'];
  paddingInline?: CSSProperties['paddingInline'];
}

export type ButtonFit = boolean | ButtonFitConfig;

export type ButtonStyleVariableName =
  | '--xb-button-active-shadow'
  | '--xb-button-active-transform'
  | '--xb-button-bg'
  | '--xb-button-border'
  | '--xb-button-disabled-bg'
  | '--xb-button-disabled-border'
  | '--xb-button-disabled-shadow'
  | '--xb-button-disabled-text'
  | '--xb-button-focus-outline'
  | '--xb-button-font-size'
  | '--xb-button-gap'
  | '--xb-button-height'
  | '--xb-button-loader-size'
  | '--xb-button-min-width'
  | '--xb-button-padding-block'
  | '--xb-button-padding-inline'
  | '--xb-button-radius'
  | '--xb-button-shadow'
  | '--xb-button-text'
  | '--xb-button-width';

export type ButtonStyleOverrides = CSSProperties & Partial<Record<ButtonStyleVariableName, string>>;

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'style' | 'type'> {
  block?: boolean;
  children?: ReactNode;
  fit?: ButtonFit;
  height?: CSSProperties['height'];
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  loading?: boolean;
  size?: ButtonSize;
  style?: ButtonStyleOverrides;
  type?: ButtonType;
  width?: CSSProperties['width'];
}
