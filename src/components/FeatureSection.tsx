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
    <div className="bg-black text-white py-24 sm:py-32">
      {/* Project Cards Grid */}
      <div className="feature-container grid grid-cols-2 gap-28">
        {currentItems.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 bg-amber-600">
        <Pagination aria-label="Pagination navigation ">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={prevPage} />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext onClick={nextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
