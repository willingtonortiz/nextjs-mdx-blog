import { PropsWithChildren } from "react";

type Props = {
  size: string;
};

const Heading = ({ size, children }: PropsWithChildren<Props>) => {
  return (
    <h1 style={{ fontSize: size, fontWeight: "normal", margin: 0 }}>
      {children}
    </h1>
  );
};

const headingBuilder = ({ size }: { size: string }) => {
  const component = ({ children }: PropsWithChildren<{}>) => (
    <Heading size={size}>{children}</Heading>
  );

  return component;
};
const Heading1 = headingBuilder({ size: "2rem" });
const Heading2 = headingBuilder({ size: "1.5rem" });
const Heading3 = headingBuilder({ size: "1rem" });

export { Heading1, Heading2, Heading3 };
