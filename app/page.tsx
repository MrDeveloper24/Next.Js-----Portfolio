import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/site-header";
import { ProjectsSection } from "./components/projects-section";
import {
  courses,
  education,
  experience,
  languages,
  profile,
  skillGroups,
} from "./portfolio-data";

export const metadata: Metadata = {
  title: "Muhammad Naseem Barkat | MERN Stack Developer",
  description:
    "MERN Stack Developer in Lahore, Pakistan, with internship experience in full-stack development and QA testing.",
  openGraph: {
    title: "Muhammad Naseem Barkat | MERN Stack Developer",
    description:
      "Responsive web applications, practical full-stack development, and a quality-first approach to software.",
    type: "website",
  },
};

const shellClass =
  "mx-auto w-full max-w-[1620px] px-[clamp(22px,4vw,64px)] max-[900px]:px-[27px] max-[650px]:px-[18px]";
const sectionClass =
  "border-t border-[#1b2538] py-[86px] max-[900px]:py-[67px] max-[650px]:py-[55px]";
const eyebrowClass =
  "m-0 font-mono text-[10px] uppercase tracking-[0.045em] text-[#8793a8]";
const sectionTitleClass =
  "m-0 text-[clamp(32px,3.7vw,48px)] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--text)] max-[650px]:text-[clamp(27px,8vw,35px)]";
const buttonClass =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[5px] border px-4 text-[13px] font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blue-bright)] max-[650px]:min-h-[42px] max-[650px]:px-[13px] max-[650px]:text-xs";
const primaryButtonClass =
  "border-[#6687f8] bg-[#5578ed] text-white hover:bg-[#6687f8]";
const secondaryButtonClass =
  "border-[var(--line-bright)] bg-[var(--surface)] text-[var(--text-soft)] hover:border-[#627ba8]";

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.76 2.03 3.42 1.36.1-.73.39-1.23.7-1.51-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.16-3.01-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.63 10.63 0 0 1 5.55 0c2.1-1.42 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.79 1.16 1.79 1.16 3.01 0 4.28-2.6 5.23-5.08 5.5.4.34.75 1.02.75 2.06V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.96H4.96V9.4h2.97v9.56ZM6.45 8.1a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.59 10.86h-2.97v-4.65c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.73H9.78V9.4h2.85v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.56 1.98 3.56 4.56v5.24Z" />
    </svg>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span
      className="text-[var(--blue-bright)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <Link
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </Link>
  );
}

function SectionHeading({
  index,
  label,
  title,
  description,
  id,
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  id: string;
}) {
  return (
    <div
      className={`mb-[27px] ${description ? "flex items-end justify-between gap-8 max-[650px]:items-start max-[650px]:flex-col max-[650px]:gap-2.5" : ""}`}
    >
      <div>
        <p className={eyebrowClass}>
          <span className="mr-2 text-[#647798]">{index}</span>
          {label}
        </p>
        <h2 id={id} className={`${sectionTitleClass} mt-2.5`}>
          {title}
        </h2>
      </div>
      {description && (
        <p className="m-0 max-w-[450px] text-sm leading-[1.7] text-[var(--muted)] max-[650px]:text-[13px]">
          {description}
        </p>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative grid min-h-[570px] grid-cols-[1.18fr_.82fr] items-center gap-[8%] overflow-hidden px-[3px] py-[76px_68px] max-[900px]:min-h-[510px] max-[900px]:gap-[5%] max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:gap-10 max-[760px]:px-0 max-[760px]:py-[52px_48px] max-[650px]:gap-[30px] max-[650px]:py-[48px_42px]"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="relative z-[1]">
        <p className="flex w-fit items-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3.5 py-2 text-[13px] text-[var(--text-soft)] max-[650px]:text-[10px]">
          <span className="h-[7px] w-[7px] rounded-full bg-[var(--green)] shadow-[0_0_12px_#73dfb799]" />
          Open to MERN Stack | Frontend developer opportunities
        </p>
        <p
          className={`${eyebrowClass} mt-8 text-[#93aaff] max-[650px]:mt-[23px]`}
        >
          MERN Stack Developer <span className="px-1 text-[#536381]">·</span>{" "}
          QA-aware developer
        </p>
        <h1
          id="hero-title"
          className="m-0 max-w-[770px] text-[clamp(44px,5.3vw,68px)] font-bold leading-[1.06] tracking-[-0.065em] text-[var(--text)] max-[900px]:text-[clamp(40px,5.3vw,54px)] max-[650px]:text-[clamp(39px,11vw,55px)]"
        >
          Turning ideas into{" "}
          <span className="text-[var(--blue-bright)]">
            clean, reliable web apps.
          </span>
        </h1>
        <p className="mt-[22px] max-w-[680px] text-base leading-[1.8] text-[var(--text-soft)] max-[900px]:text-[15px] max-[650px]:text-sm">
          I build responsive web apps with the MERN stack and Next.js. My
          internship experience spans frontend development and QA testing, with
          a focus on clear interfaces, working features, and reliable
          interactions.
        </p>
        <div className="mt-6 flex flex-wrap gap-[11px]">
          <Link
            className={`group ${buttonClass} ${primaryButtonClass}`}
            href="#projects"
          >
            View my work <Arrow />
          </Link>
          <a
            className={`group ${buttonClass} ${secondaryButtonClass}`}
            href="/Muhammad-Naseem-Barkat-CV.pdf"
            download
          >
            Resume <Arrow diagonal />
          </a>
        </div>
        <div className="mt-12 grid max-w-[610px] grid-cols-3 gap-6 border-t border-[var(--line)] pt-[27px] max-[650px]:mt-8 max-[650px]:gap-4">
          {[
            ["3 mo", "Internship experience"],
            ["11", "Projects listed"],
            ["MERN", "Stack"],
          ].map(([value, label]) => (
            <div className="flex flex-col gap-1.5" key={label}>
              <strong className="text-[27px] font-semibold tracking-[-0.04em] text-[var(--text)]">
                {value}
              </strong>
              <span className="text-xs text-[var(--muted)] max-[650px]:text-[10px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <aside
        className="relative w-full max-w-[600px] justify-self-end animate-code-float max-[760px]:justify-self-center"
        aria-label="Animated developer code preview"
      >
        <div className="overflow-hidden rounded-[10px] border border-[#202c40] bg-[#070b12] shadow-[0_28px_70px_#0007]">
          <div className="flex min-h-12 items-center gap-[13px] border-b border-[#253149] bg-[#101726] px-[17px] font-mono text-[11px] text-[#8290a8]">
            <span className="flex gap-[5px]" aria-hidden="true">
              <i className="h-2 w-2 rounded-full bg-[#f07178]" />
              <i className="h-2 w-2 rounded-full bg-[#f2c46d]" />
              <i className="h-2 w-2 rounded-full bg-[#67d5a0]" />
            </span>
            <span>
              portfolio.js <span className="text-[#66758c]">— ~/developer</span>
            </span>
          </div>
          <div className="overflow-x-auto px-[22px] py-[25px] font-mono text-[14px] leading-[2.1] text-[#d3d9e5] max-[650px]:px-3 max-[650px]:py-[18px] max-[650px]:text-[11px]">
            {[
              <Fragment key="developer">
                <span className="text-[#d18bff]">const</span>{" "}
                <span className="text-[#7db4ff]">developer</span> = &#123;
              </Fragment>,
              <Fragment key="name">
                <span className="text-[#9aafff]">name</span>:{" "}
                <span className="text-[#72dfb7]">
                  &apos;{profile.name}&apos;
                </span>
                ,
              </Fragment>,
              <Fragment key="skills">
                <span className="text-[#9aafff]">skills</span>: [
                <span className="text-[#72dfb7]">&apos;React&apos;</span>,{" "}
                <span className="text-[#72dfb7]">&apos;Next.js&apos;</span>,{" "}
                <span className="text-[#72dfb7]">&apos;TypeScript&apos;</span>],
              </Fragment>,
              <Fragment key="experience">
                <span className="text-[#9aafff]">experience</span>:{" "}
                <span className="text-[#72dfb7]">
                  &apos;Internship experience&apos;
                </span>
                ,
              </Fragment>,
              <Fragment key="passion">
                <span className="text-[#9aafff]">passion</span>:{" "}
                <span className="text-[#72dfb7]">
                  &apos;Building amazing UIs&apos;
                </span>
              </Fragment>,
              <Fragment key="ending">
                &#125;;{" "}
                <i className="inline-block h-[15px] w-[7px] animate-code-cursor bg-[var(--blue-bright)] align-middle" />
              </Fragment>,
              <span className="text-[#7d8ca5]" key="comment">
                {"// Ready to build something great ✨"}
              </span>,
            ].map((line, index) => (
              <div
                className="min-w-max animate-code-line whitespace-pre"
                style={{ animationDelay: `${index * 100}ms` }}
                key={index}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
        <span className="absolute -right-3 top-3 flex items-center gap-2 rounded border border-[var(--line-bright)] bg-[var(--surface-raised)] px-3 py-2 text-[10px] text-[var(--text-soft)] max-[650px]:right-0">
          <i className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" /> Open to
          opportunities
        </span>
        <span className="absolute -bottom-3 left-4 rounded border border-[var(--line-bright)] bg-[var(--surface-raised)] px-3 py-1.5 font-mono text-[9px] tracking-wider text-[var(--blue-bright)]">
          ✦ MERN STACK
        </span>
      </aside>
      <span
        className="pointer-events-none absolute right-[6%] top-[18%] font-mono text-[180px] font-bold tracking-[-0.12em] text-[color-mix(in_srgb,var(--blue)_4%,transparent)] max-[650px]:hidden"
        aria-hidden="true"
      >
        &#123; &#125;
      </span>
    </section>
  );
}

function About() {
  return (
    <section
      className={`${sectionClass} grid grid-cols-[.8fr_1.2fr] items-center gap-[7%] max-[650px]:grid-cols-1 max-[650px]:gap-7`}
      id="about"
      aria-labelledby="about-title"
    >
      <figure className="m-0 flex w-[min(76vw,320px)] flex-col items-center gap-4 justify-self-center">
        <div className="aspect-square w-full rounded-full border border-[var(--line-bright)] bg-[var(--surface)] p-2 shadow-[0_24px_60px_#0004]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="/muhammad-naseem-barkat.jpeg"
              alt="Muhammad Naseem Barkat"
              fill
              sizes="(max-width: 650px) 76vw, 320px"
              className="object-cover object-[center_17%]"
            />
          </div>
        </div>
        <figcaption className="text-center">
          <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#aabcf5]">
            MERN Stack Developer
          </span>
          <span className="mt-1 block text-lg font-semibold tracking-tight text-[var(--text)]">
            Muhammad Naseem Barkat
          </span>
        </figcaption>
      </figure>
      <div>
        <p className={eyebrowClass}>
          <span className="mr-2 text-[#647798]">01</span>About me
        </p>
        <h2 id="about-title" className={`${sectionTitleClass} mt-2.5`}>
          Developer mindset.
          <br />
          <span className="text-[var(--blue-bright)]">
            Quality-first approach.
          </span>
        </h2>
        <div className="pt-5 text-[15px] leading-[1.85] text-[var(--text-soft)] max-[650px]:pt-3">
          <p>
            I’m a MERN Stack Developer with internship experience in full-stack
            development and QA testing. I enjoy building responsive,
            user-friendly web applications and working on practical projects
            using modern web technologies.
          </p>
          <p className="mt-4">
            My software testing experience also helps me focus on application
            quality, functionality, and user experience. I’m growing my skills
            through hands-on work and building useful projects for the web.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] text-[var(--muted)] max-[650px]:gap-2 max-[650px]:text-[10px]">
            <span className="text-lg text-[var(--blue-bright)]">⌖</span>
            <span>{profile.location}</span>
            <span className="h-4 border-l border-[var(--line-bright)]" />{" "}
            <span>MERN Stack · QA testing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      className={sectionClass}
      id="skills"
      aria-labelledby="skills-title"
    >
      <SectionHeading
        index="02"
        label="Technical skills"
        id="skills-title"
        title={
          <>
            The tools I’m learning and using
            <span className="text-[var(--blue-bright)]">.</span>
          </>
        }
        description="Grouped by the work they support. No proficiency scores, just the tools and methods I’ve worked with."
      />
      <div className="grid grid-cols-2 gap-2 max-[650px]:grid-cols-1">
        {skillGroups.map((group) => (
          <article
            className={`rounded-[5px] border border-[var(--line)] bg-[var(--surface)] p-5 ${group.title.startsWith("QA") ? "col-span-2 max-[650px]:col-span-1" : ""}`}
            key={group.title}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[10px] text-[var(--blue)]">
                {group.number}
              </span>
              <h3 className="m-0 text-base font-semibold text-[var(--text)]">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  className="rounded border border-[var(--line)] bg-[var(--surface-soft)] px-2.5 py-1.5 text-xs text-[var(--text-soft)] max-[650px]:text-[10px]"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      className={sectionClass}
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        index="03"
        label="Internship experience"
        id="experience-title"
        title={
          <>
            Hands-on learning
            <span className="text-[var(--blue-bright)]">.</span>
          </>
        }
        description="Internship experience combining application development and software quality testing."
      />
      <div className="space-y-3">
        {experience.map((item, index) => (
          <article
            className="grid grid-cols-[180px_1fr] gap-6 rounded-[5px] border border-[var(--line)] bg-[var(--surface)] p-6 max-[650px]:grid-cols-1 max-[650px]:gap-3 max-[650px]:p-4"
            key={item.role}
          >
            <div className="flex flex-col gap-2 max-[650px]:flex-row max-[650px]:items-center max-[650px]:justify-between">
              <span className="font-mono text-xl text-[var(--blue)]">
                0{index + 1}
              </span>
              <span className="text-xs text-[var(--muted)]">
                {item.duration}
              </span>
            </div>
            <div>
              <p className="mb-2 text-xs text-[var(--blue-bright)]">
                {item.company}{" "}
                <span className="text-[var(--muted)]">
                  · details to confirm
                </span>
              </p>
              <h3 className="m-0 text-xl font-semibold tracking-tight text-[var(--text)]">
                {item.role}
              </h3>
              <ul className="mt-3 space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-soft)] marker:text-[var(--blue)]">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.stack.map((skill) => (
                  <span
                    className="rounded border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-1 text-[10px] text-[var(--muted)]"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationAndMore() {
  return (
    <section
      className={sectionClass}
      id="education"
      aria-labelledby="education-title"
    >
      <SectionHeading
        index="04"
        label="Education & additional details"
        id="education-title"
        title={
          <>
            Learning in progress
            <span className="text-[var(--blue-bright)]">.</span>
          </>
        }
        description="Education, coursework, and languages listed in my CV."
      />
      <div className="grid grid-cols-3 gap-3 max-[760px]:grid-cols-1">
        <div className="rounded-[5px] border border-[var(--line)] bg-[var(--surface)] p-5">
          <h3 className="mb-4 mt-0 text-base font-semibold text-[var(--text)]">
            Education
          </h3>
          {education.map((item) => (
            <div
              className="flex items-start justify-between gap-3 border-t border-[var(--line)] py-3"
              key={item.qualification}
            >
              <div>
                <strong className="text-sm text-[var(--text)]">
                  {item.qualification}
                </strong>
                <p className="mb-0 mt-1 text-xs text-[var(--muted)]">
                  {item.institution}
                </p>
              </div>
              <span className="text-[10px] text-[var(--blue)]">
                {item.status}
              </span>
            </div>
          ))}
        </div>
        <div className="rounded-[5px] border border-[var(--line)] bg-[var(--surface)] p-5">
          <h3 className="mb-4 mt-0 text-base font-semibold text-[var(--text)]">
            Courses listed on CV
          </h3>
          <ul className="space-y-3 pl-4 text-sm leading-relaxed text-[var(--text-soft)] marker:text-[var(--blue)]">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[5px] border border-[var(--line)] bg-[var(--surface)] p-5">
          <h3 className="mb-4 mt-0 text-base font-semibold text-[var(--text)]">
            Languages
          </h3>
          <div className="space-y-2">
            {languages.map((item) => (
              <div
                className="flex justify-between rounded bg-[var(--surface-soft)] px-3 py-2.5 text-sm"
                key={item.language}
              >
                <strong className="text-[var(--text)]">{item.language}</strong>
                <span className="text-[var(--muted)]">{item.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Profiles() {
  return (
    <section className={sectionClass} aria-labelledby="profiles-title">
      <SectionHeading
        index="06"
        label="Around the web"
        id="profiles-title"
        title={
          <>
            Find me online<span className="text-[var(--blue-bright)]">.</span>
          </>
        }
      />
      <div className="grid grid-cols-2 gap-3 max-[650px]:grid-cols-1">
        <ExternalLink
          href={profile.githubUrl}
          label="Visit Muhammad's GitHub profile (opens in a new tab)"
          className="group flex min-h-[94px] items-center gap-4 rounded-[5px] border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--line-bright)]"
        >
          <span className="grid h-11 w-11 place-items-center rounded bg-[var(--surface-raised)] text-[var(--text-soft)]">
            <GithubIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-1 flex-col">
            <strong className="text-sm text-[var(--text)]">GitHub</strong>
            <small className="mt-1 text-xs text-[var(--muted)]">
              Projects and code
            </small>
            <b className="mt-1 text-xs text-[var(--blue-bright)]">
              @MrDeveloper
            </b>
          </span>
          <Arrow diagonal />
        </ExternalLink>
        <ExternalLink
          href={profile.linkedinUrl}
          label="Visit Muhammad's LinkedIn profile (opens in a new tab)"
          className="group flex min-h-[94px] items-center gap-4 rounded-[5px] border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--line-bright)]"
        >
          <span className="grid h-11 w-11 place-items-center rounded bg-[var(--surface-raised)] text-[var(--blue-bright)]">
            <LinkedInIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-1 flex-col">
            <strong className="text-sm text-[var(--text)]">LinkedIn</strong>
            <small className="mt-1 text-xs text-[var(--muted)]">
              Connect professionally
            </small>
            <b className="mt-1 text-xs text-[var(--blue-bright)]">
              Muhammad Naseem Barkat
            </b>
          </span>
          <Arrow diagonal />
        </ExternalLink>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      className="mb-8 rounded-[7px] border border-[var(--line-bright)] bg-[radial-gradient(ellipse_at_87%_13%,#5578ed14_0,transparent_38%),var(--surface)] px-8 py-12 text-center max-[650px]:px-4 max-[650px]:py-[26px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <p className={eyebrowClass}>
        <span className="mr-2 text-[#647798]">07</span>Contact
      </p>
      <h2
        id="contact-title"
        className="mt-3 text-[clamp(36px,4vw,52px)] font-semibold leading-tight tracking-[-0.055em] text-[var(--text)] max-[650px]:text-[32px]"
      >
        Let’s build something
        <br />
        <span className="text-[var(--blue-bright)]">useful together.</span>
      </h2>
      <p className="mx-auto mt-3 max-w-[600px] text-sm leading-relaxed text-[var(--muted)]">
        Have a junior developer opportunity, project idea, or a question? I’d be
        glad to hear from you.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          className={`group ${buttonClass} ${primaryButtonClass}`}
          href={`mailto:${profile.email}`}
        >
          Email me <Arrow diagonal />
        </Link>
        <ExternalLink
          href={profile.whatsappUrl}
          label={`Message Muhammad on WhatsApp at ${profile.phone} (opens in a new tab)`}
          className={`group ${buttonClass} ${secondaryButtonClass}`}
        >
          WhatsApp <Arrow diagonal />
        </ExternalLink>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-[var(--muted)] max-[650px]:text-[10px]">
        <Link
          className="hover:text-[var(--blue-bright)]"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </Link>
        <Link
          className="hover:text-[var(--blue-bright)]"
          href="tel:+923014456403"
        >
          {profile.phone}
        </Link>
        <span>{profile.location}</span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={shellClass}>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <EducationAndMore />
        <ProjectsSection />
        <Profiles />
        <Contact />
      </main>
      <footer className="flex min-h-[82px] items-center justify-between gap-5 py-5 text-[11px] text-[var(--muted)] max-[650px]:flex-wrap max-[650px]:py-4">
        <Link
          className="flex items-center gap-2 text-[var(--text-soft)]"
          href="#home"
        >
          <span className="grid h-[30px] w-[30px] place-items-center rounded border border-[var(--line-bright)] bg-[var(--surface)] font-mono text-[10px] font-bold text-[var(--blue-bright)]">
            NB
          </span>
          Muhammad Naseem Barkat
        </Link>
        <span className="max-[650px]:order-3 max-[650px]:w-full">
          © {new Date().getFullYear()} · MERN Stack Developer ·{" "}
          {profile.location}
        </span>
        <div className="flex items-center gap-4 text-[var(--text-soft)] [&_svg]:h-[15px] [&_svg]:w-[15px]">
          <ExternalLink
            href={profile.githubUrl}
            label="GitHub profile (opens in a new tab)"
            className="hover:text-[var(--blue-bright)]"
          >
            <GithubIcon />
          </ExternalLink>
          <ExternalLink
            href={profile.linkedinUrl}
            label="LinkedIn profile (opens in a new tab)"
            className="hover:text-[var(--blue-bright)]"
          >
            <LinkedInIcon />
          </ExternalLink>
          <Link
            className="hover:text-[var(--blue-bright)]"
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.email}`}
          >
            @
          </Link>
        </div>
      </footer>
    </div>
  );
}
