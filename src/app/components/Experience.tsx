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

const highspot: ExperienceProps = {
  title: "Associate Engineer Intern",
  organization: "Highspot",
  time: "July 2025 - Present",
  location: "Seattle, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Data & Analytics
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
          As part of the{" "}
          <Link href={"https://www.pnnl.gov/ai-and-data-analytics"} {...external}>
            AI & Data Analytics
          </Link>{" "}
          division at PNNL, I led the end-to-end development of several new features for a React-based web application delivering AI/ML driven insights for federal government agencies.
          I designed and implemented client-facing data visualization tools to model trends in 5+ million open-source scientific documents using NLP-based analytics such as BERTopic and ReFinEd entity linking.
          In addition, I developed a serverless user profiles feature using AWS CDK to provide personalized content aggregation (search history, viewing behavior) and authored a 100+ page user guide for technical and non-technical project sponsors.
        </Txt>
      </>
    )
  ]
};

const dhs: ExperienceProps = {
  title: "DHS-WIRED Undergraduate Intern",
  organization: "Pacific Northwest National Laboratory",
  time: "June 2024 - Aug 2024",
  location: "Richland, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          I participated in the Department of Homeland Security (DHS) WIRED national security program at PNNL.
          I developed scientific web interfaces to support cloud-deployed analytics pipelines as part of the{" "}
          <Link href={"https://www.pnnl.gov/foundational-data-science"} {...external}>
            Foundational Data Science
          </Link>{" "}
          group, part of PNNL&apos;s National Security Directorate. 
          This was primarily in the natural language processing domain, including dynamic topic modeling using Latent Dirichlet Allocation (LDA).
          Additionally, I authored a technical abstract and project report detailing my contributions, and presented at PNNL&apos;s Research Symposium.
        </Txt>
      </>
    )
  ]
};

const peer_mentor: ExperienceProps = {
  title: "Peer Mentor",
  organization: "Washington State University Tri-Cities GEAR-UP",
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
  organization: "Washington State University Tri-Cities GEAR-UP",
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
  highspot,
  pnnl,
  dhs,
  peer_mentor,
  tutor
];