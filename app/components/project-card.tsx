import type { Project } from "../portfolio-data";
import Link from "next/link";

function GithubIcon() {
  return (
    <svg
      className="h-[15px] w-[15px]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.76 2.03 3.42 1.36.1-.73.39-1.23.7-1.51-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.16-3.01-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.63 10.63 0 0 1 5.55 0c2.1-1.42 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.79 1.16 1.79 1.16 3.01 0 4.28-2.6 5.23-5.08 5.5.4.34.75 1.02.75 2.06V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function isValidExternalUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const githubHref = isValidExternalUrl(project.githubUrl)
    ? project.githubUrl
    : null;
  const liveHref = isValidExternalUrl(project.liveUrl) ? project.liveUrl : null;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group flex min-h-[235px] flex-col rounded-[5px] border border-[var(--line)] bg-[linear-gradient(145deg,var(--surface),var(--surface-soft))] p-[18px_20px_15px] transition-[border-color,transform,background] duration-200 hover:-translate-y-0.5 hover:border-[var(--line-bright)] max-[650px]:min-h-[205px] max-[650px]:p-[15px]">
      <div className="flex items-center justify-between gap-3 font-mono text-[9px] tracking-wide text-[#74839b]">
        <span>PROJECT / {number}</span>
        <span className="flex items-center gap-1.5 text-[10px] text-[var(--muted)]">
          <i className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
          {project.category}
        </span>
      </div>
      <div className="mt-4 grid h-9 w-9 place-items-center rounded border border-[var(--line)] bg-[var(--surface-raised)] font-mono text-[10px] text-[var(--blue-bright)]">
        {number}
      </div>
      <h3 className="mb-0 mt-3 text-[19px] font-semibold tracking-[-0.035em] text-[var(--text)] max-[650px]:text-lg">
        {project.name}
      </h3>
      <p className="mb-0 mt-2 text-[13px] leading-[1.7] text-[var(--muted)]">
        {project.description}
      </p>
      {project.stack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((technology) => (
            <span
              className="rounded border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-1 text-[10px] text-[var(--muted)]"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto flex flex-wrap gap-4 pt-4 text-xs">
        {githubHref && (
          <Link
            className="group/link inline-flex items-center gap-1.5 text-[var(--text-soft)] transition hover:text-[var(--blue-bright)]"
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} GitHub repository (opens in a new tab)`}
          >
            <GithubIcon />
            Source code <span aria-hidden="true">↗</span>
          </Link>
        )}
        {liveHref && (
          <Link
            className="group/link inline-flex items-center gap-1.5 text-[var(--blue-bright)] transition hover:text-[var(--text)]"
            href={liveHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} live demo (opens in a new tab)`}
          >
            Live demo <span aria-hidden="true">↗</span>
          </Link>
        )}
        {!githubHref && !liveHref && (
          <span className="text-[10px] text-[var(--muted)]">
            Repository and demo links to be added
          </span>
        )}
      </div>
    </article>
  );
}
