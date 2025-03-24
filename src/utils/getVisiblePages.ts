const getVisiblePages = (totalPages: number, currentPage: number) => {
  if (totalPages <= 7)
    return Array.from({ length: totalPages }, (_, i) => i + 1);

  if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages];
  if (currentPage >= totalPages - 3)
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export default getVisiblePages;