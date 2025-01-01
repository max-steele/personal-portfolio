import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

import AllenLogoLayer1 from "../../../public/media/About/AllenLogoLayer1.png";
import AllenLogoLayer2 from "../../../public/media/About/AllenLogoLayer2.png";
import AllenLogoLayer3 from "../../../public/media/About/AllenLogoLayer3.png";

import pnnlLayer1 from "../../../public/media/PNNL/pnnlLayer1.png";
import pnnlLayer2 from "../../../public/media/PNNL/pnnlLayer2.png";
import pnnlLayer3 from "../../../public/media/PNNL/pnnlLayer3.png";

import CertificateLayer1 from "../../../public/media/DHS/CertificateLayer1.png";

import {
  SectionDescription,
  SectionDescriptionProps,
} from "./SectionDescription";
import { HeroImage, HeroImageProps } from "./HeroImage";
import { Txt } from "./Text";
import { Spacer } from "./Spacer";
import Link from "next/link";
import React from "react";

export const ProjectFeatureSection: React.FC<
  React.ComponentProps<"div"> & {
    sectionDescriptionProps: SectionDescriptionProps;
    heroImageProps?: HeroImageProps;
  }
> = ({ className, sectionDescriptionProps, heroImageProps, ...props }) => (
  <div
    className={cx(className, style.SectionWrapper, style.SectionInteractive)}
    {...props}
  >
    <div className={cx(style.Section, style.ProjectsSection)}>
      <SectionDescription {...sectionDescriptionProps} />
      {heroImageProps && (
        <div className={cx(style.SectionContent)}>
          <HeroImage {...heroImageProps} />
        </div>
      )}
    </div>
  </div>
);

export type ProjectFeatureSectionProps = React.ComponentProps<
  typeof ProjectFeatureSection
>;

const about: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    label: "Background",
    header: "About Me",
    description: (
      <>
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          I am an undergraduate student at the University of Washington&apos;s{" "}
          <Link href={"https://www.cs.washington.edu/"} target="_blank">
            Paul G. Allen School of Computer Science & Engineering
          </Link>{" "}
          in Seattle, Washington, pursuing B.S. in Computer Science.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          In addition to full-time studies, I am working at{" "}
          <Link href={"https://www.pnnl.gov/"} target="_blank">
            Pacific Northwest National Laboratory
          </Link>
          , tasked with designing & deploying web applications for data
          visualization, biosecurity, and machine learning for federal government agencies. 
          Currently focused on full-stack web development, data visualization, and natural language processing.
        </Txt>
      </>
    ),
  },
  heroImageProps: {
    imageLayers: [
      {
        src: AllenLogoLayer1,
        alt: "University of Washington 'W' Purple Logo",
      },
      {
        src: AllenLogoLayer2,
        alt: "Paul G. Allen School Spellout",
      },
      {
        src: AllenLogoLayer3,
        alt: "Of Computer Science & Engineering Spellout",
      },
    ]
  },
};

const pnnl: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    label: "Experience",
    header: "Pacific Northwest National Laboratory (PNNL)",
    description: (
      <>
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          During my time at PNNL, I have contributed to projects spanning data science, natural language processing, UI/UX design, and cloud infrastructure. 
          My primary achievements have been in developing dynamic visualization experiences on the web.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          In collaboration with a team of seasoned data scientists and UX designers, 
          I led the design & development of an interactive, unified interface for{" "}
          <Link href={"https://www.ibm.com/think/topics/topic-modeling#:~:text=In%20natural%20language%20processing%20(NLP,overall%20primary%20set%20of%20topics."} target="_blank">
            topic modeling
          </Link>{" "}
          analytics. This enables analysts to explore complex textual relationships with precision.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          This work is commissioned by federal government agencies, including the Department 
          of Defense and the Department of Homeland Security. (See below for further details on my contributions 
          within this sector.)
        </Txt>
      </>
    ),
  },
  heroImageProps: {
    imageLayers: [
      {
        src: pnnlLayer1,
        alt: "Pacific Northwest National Laboratory Golden Arch Logo",
      },
      {
        src: pnnlLayer2,
        alt: "'Pacific Northwest' Spellout",
      },
      {
        src: pnnlLayer3,
        alt: "'National Laboratory' Spellout",
      },
    ]
  },
};

const dhsWIRED: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    label: "Experience",
    header: "Department of Homeland Security / PNNL",
    links: [
      {
        href: "/media/DHS/WIRED-Project-Report-2024.pdf",
        children: "Project Report",
        type: "emphasis",
        external: true
      }
    ],
    description: (
      <>
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          During Summer 2024, I participated in the{" "} 
          <Link href={"https://www.pnnl.gov/dhs-wired-internships"} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">DHS-WIRED Internship Program</a>
          </Link>
          , administered by PNNL. I was assigned to a multi-year project in the{" "}
          <Link href={"https://www.pnnl.gov/foundational-data-science"} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">Foundational Data Science Group</a>
          </Link>,
          a division of PNNL&apos;s National Security Directorate. My work included a mix of software engineering
          and data science.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          This included a presentation at PNNL&apos;s Research Symposium in August of 2024, part of the{" "}
          <Link href="/media/DHS/GoldExperience.pdf" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">Gold Experience</a>
          </Link>{" "}
          development program, where I showcased my contributions over 10 weeks. 
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          The work is detailed in the project report linked below, which outlines the challenges addressed
          and the broader impact of the work at PNNL.
        </Txt>
      </>
    ),
  },
  heroImageProps: {
    imageLayers: [
      {
        src: CertificateLayer1,
        alt: "Gold Experience Symposium Certificate",
      },
    ]
  },
};

const contact: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    header: "Contact Me",
    links: [
      {
        href: "mailto:msteele1@uw.edu",
        children: "Email",
        type: "outline",
        external: true
      }
    ],
    description: (
      <>
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          I&apos;d love to hear about your opportunity.
        </Txt>
      </>
    ),
  },
};

export const sections = {
  about,
  pnnl,
  dhsWIRED,
  contact
};