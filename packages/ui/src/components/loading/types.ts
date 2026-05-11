import type { CSSProperties } from 'react';

export type LoadingSize = 'small' | 'middle' | 'large';

export type LoadingStyleVariableName =
  | '--xb-loading-color'
  | '--xb-loading-duration'
  | '--xb-loading-size'
  | '--xb-loading-stroke-width';

export type LoadingStyleOverrides = CSSProperties & Partial<Record<LoadingStyleVariableName, string>>;

export interface LoadingProps {
  className?: string;
  size?: LoadingSize;
  spinning?: boolean;
  style?: LoadingStyleOverrides;
}
