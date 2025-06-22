import { cx } from "../utils/joinClassNames";
import style from "./Experience.module.css";

import { Txt } from "./Text";
import Link from "next/link";
import React, { ReactNode } from "react";
import Image from "next/image";

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
  image,
  ...props
}) => (
  <div className={cx(className, style.ExperienceContainer)} {...props}>
    {image && (
      <div className={style.ExperienceImage}>
        <Image
          src={image.src}
          alt={image.alt}
          width={55}
          height={55}
          className={style.ExperienceLogo}
        />
      </div>
    )}
    <div className={style.ExperienceContent}>
      <div className={style.ExperienceText}>
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
  </div>
);

const highspot: ExperienceProps = {
  title: "Incoming Associate Engineer Intern",
  organization: "Highspot",
  time: "July 2025 - Present",
  location: "Seattle, WA",
  image: {
    src: "/media/highspot.png",
    alt: "Highspot Logo"
  },
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Summer 2025
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
  image: {
    src: "/media/pnnl.png",
    alt: "PNNL Logo"
  },
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Building AI/ML-driven web applications in the{" "}
          <Link href={"https://www.pnnl.gov/ai-and-data-analytics"} target={"_blank"}>
            AI & Data Analytics
          </Link>{" "}
          division at PNNL.
        </Txt>
      </>
    )
  ]
};

const dhs: ExperienceProps = {
  title: "DHS-WIRED Software Engineering Intern",
  organization: "Pacific Northwest National Laboratory",
  time: "June 2024 - Aug 2024",
  location: "Richland, WA",
  image: {
    src: "/media/pnnl.png",
    alt: "PNNL Logo"
  },
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Cloud-deployed analytics pipelines and scientific web interfaces.
        </Txt>
      </>
    )
  ]
};

const peer_mentor: ExperienceProps = {
  title: "Peer Mentor",
  organization: "Washington State University Tri-Cities GEAR-UP",
  time: "Sept 2022 - June 2023",
  location: "Kennewick, WA",
  image: {
    src: "/media/wsu.png",
    alt: "WSU Logo"
  },
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
  image: {
    src: "/media/wsu.png",
    alt: "WSU Logo"
  },
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

const target: ExperienceProps = {
  title: "Retail Associate",
  organization: "Target",
  time: "Aug 2022 - Sept 2023",
  location: "Kennewick, WA",
  image: {
    src: "/media/target.png",
    alt: "Target Logo"
  },
  descriptions: []
};

export const experiences: ExperienceProps[] = [
  highspot,
  pnnl,
  dhs,
  peer_mentor,
  tutor,
  target
];