import { cx } from '@/lib/utils';

export const Hamburger = ({ className }: { className?: string }) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    width="18"
    height="11"
    viewBox="0 0 18 11"
    fill="none"
    className={cx(className)}
  >
    <path d="M0 0H18V1H0V0Z" fill="white" />
    <path d="M0 10H18V11H0V10Z" fill="white" />
  </svg>
);
