import { cx } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

type Props = {
  className?: string;
  href: string;
} & PropsWithChildren &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'inline-flex items-center text-nowrap hover:text-shadow-sm hover:shadow-md',
  {
    variants: {
      variant: {
        primary: 'bg-accent',
        secondary: 'bg-white/10',
      },
      size: {
        sm: 'h-7 rounded-md px-3 text-sm',
        md: 'h-9 rounded-lg px-4 text-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export function Button({ className, children, href, size, variant }: Props) {
  return (
    <Link
      href={href}
      className={cx(className, buttonVariants({ size, variant }))}
    >
      {children}
    </Link>
  );
}
