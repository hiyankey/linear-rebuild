import { cx } from '@/lib/utils';
import type { PropsWithChildren } from 'react';

type Props = {
  className?: string;
} & PropsWithChildren;

export function HeroTitle({ children, className }: Props) {
  return <h3 className={cx(className, 'text-center text-4xl')}>{children}</h3>;
}
export function HeroSubtitle({ children, className }: Props) {
  return <p className={cx(className, 'text-center text-lg')}>{children}</p>;
}
export function Hero({ children, className }: Props) {
  return <div className={cx(className)}>{children}</div>;
}
