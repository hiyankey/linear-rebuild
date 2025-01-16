import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
interface ButtonProps extends VariantProps<typeof buttonClasses> {
	children: React.ReactNode;
	href: string;
	className?: string;
}

const buttonClasses = cva("inline-flex rounded-full items-center", {
	variants: {
		variant: {
			primary: "bg-primary-gradient",
			secondary: "",
		},
		size: {
			sm: "text-xs px-3 h-6",
			md: "text-sm px-4 h-8",
			lg: "text-lg px-6 h-12",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});
export function Button({
	children,
	href,
	variant,
	size,
	className,
}: ButtonProps) {
	return (
		<Link
			href={href}
			className={`${buttonClasses({ variant, size })} ${className}`}
		>
			{children}
		</Link>
	);
}
