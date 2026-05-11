import type { CSSProperties } from 'react';

import type { LoadingProps } from './types';

import { cx } from '../../internal/cx';

const SIZE_TO_VALUE: Record<NonNullable<LoadingProps['size']>, string> = {
  large: '28px',
  middle: '22px',
  small: '16px',
};

export function Loading({ className, size = 'middle', spinning = true, style }: LoadingProps) {
  const mergedStyle: CSSProperties = {
    ...style,
    '--xb-loading-size': SIZE_TO_VALUE[size],
  } as CSSProperties;

  return (
    <span
      aria-busy={spinning}
      aria-label="Loading"
      className={cx('xb-loading', !spinning && 'xb-loading--paused', className)}
      role="status"
      style={mergedStyle}
    />
  );
}
