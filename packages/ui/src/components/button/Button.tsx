import type { ButtonFitConfig, ButtonProps, ButtonSize, ButtonType } from './types';

import { cx } from '../../internal/cx';

const TYPE_CLASS_NAME: Record<ButtonType, string> = {
  primary: 'xb-button--type-primary',
  secondary: 'xb-button--type-secondary',
  default: 'xb-button--type-default',
  text: 'xb-button--type-text',
};

const SIZE_CLASS_NAME: Record<ButtonSize, string> = {
  small: 'xb-button--size-small',
  middle: 'xb-button--size-middle',
  large: 'xb-button--size-large',
};

const FIT_PADDING_DEFAULTS: Record<ButtonSize, Required<ButtonFitConfig>> = {
  small: {
    paddingBlock: 8,
    paddingInline: 14,
  },
  middle: {
    paddingBlock: 10,
    paddingInline: 18,
  },
  large: {
    paddingBlock: 12,
    paddingInline: 22,
  },
};

export function Button({
  block = false,
  children,
  className,
  disabled = false,
  fit = false,
  height,
  htmlType = 'button',
  loading = false,
  size = 'middle',
  style,
  type = 'primary',
  width,
  ...restProps
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const fitConfig = fit && typeof fit === 'object' ? fit : undefined;
  const fitStyle =
    fit === false
      ? undefined
      : {
          alignSelf: 'flex-start',
          height: 'auto',
          minHeight: 'auto',
          minWidth: 'auto',
          paddingBottom: fitConfig?.paddingBlock ?? FIT_PADDING_DEFAULTS[size].paddingBlock,
          paddingLeft: fitConfig?.paddingInline ?? FIT_PADDING_DEFAULTS[size].paddingInline,
          paddingRight: fitConfig?.paddingInline ?? FIT_PADDING_DEFAULTS[size].paddingInline,
          paddingTop: fitConfig?.paddingBlock ?? FIT_PADDING_DEFAULTS[size].paddingBlock,
          width: 'auto',
        };
  const mergedStyle: ButtonProps['style'] | undefined =
    width === undefined && height === undefined && fitStyle === undefined
      ? style
      : {
          ...style,
          ...fitStyle,
          ...(width !== undefined ? { minWidth: width, width } : {}),
          ...(height !== undefined ? { height, minHeight: height } : {}),
        };

  return (
    <button
      {...restProps}
      aria-busy={loading || undefined}
      className={cx('xb-button', TYPE_CLASS_NAME[type], SIZE_CLASS_NAME[size], block && 'xb-button--block', className)}
      disabled={isDisabled}
      style={mergedStyle}
      type={htmlType}
    >
      {loading ? <span aria-hidden="true" className="xb-button__loader" /> : null}
      <span className="xb-button__content">{children}</span>
    </button>
  );
}
