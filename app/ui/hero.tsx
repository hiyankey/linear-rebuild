import classNames from "classnames";

export const HeroTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={classNames(
        " text-gradient my-5 text-balance text-6xl md:text-7xl lg:text-8xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};
export const HeroSubtile = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={classNames(
        "mb-8 text-balance text-lg text-primary-text lg:text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
};
export const Hero = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-center">{children}</div>;
};
