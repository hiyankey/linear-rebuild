type Props = {
	children: React.ReactNode;
	className?: string;
};
export function Container({ children, className }: Props) {
	return (
		<div className={`${className} max-w-[120rem] mx-auto px-8`}>{children}</div>
	);
}
