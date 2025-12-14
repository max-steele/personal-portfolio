import { cx } from "../utils/joinClassNames";
import { externalLinkAttributes as external } from "../utils/link";
import style from "./Experience.module.css";

import { Txt } from "./Text";
import { MotionDivWrapper } from "./MotionDivWrapper";
import Link from "next/link";
import React, { ReactNode } from "react";

type ExperienceProps = React.ComponentProps<
  typeof Experience
>;

export const Experience: React.FC<
  React.ComponentProps<"div"> & {
    title: ReactNode;
    organization: ReactNode;
    time: ReactNode;
    location: ReactNode;
    descriptions: ReactNode[];
    image?: {
      src: string;
      alt: string;
    };
  }
> = ({
  className,
  title,
  organization,
  time,
  location,
  descriptions,
}) => (
  <MotionDivWrapper>
    <div className={style.ExperienceContainer}>
      <div className={style.ExperienceContent}>
        <div className={style.ExperienceText}>
          <Txt size={3} fg={1} tag="h1" bold>
            {organization}
          </Txt>
          <Txt size={4} fg={2} tag="h3">
            {title}
          </Txt>
          <Txt size={5} fg={3} tag="h3">
            {time}
          </Txt>
          <Txt size={5} fg={3} tag="h3" italic>
            {location}
          </Txt>
        </div>
        {descriptions.map((description, index) => (
          <div key={index} className={cx(className, style.ExperienceDescription)}>
            {description}
          </div>
        ))}
      </div>
    </div>
  </MotionDivWrapper>
);

const mongodb: ExperienceProps = {
  title: "Incoming Software Engineering Intern",
  organization: "MongoDB",
  time: "Nov 2025 - Present",
  location: "New York, NY",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Incoming Summer 2026
        </Txt>
      </>
    )
  ]
};

const highspot: ExperienceProps = {
  title: "Associate Engineer Intern",
  organization: "Highspot",
  time: "July 2025 - Sept 2025",
  location: "Seattle, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          <Link href={"https://www.highspot.com/product/analytics/"} {...external}>
            Data & Analytics
          </Link>
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Developed Agentic AI features for Nexus, Highspot&apos;s unified AI and Analytics engine.
        </Txt>
      </>
    )
  ]
};

const pnnl: ExperienceProps = {
  title: "Software Engineer Intern",
  organization: "Pacific Northwest National Laboratory",
  time: "Sept 2024 - July 2025",
  location: "Seattle, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          <Link href={"https://www.pnnl.gov/ai-and-data-analytics"} {...external}>
            AI & Data Analytics
          </Link>
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Developed data visualization web apps for NLP-based analytics modeling open-source scientific literature.
        </Txt>
      </>
    )
  ]
};

const dhs: ExperienceProps = {
  title: "Software Engineer Intern",
  organization: "Pacific Northwest National Laboratory",
  time: "June 2024 - Aug 2024",
  location: "Richland, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          <Link href={"https://www.pnnl.gov/foundational-data-science"} {...external}>
            Foundational Data Science
          </Link>
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Built UIs for cloud-deployed analytics pipelines within the DHS-WIRED national security program.
        </Txt>
      </>
    )
  ]
};

const peer_mentor: ExperienceProps = {
  title: "Peer Mentor",
  organization: "Washington State University GEAR-UP",
  time: "Sept 2022 - July 2023",
  location: "Kennewick, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Aided students in completing scholarship, financial aid, and college applications.
        </Txt>
      </>
    )
  ]
};

const tutor: ExperienceProps = {
  title: "Student Tutor",
  organization: "Washington State University GEAR-UP",
  time: "Sept 2021 - June 2023",
  location: "Kennewick, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Supported students with high school curriculum and AP coursework, and provided career-focused lessons.
        </Txt>
      </>
    )
  ]
};

export const experiences: ExperienceProps[] = [
  mongodb,
  highspot,
  pnnl,
  dhs,
  peer_mentor,
  tutor
];