import Image, { ImageProps } from "next/image";
import { cx } from "../utils/joinClassNames";

export const Logo: React.FC<Partial<ImageProps>> = ({
  className,
  ...props
}) => (
  <Image
    className={cx(className)}
    src={"/ms-logo.svg"}
    alt={`ms logo`}
    width={16}
    height={16}
    priority
    {...props}
  />
);
