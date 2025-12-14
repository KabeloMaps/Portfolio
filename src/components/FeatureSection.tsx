"use client";

import { projects } from "../data/Projects";
import usePagination from "../hooks/usePagination";
import ProjectCard from "./ProjectCard";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "./ui/pagination";

export default function FeatureSection() {
  // Hook with 4 items per page
  const {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(projects, 4);

  return (
    <section id="projects">
      <div className="Header-contianer">
        <div className="flex cursor-default  ">
          <div className="  flex flex-col px-7 lg:pt-12  justify-center  lg:text-start  mx-0">
            <h2 className="text-[1.95rem] sm:text-[2.45rem] md:text-[3.45rem] lg:text-[4.45rem] font-family-primary  text-white font-bold">
              FEATURED PROJECTS
            </h2>

            <p className="text-[1.35rem] sm:text-[1.65rem] my-2 flex  lg:text-[1.75rem]  text-left font-family-third font-normal text-lg inset-0 text-white">
              Here are some of the selected projects that showcase my passion
              for
              <br />
              front-end development.
            </p>
          </div>
        </div>
      </div>
      <div className="Main-container  text-white  py-0 sm:py-32">
        <div className="grid  lg:mx-8">
          <div className="feature-container gap-28">
            {currentItems.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>

          <div className="pagination-container flex justify-center">
            <div className="mt-12 ">
              <Pagination aria-label="Pagination navigation">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={prevPage}
                      className="cursor-pointer"
                    />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                      <PaginationItem key={i}>
                        <PaginationLink
                          isActive={currentPage === page}
                          onClick={() => goToPage(page)}
                          className={
                            currentPage === page
                              ? "bg-black text-white cursor-pointer"
                              : "bg-transparent text-gray-300 cursor-pointer"
                          }
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext
                      onClick={nextPage}
                      className="cursor-pointer"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
