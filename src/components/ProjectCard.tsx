type Project = {
  id: number;
  img: string;
  description: string;
  year: number;
  role: string;
  technologies: string[];
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-2    mx-6">
      <div className="image-container    py-14 px-14  lg:px-12 lg:py-12  lg:mb-5   rounded-3xl ">
        <div className="hover-3d ">
          <figure className="rounded-2xl">
            <img src={project.img} alt="Project preview" />
          </figure>
          {/* extra empty divs for hover effect */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>

      <div className="description-container content-center">
        <article>
          <p className="font-family-third text-[1.45rem]  font-light">
            {project.description}
          </p>

          <h2 className="font-family-third font-semibold text-[1.25rem] pt-3.5 pb-3">
            PROJECT INFO
          </h2>
          <hr />

          <div className="my-1 mb-3 flex text-[1.25rem]">
            <p>Year</p>
            <p className="mx-auto mr-4">{project.year}</p>
          </div>

          <hr />

          <div className="my-1 mb-3 flex text-[1.25rem]">
            <p>Role</p>
            <p className="mx-auto mr-4">{project.role}</p>
          </div>

          <hr />

          <div className="my-1 mb-3 flex text-[1.25rem]">
            <p>Technologies</p>
            <p className="mx-auto mr-4">{project.technologies.join(" | ")}</p>
          </div>

          <hr />

          <div className="flex justify-start py-5">
            <button
              className="bg-blue-600 my-7 py-3.5 px-11 rounded-full"
              onClick={() => window.open((project as any).demo, "_blank")}
            >
              LIVE DEMO
            </button>

            <button
              className="bg-blue-600 my-7 ml-8 py-3.5 px-11 rounded-full"
              onClick={() => window.open((project as any).github, "_blank")}
            >
              SEE ON GITHUB
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
