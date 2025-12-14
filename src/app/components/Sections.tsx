import { cx } from "../utils/joinClassNames";
import { externalLinkAttributes as external } from "../utils/link";
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
              {...external}
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
              {...external}
            >
              <span className={style.ContactIcon}>💻</span>
              <span>github.com/max-steele</span>
            </Link>

            <Link
              href="https://max-steele.digital"
              className={style.ContactLink}
              {...external}
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

export const sections = {
  contact,
  experience,
  education,
};