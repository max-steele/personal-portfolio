import { ReactNode } from "react";
import { Txt } from "../components/Text";
import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

export type SectionDescriptionProps = React.ComponentProps<
  typeof SectionDescription
>;

export const SectionDescription: React.FC<
  React.ComponentProps<"div"> & {
    header: ReactNode;
    components: ReactNode[];
  }
> = ({
  className,
  header,
  components,
  ...props
}) => (
  <div className={cx(className)} {...props}>
    {header && (
      <div className={cx(className, style.SectionHeader)}>
        <Txt size={2} fg={1} tag="h2" bold>
          {header}
        </Txt>
      </div>
    )}
    {components.map((component, index) => (
      <div key={index} className={style.SectionDescription}>
        {component}
      </div>
    ))}
  </div>
);
