import { cx } from '@/lib/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const HeroTitle = ({ className, children }: Props) => (
  <h1 className={cx(className, 'text-center text-4xl')}>{children}</h1>
);
export const HeroSubtitle = ({ className, children }: Props) => (
  <h1 className={cx(className, 'text-center text-lg')}>{children}</h1>
);

export function Hero({ children, className }: Props) {
  return <div className={cx(className)}>{children}</div>;
}
