import { cx } from "../utils/joinClassNames";
import style from "./Experience.module.css";
import { Spacer } from "./Spacer";

import { Txt } from "./Text";
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
  <div className={className} {...props}>
    <div className={cx(className, style.ExperienceMetadata)}>
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
      <div key={index} className={cx(className, style.ExperienceDescription)}>
        {description}
      </div>
    ))}
  </div>
);

const pnnl: ExperienceProps = {
  title: "Software Engineer Intern",
  organization: "Pacific Northwest National Laboratory",
  time: "Sept 2024 - Present",
  location: "Seattle, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={3} italic tag="p">
          <Link href={"https://www.pnnl.gov/"} target="_blank">
            Pacific Northwest National Laboratory
          </Link>{" "} is a leading center for scientific discovery in chemistry, data analytics, and Earth science, and for technological innovation in sustainable energy and national security.
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Currently a software engineer in the{" "}
          <Link href={"https://www.pnnl.gov/foundational-data-science"} target={"_blank"}>
            Foundational Data Science
          </Link>{" "}
          group at Pacific Northwest National Laboratory developing web applications for federal government agencies with a focus on AI/ML integration, data visualization, and cloud deployment.
          Domains include dynamic topic modeling and retrieval-augmented generation (RAG).
        </Txt>
      </>
    )
  ]
};

const dhs: ExperienceProps = {
  title: "DHS-WIRED Software Engineering Intern",
  organization: "Department of Homeland Security (PNNL)",
  time: "June 2024 - Aug 2024",
  location: "Seattle, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={3} italic tag="p">
          Department of Homeland Security (DHS) WIRED is a National Security development program administered by Pacific Northwest National Laboratory.
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Developed UIs for scientific web interfaces in the
          {" "}<Link href={"https://www.pnnl.gov/ai-and-data-analytics-research"} target={"_blank"}>
            AI and Data Analytics Division
          </Link>
          , part of PNNL&apos;s National Security Directorate. Independently researched formal techniques relevant to the project, primarily within the natural language processing domain. 
          Authored a technical abstract and project report, delivered a formal presentation at PNNL&apos;s Research Symposium.
        </Txt>
      </>
    )
  ]
};

const gear_up: ExperienceProps = {
  title: "Student Tutor & Peer Mentor",
  organization: "Washington State University Tri-Cities GEAR-UP",
  time: "Sept 2021 - June 2023",
  location: "Kennewick, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={3} italic tag="p">
          <Link href={"https://tricities.wsu.edu/gearup/"} target={"_blank"}>
            Gaining Early Awareness and Readiness for Undergraduate Programs
          </Link>{" "} (GEAR-UP) offers services to educational institutions and community partnerships to help students succeed in post-secondary education.
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          <i>Peer Mentor</i>
          <Spacer>/</Spacer>
          Aided students in completing scholarship and financial aid applications, organized and administered college tours, mentored students in applying for universities including the University of Washington and Washington State University.
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          <i>Student Tutor</i>
          <Spacer>/</Spacer>
          Supported students with high school curriculum and AP coursework, provided career-focused lessons, mentored small team of tutors.
        </Txt>
      </>
    )
  ]
};

export const uw: ExperienceProps = {
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

export const experiences: ExperienceProps[] = [
  pnnl,
  dhs,
  gear_up
];