import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

import {
  SectionDescription,
  SectionDescriptionProps,
} from "./SectionDescription";
import { 
  Experience, 
  experiences,
} from "./Experience";
import {
  Education,
  uw
} from "./Education";
import { Txt } from "./Text";
import { MotionDivWrapper } from "./MotionDivWrapper";
import Link from "next/link";
import React from "react";

export const Section: React.FC<
  React.ComponentProps<"div"> & {
    sectionDescriptionProps: SectionDescriptionProps;
  }
> = ({ className, sectionDescriptionProps, ...props }) => (
  <div
    className={cx(className, style.SectionWrapper)}
    {...props}
  >
    <div className={cx(style.Section)}>
      <SectionDescription {...sectionDescriptionProps} />
    </div>
  </div>
);

export type SectionProps = React.ComponentProps<
  typeof Section
>;

const contact: SectionProps = {
  sectionDescriptionProps: {
    header: "Contact",
    components: [
      (
        <>
          <div className={style.ContactList}>
            <Link
              href="https://linkedin.com/in/maxwell-steele"
              className={style.ContactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.ContactIcon}>🔗</span>
              <span>linkedin.com/in/maxwell-steele</span>
            </Link>

            <Link
              href="mailto:msteele1@uw.edu"
              className={style.ContactLink}
            >
              <span className={style.ContactIcon}>📧</span>
              <span>msteele1 at uw dot edu</span>
            </Link>
            
            <Link
              href="https://github.com/max-steele"
              className={style.ContactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.ContactIcon}>💻</span>
              <span>github.com/max-steele</span>
            </Link>

            <Link
              href="https://max-steele.digital"
              className={style.ContactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.ContactIcon}>🌐</span>
              <span>max-steele.digital</span>
            </Link>
          </div>
        </>
      )
    ]
  }
};

const experience: SectionProps = {
  sectionDescriptionProps: {
    header: "Experience",
    components: experiences.map((experience, index) => (
      <Experience key={index} {...experience} />
    ))
  }
};

const education: SectionProps = {
  sectionDescriptionProps: {
    header: "Education",
    components: [
      (
        <>
          <Education key={"education"} {...uw} />
        </>
      )
    ]
  }
};

const skills: SectionProps = {
  sectionDescriptionProps: {
    header: "Technical Skills",
    components: [
      (
        <>
          <div className={style.Skills}>
            <MotionDivWrapper className={style.GridGroup}>
              <Txt tag="p" size={4} fg={2} uppercase className={style.SectionHeader}>
                <b>Languages</b>
              </Txt>
              <Txt size={4} fg={2}>
                <ul>
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <li>GraphQL</li>
                  <li>HTML/CSS</li>
                </ul>
              </Txt>
            </MotionDivWrapper>

            <MotionDivWrapper className={style.GridGroup}>
              <Txt tag="p" size={4} fg={2} uppercase className={style.SectionHeader}>
                <b>Tools</b>
              </Txt>
              <Txt size={4} fg={2}>
                <ul>
                  <li>AWS</li>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Bash</li>
                  <li>Linux</li>
                  <li>LaTeX</li>
                </ul>
              </Txt>
            </MotionDivWrapper>

            <MotionDivWrapper className={style.GridGroup}>
              <Txt tag="p" size={4} fg={2} uppercase className={style.SectionHeader}>
                <b>Frameworks</b>
              </Txt>
              <Txt size={4} fg={2}>
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Flask</li>
                  <li>Visx</li>
                </ul>
              </Txt>
            </MotionDivWrapper>
          </div>
        </>
      )
    ]
  }
};

export const sections = {
  contact,
  experience,
  education,
  skills
};