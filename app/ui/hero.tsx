export const HeroTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="my-5 text-balance text-6xl md:text-7xl lg:text-8xl">
      {children}
    </h1>
  );
};
export const HeroSubtile = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-primary-text mb-8 text-balance text-lg lg:text-xl">
      {children}
    </p>
  );
};
export const Hero = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-center">{children}</div>;
};
