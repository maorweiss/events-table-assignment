import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

import useData from "@/hooks/useData";

import PaginationTableFooter from "./PaginationTableFooter";
import PaginationTableHead from "./PaginationTableHead";
import PaginationTableBody from "./PaginationTableBody";

export default function PaginationTable({ selectedEventTypes, page, setPage }) {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { data, isLoading } = useData(
    page,
    rowsPerPage,
    selectedEventTypes ?? []
  );

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <StyledTableContainer component={Paper} sx={{ height: 432 }}>
        <Table
          stickyHeader
          sx={{ minWidth: 500 }}
          aria-label="custom pagination table"
        >
          <PaginationTableHead />
          <PaginationTableBody
            rows={data}
            rowsPerPage={rowsPerPage}
            isLoading={isLoading}
          />
        </Table>
      </StyledTableContainer>
      <PaginationTableFooter
            page={page}
            rowsPerPage={rowsPerPage}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
            selectedEventTypes={selectedEventTypes}
            isLoading={isLoading}
          />
    </Paper>
  );
}

const StyledTableContainer = styled(TableContainer)`
  th,
  td {
    &:nth-child(1) {
      width: 402px;
      padding-left: 83px;
    }
    &:nth-child(2) {
      width: 268px;
    }
    &:nth-child(3) {
      width: 335px;
    }
    &:nth-child(4) {
      width: 335px;
    }
  }
`;
