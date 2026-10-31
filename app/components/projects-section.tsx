import { projects } from "../portfolio-data";
import { ProjectCard } from "./project-card";

type ProjectsSectionProps = {
  id?: string;
  index?: string;
  label?: string;
  heading?: string;
  intro?: string;
};

export function ProjectsSection({
  id = "projects",
  index = "05",
  label = "Featured projects",
  heading = "Practical ideas, built for the web",
  intro = "A selection of projects and concepts. Links will appear as verified repositories and demos are added.",
}: ProjectsSectionProps) {
  return (
    <section className="border-t border-[#1b2538] py-[86px] max-[900px]:py-[67px] max-[650px]:py-[55px]" id={id} aria-labelledby={`${id}-title`}>
      <div className="mb-[27px] flex items-end justify-between gap-8 max-[650px]:items-start max-[650px]:flex-col max-[650px]:gap-2.5">
        <div>
          <p className="m-0 font-mono text-[10px] uppercase tracking-[0.045em] text-[#8793a8]"><span className="mr-2 text-[#647798]">{index}</span>{label}</p>
          <h2 className="mb-0 mt-2.5 text-[clamp(32px,3.7vw,48px)] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--text)] max-[650px]:text-[clamp(27px,8vw,35px)]" id={`${id}-title`}>{heading}<span className="text-[var(--blue-bright)]">.</span></h2>
        </div>
        <p className="m-0 max-w-[450px] text-sm leading-[1.7] text-[var(--muted)] max-[650px]:text-[13px]">{intro}</p>
      </div>
      <div className="grid grid-cols-1 gap-[13px] min-[651px]:grid-cols-2 max-[650px]:gap-[9px]">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}
      </div>
    </section>
  );
}
