import { cx } from '@/lib/utils';
import type { PropsWithChildren } from 'react';

type Props = {
  className?: string;
} & PropsWithChildren;

export default function Container({ className, children }: Props) {
  return (
    <div className={cx(className, 'mx-auto max-w-[1200px] px-3.5 md:px-0')}>
      {children}
    </div>
  );
}
