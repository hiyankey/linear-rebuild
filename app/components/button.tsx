import Link from 'next/link'
import React from 'react'
import { cx } from '../lib/cx'

export const Button = ({
  children,
  href,
  variant,
  size,
  className,
}: {
  children: React.ReactNode
  href: string
  variant?: string
  size?: string
  className?: string
}) => (
  <Link
    href={href}
    className={cx(
      'rounded-full inline-flex items-center text-nowrap',
      variant === 'primary' && 'bg-primary-gradient ',
      variant === 'secondary' && 'bg-white/10 border border-white/5',

      size === 'sm' && 'text-xs px-3 h-7',
      size === 'md' && 'text-sm px-4 h-8',
      size === 'lg' && 'text-regular px-6 h-12',
      className
    )}
  >
    {children}
  </Link>
)
