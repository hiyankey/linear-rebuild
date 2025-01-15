type HeroProps = {
	children: React.ReactNode;
};
type HeroTitleProps = {
	children: React.ReactNode;
};
type HeroSubtitleProps = {
	children: React.ReactNode;
};

export function HeroTitle({ children }: HeroTitleProps) {
	return <h1 className="text-4xl">{children}</h1>;
}
export function HeroSubtitle({ children }: HeroSubtitleProps) {
	return <p className="text-lg">{children}</p>;
}
export function Hero({ children }: HeroProps) {
	return <div className="text-center">{children}</div>;
}
