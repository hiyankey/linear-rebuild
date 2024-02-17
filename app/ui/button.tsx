import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-brand-color hover:bg-lighten-brand-color hover:shadow-low hover:shadow-medium hover:shadow-high",
      secondary:
        "text-off-white bg-white bg-opacity-10 border border-transparent-white",
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
  return (
    <Link {...props} href="#" className={buttonClasses({ variant, size })}>
      {children}
    </Link>
  );
};

export const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="-mr-[6px] ml-[4px]">{children}</div>;
};
