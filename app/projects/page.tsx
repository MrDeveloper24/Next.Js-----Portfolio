import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { ProjectsSection } from "../components/projects-section";
import { profile } from "../portfolio-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Muhammad Naseem Barkat",
  description: "Selected web development projects by Muhammad Naseem Barkat.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-[1620px] px-[clamp(22px,4vw,64px)] max-[900px]:px-[27px] max-[650px]:px-[18px]">
      <SiteHeader />
      <main className="min-h-[calc(100vh-180px)]">
        <ProjectsSection
          id="project-list"
          index=""
          label="Projects"
          heading="Things I’ve built"
          intro="A selection of web projects and concepts. Open a live demo or source repository where a verified link is available."
        />
      </main>
      <footer className="flex min-h-[82px] items-center justify-between gap-5 py-5 text-[11px] text-[var(--muted)] max-[650px]:flex-wrap max-[650px]:py-4">
        <Link className="flex items-center gap-2 text-[var(--text-soft)]" href="/">
          <span className="grid h-[30px] w-[30px] place-items-center rounded border border-[var(--line-bright)] bg-[var(--surface)] font-mono text-[10px] font-bold text-[var(--blue-bright)]">NB</span> Muhammad Naseem Barkat
        </Link>
        <span className="max-[650px]:order-3 max-[650px]:w-full">
          © {new Date().getFullYear()} · MERN Stack Developer ·{" "}
          {profile.location}
        </span>
        <Link className="hover:text-[var(--blue-bright)]" href="/#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </div>
  );
}
