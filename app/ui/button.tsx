import { cx } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';

type Props = {
  className?: string;
  children: React.ReactNode;
  href: string;
} & VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'inline-flex items-center hover:text-shadow-lg hover:shadow-lg',
  {
    variants: {
      variant: {
        primary: 'bg-accent ',
        secondary: 'bg-white/10',
      },
      size: {
        sm: 'h-[20px] rounded-sm px-2 text-xs',
        md: 'h-[28px] rounded-md px-3 text-sm',
        lg: 'h-[36px] rounded-lg px-4 text-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
export function Button({ children, className, href, variant, size }: Props) {
  return (
    <Link
      href={href}
      className={cx(className, buttonVariants({ size, variant }))}
    >
      {children}
    </Link>
  );
}
