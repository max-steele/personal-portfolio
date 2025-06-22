import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

import {
  SectionDescription,
  SectionDescriptionProps,
} from "./SectionDescription";
import { 
  Experience, 
  experiences,
  uw 
} from "./Experience";
import { Txt } from "./Text";
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
          <Experience key={"education"} {...uw} />
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
            <div className={style.GridGroup}>
              <Txt tag="p" size={4} fg={2} uppercase className={style.SectionHeader}>
                <b>Languages</b>
              </Txt>
              <Txt size={4} fg={2} className={style.SectionDescription}>
                <ul>
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>GraphQL</li>
                  <li>SQL</li>
                  <li>Bash</li>
                </ul>
              </Txt>
            </div>

            <div className={style.GridGroup}>
              <Txt tag="p" size={4} fg={2} uppercase className={style.SectionHeader}>
                <b>Frameworks & Tools</b>
              </Txt>
              <Txt size={4} fg={2} className={style.SectionDescription}>
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Flask</li>
                  <li>Docker</li>
                  <li>Linux</li>
                  <li>AWS</li>
                </ul>
              </Txt>
            </div>

            <div className={style.GridGroup}>
              <Txt tag="p" size={4} fg={2} uppercase className={style.SectionHeader}>
                <b>Technologies</b>
              </Txt>
              <Txt size={4} fg={2} className={style.SectionDescription}>
                <ul>
                  <li>Git</li>
                  <li>GitLab</li>
                  <li>Jira</li>
                  <li>Confluence</li>
                  <li>Agile</li>
                </ul>
              </Txt>
            </div>
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