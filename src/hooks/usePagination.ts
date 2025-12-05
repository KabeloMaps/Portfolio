import { useMemo, useState } from "react";

type usePaginationProps<T> = {
  itemsPerPage: number;
  totalItems: T[];
};

//functoin to assist in calculating total number of pages
function usePagination() {
  // Step 1: Manage the current page state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(10);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Step 2: Calculate the total number of pages
  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  );

  // Step 3: Create a function to handle the page change
  const goToPage = (page: number) => {
    if (page < 1) {
      setCurrentPage(1); // Can't go below page 1
    } else if (page > totalPages) {
      setCurrentPage(totalPages); // Can't go above total pages
    } else {
      setCurrentPage(page); // Set the new page
    }
  };

  // Step 4: Create functions for "Next" and "Previous" buttons
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Step 5: Calculate the items to be displayed on the current page

  const startIndex = currentPage * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const currentItems = totalItems.slice(startIndex, lastIndex);

  return {
    currentPage,
    totalPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  };
}

export default usePagination;
