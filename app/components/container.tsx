import { cx } from '../lib/cx'

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cx('max-w-[120rem] mx-auto px-5', className)}>{children}</div>
  )
}
