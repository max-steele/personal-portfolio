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
import { Spacer } from "./Spacer";
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

const about: SectionProps = {
  sectionDescriptionProps: {
    header: "About",
    components: [
      (
        <>
          <Txt tag="p" fg={2}>
            I am an undergraduate student at the University of Washington&apos;s{" "}
            <Link href={"https://www.cs.washington.edu/"} target="_blank">
              Paul G. Allen School of Computer Science & Engineering
            </Link>{" "}
            in Seattle, Washington, pursuing B.S. in Computer Science.
          </Txt>
          <Spacer />
          <Txt tag="p" fg={2}>
            In addition to full-time studies, I am working at{" "}
            <Link href={"https://www.pnnl.gov/"} target="_blank">
              Pacific Northwest National Laboratory
            </Link>
            , tasked with designing & deploying web applications for data
            visualization, biosecurity, and machine learning for federal government agencies. 
          </Txt>
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
                <b>Tools</b>
              </Txt>
              <Txt size={4} fg={2} className={style.SectionDescription}>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
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
  about,
  experience,
  education,
  skills
};