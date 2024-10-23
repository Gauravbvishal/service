"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Revenue",
    description:
    "A diverse group of professionals passionate about healthcare and committed to excellence. Our team comprises certified medical coders, billing experts, financial analysts, and healthcare consultants, each bringing a wealth of experience and expertise to the table. Together, we work cohesively, driven by a shared goal ",
    link: "/",
  },
  {
    title: "Service",
    description:
    "A diverse group of professionals passionate about healthcare and committed to excellence. Our team comprises certified medical coders, billing experts, financial analysts, and healthcare consultants, each bringing a wealth of experience and expertise to the table. Together, we work cohesively, driven by a shared goal ",
      link: "/",
    },
  {
    title: "Booster",
    description:
    "A diverse group of professionals passionate about healthcare and committed to excellence. Our team comprises certified medical coders, billing experts, financial analysts, and healthcare consultants, each bringing a wealth of experience and expertise to the table. Together, we work cohesively, driven by a shared goal ",
    link: "/",
  },
  {
    title: "Revenue",
    description:
    "A diverse group of professionals passionate about healthcare and committed to excellence. Our team comprises certified medical coders, billing experts, financial analysts, and healthcare consultants, each bringing a wealth of experience and expertise to the table. Together, we work cohesively, driven by a shared goal ",
      link: "/",
    },
  {
    title: "Service",
    description:
    "A diverse group of professionals passionate about healthcare and committed to excellence. Our team comprises certified medical coders, billing experts, financial analysts, and healthcare consultants, each bringing a wealth of experience and expertise to the table. Together, we work cohesively, driven by a shared goal ",
    link: "/",
    },
  {
    title: "Booster",
    description:
    "A diverse group of professionals passionate about healthcare and committed to excellence. Our team comprises certified medical coders, billing experts, financial analysts, and healthcare consultants, each bringing a wealth of experience and expertise to the table. Together, we work cohesively, driven by a shared goal ",
      link: "/",
    },
];
