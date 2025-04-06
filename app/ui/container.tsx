import { cx } from '@/lib/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={cx(className, 'mx-auto max-w-[1200px]')}>{children}</div>
  );
}
