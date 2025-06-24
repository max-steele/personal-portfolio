import { cx } from "../utils/joinClassNames";
import style from "./Education.module.css";

import { Txt } from "./Text";
import { MotionDivWrapper } from "./MotionDivWrapper";
import React, { ReactNode } from "react";

type EducationProps = React.ComponentProps<
  typeof Education
>;

export const Education: React.FC<
  React.ComponentProps<"div"> & {
    title: ReactNode;
    organization: ReactNode;
    time: ReactNode;
    location: ReactNode;
    descriptions: ReactNode[];
  }
> = ({
  className,
  title,
  organization,
  time,
  location,
  descriptions,
  ...props
}) => (
  <MotionDivWrapper>
    <div className={style.EducationContent}>
      <div className={style.EducationText}>
        <Txt size={3} fg={1} tag="h1" bold>
          {title}
        </Txt>
        <Txt size={4} fg={2} tag="h3">
          {organization}
        </Txt>
        <Txt size={5} fg={3} tag="h3">
          {time}
        </Txt>
        <Txt size={5} fg={3} tag="h3" italic>
          {location}
        </Txt>
      </div>
      {descriptions.map((description, index) => (
        <div key={index} className={cx(className, style.EducationDescription)}>
          {description}
        </div>
      ))}
    </div>
  </MotionDivWrapper>
);

export const uw: EducationProps = {
  title: "B.S in Computer Science",
  organization: "University of Washington",
  time: "Sept 2023 - June 2026",
  location: "Seattle, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={3} tag="p">
          <b>GPA: 3.91</b>
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={3} tag="p">
          Relevant Coursework: Data Structures & Parallelism, Software Design & Implementation, Database
          Management Systems, Hardware/Software Interface, Algorithms, Foundations of Computing 1 & 2
          (Discrete Math & Probability), Linear Algebra
        </Txt>
      </>
    )
  ]
};