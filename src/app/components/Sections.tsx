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
        <Txt tag="p" fg={2} className={style.SectionDescription}>
          I am an undergraduate student at the University of Washington&apos;s{" "}
          <Link href={"https://www.cs.washington.edu/"} target="_blank">
            Paul G. Allen School of Computer Science & Engineering
          </Link>{" "}
          in Seattle, Washington, pursuing B.S. in Computer Science.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.SectionDescription}>
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
        <Txt tag="p" fg={2} className={style.SectionDescription}>
          I am currently working as a software engineer in the{" "}
          <Link href={"https://www.pnnl.gov/foundational-data-science"} target={"_blank"}>
            Foundational Data Science
          </Link>{" "}
          group at PNNL. 
          My work spans data science, natural language processing, UI/UX design, and cloud infrastructure. 
          My primary achievements have been in developing dynamic visualization experiences for AI/ML driven analytics on the web.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.SectionDescription}>
          I currently lead the design & iterative development of an interactive interface for{" "}
          <Link href={"https://www.ibm.com/think/topics/topic-modeling#:~:text=In%20natural%20language%20processing%20(NLP,overall%20primary%20set%20of%20topics."} target="_blank">
            topic modeling
          </Link>{" "}
          alongside a team of seasoned data scientists and UX designers.
          The feature aims to enable the explorational of complex textual relationships
          with precision. It features Airbnb&apos;s{" "}
          <Link href={"https://airbnb.io/visx/"} target="_blank">
            Visx
          </Link>{" "}
          library and React best-practices to provide a fast and intuitive data-driven representation on the web.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.SectionDescription}>
          This work is commissioned by federal government agencies, including the Department 
          of Defense and the Department of Homeland Security. See below for further details on my contributions 
          within this sector.
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
        <Txt tag="p" fg={2} className={style.SectionDescription}>
          During Summer 2024, I participated in the{" "} 
          <Link href={"https://www.pnnl.gov/dhs-wired-internships"} target={"_blank"}>
            DHS-WIRED Internship Program
          </Link>
          , a National Security development program administered by PNNL. 
          I was assigned to a multi-year project in the{" "}
          <Link href={"https://www.pnnl.gov/ai-and-data-analytics-research"} target={"_blank"}>
            AI and Data Analytics Division
          </Link>,
          part of PNNL&apos;s National Security Directorate. I collaborated with software engineers and data scientists on the team 
          to develop client-facing features on a web interface.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.SectionDescription}>
          This included a presentation at PNNL&apos;s Research Symposium in August of 2024, part of the{" "}
          <Link href="/media/DHS/GoldExperience.pdf" target={"_blank"}>
            Gold Experience
          </Link>{" "}
          development program, where I showcased my contributions over 10 weeks. 
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.SectionDescription}>
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
    label: "Dev Skills",
    description: (
      <>
        <Spacer />
        <div className={style.RowContainer}>
          <div className={style.GridGroup}>
            <Txt tag="p" size={4} fg={2} className={style.SectionDescription}>
              <b>Languages</b>
            </Txt>
            <Spacer />
            <Txt size={4} fg={2} className={style.SectionDescription}>
              <div className={style.GridContainer}>
                <div>
                  <i className="devicon-javascript-plain"></i> JavaScript
                </div>
                <div>
                  <i className="devicon-typescript-plain"></i> TypeScript
                </div>
                <div>
                  <i className="devicon-python-plain"></i> Python
                </div>
                <div>
                  <i className="devicon-java-plain"></i> Java
                </div>
                <div>
                  <i className="devicon-c-plain"></i> C
                </div>
                <div>
                  <i className="devicon-html5-plain"></i> HTML5/CSS
                </div>
              </div>
            </Txt>
          </div>

          <div className={style.GridGroup}>
            <Txt tag="p" size={4} fg={2} className={style.SectionDescription}>
              <b>Frameworks & Build Tools</b>
            </Txt>
            <Spacer />
            <Txt size={4} fg={2} className={style.SectionDescription}>
              <div className={style.GridContainer}>
                <div>
                  <i className="devicon-react-original"></i> React.js
                </div>
                <div>
                  <i className="devicon-nodejs-plain"></i> Node.js
                </div>
                <div>
                  <i className="devicon-npm-original-wordmark"></i> NPM
                </div>
                <div>
                  <i className="devicon-materialui-plain"></i> Material UI
                </div>
                <div>
                  <i className="devicon-flask-original"></i> Flask
                </div>
                <div>
                  <i className="devicon-docker-plain"></i> Docker
                </div>
              </div>
            </Txt>
          </div>

          <div className={style.GridGroup}>
            <Txt tag="p" size={4} fg={2} className={style.SectionDescription}>
              <b>Technologies</b>
            </Txt>
            <Spacer />
            <Txt size={4} fg={2} className={style.SectionDescription}>
              <div className={style.GridContainer}>
                <div>
                  <i className="devicon-git-plain"></i> Git
                </div>
                <div>
                  <i className="devicon-gitlab-plain"></i> GitLab
                </div>
                <div>
                  <i className="devicon-jira-plain"></i> Jira
                </div>
                <div>
                  <i className="devicon-confluence-plain"></i> Confluence
                </div>
                <div>
                  <i className="devicon-amazonwebservices-plain-wordmark"></i> AWS
                </div>
                <div>
                  <i className="devicon-graphql-plain"></i> GraphQL
                </div>
              </div>
            </Txt>
          </div>
        </div>
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