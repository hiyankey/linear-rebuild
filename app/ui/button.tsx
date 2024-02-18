import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-brand-color hover:bg-lighten-brand-color shadow-low shadow-medium shadow-high",
      secondary:
        "text-off-white bg-white bg-opacity-10 border border-transparent-white hover:bg-[#fff3] shadow-low shadow-medium shadow-high",
    },
    size: {
      sm: "text-xs px-3 h-7",
      md: "text-sm px-4 h-8",
      lg: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }
};

export const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="-mr-[6px] ml-[4px]">{children}</div>;
};
