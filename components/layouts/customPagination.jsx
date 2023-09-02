"use client";

// import Pagination from 'react-js-pagination';
import { Box, Pagination as MuiPagination } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const CustomPagination = ({ resPerPage, productsCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // const page = Number(searchParams.get('page')) || 1
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(productsCount / resPerPage);

  let queryParams;

  function handlePageChange(event, p) {
    setPage(p);
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("page")) {
        queryParams.set("page", p);
      } else {
        queryParams.append("page", p);
      }
      const path = window.location.pathname + "?" + queryParams.toString();

      console.log(path);
      router.push(path);
    }
  }

  return (
    <Box>
      <MuiPagination
        color="secondary"
        page={page}
        count={totalPages}
        onChange={handlePageChange}
      ></MuiPagination>
    </Box> 
  );
};

export default CustomPagination;
