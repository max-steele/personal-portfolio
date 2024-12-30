import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

import AllenLogoLayer1 from "../../../public/media/About/AllenLogoLayer1.png";
import AllenLogoLayer2 from "../../../public/media/About/AllenLogoLayer2.png";
import AllenLogoLayer3 from "../../../public/media/About/AllenLogoLayer3.png";

import pnnlLayer1 from "../../../public/media/PNNL/pnnlLayer1.png";
import pnnlLayer2 from "../../../public/media/PNNL/pnnlLayer2.png";
import pnnlLayer3 from "../../../public/media/PNNL/pnnlLayer3.png";

import {
  SectionDescription,
  SectionDescriptionProps,
} from "./SectionDescription";
import { HeroImage, HeroImageProps } from "./HeroImage";
import { Txt } from "./Text";
import Link from "next/link";
import React from "react";
import { Spacer } from "./Spacer";

export const ProjectFeatureSection: React.FC<
  React.ComponentProps<"div"> & {
    sectionDescriptionProps: SectionDescriptionProps;
    heroImageProps: HeroImageProps;
  }
> = ({ className, sectionDescriptionProps, heroImageProps, ...props }) => (
  <div
    className={cx(className, style.SectionWrapper, style.SectionInteractive)}
    {...props}
  >
    <div className={cx(style.Section, style.ProjectsSection)}>
      <SectionDescription {...sectionDescriptionProps} />
      <div className={cx(style.SectionContent)}>
        <HeroImage {...heroImageProps} />
      </div>
    </div>
  </div>
);

export type ProjectFeatureSectionProps = React.ComponentProps<
  typeof ProjectFeatureSection
>;

const about: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    label: "Background",
    header: "About",
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
          , working on designing & deploying user interfaces for data
          visualization, biosecurity, and machine learning web applications
          for federal government agencies. Currently focused on full-stack web development, data visualization, and natural language processing.
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
          I am an undergraduate student at the University of Washington&apos;s{" "}
          <Link href={"https://www.cs.washington.edu/"} target="_blank">
            Paul G. Allen School of Computer Science & Engineering
          </Link>{" "}
          in Seattle, Washington, pursuing B.S. in Computer Science. Currently 
          focused on full-stack web development, data visualization, and natural language processing.
        </Txt>
        <Spacer />
        <Txt tag="p" fg={2} className={style.HeaderDetails}>
          In addition to full-time studies, I am working at{" "}
          <Link href={"https://www.pnnl.gov/"} target="_blank">
            Pacific Northwest National Laboratory
          </Link>{"'s "}
          Seattle Office, designing & desploying user interfaces for data
          visualization, biosecurity, and machine learning for federal government agencies.
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

export const sections = {
  about,
  pnnl,
};
