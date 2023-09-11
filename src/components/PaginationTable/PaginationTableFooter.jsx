import TablePagination from "@mui/material/TablePagination";

import useData from "@/hooks/useData";

import TablePaginationActions from "./TablePaginationActions";

const DisabledTablePaginationActions = (props) => (
  <TablePaginationActions disabled {...props} />
);

export default function PaginationTableFooter({
  rowsPerPage,
  page,
  setRowsPerPage,
  setPage,
  selectedEventTypes,
  isLoading,
}) {
  const { total, next, prev, startIndex } = useData(
    page,
    rowsPerPage,
    selectedEventTypes ?? []
  );

  const handleChangePage = (event, newPage) => {
    if (newPage > 0) {
      setPage(next);
    } else {
      setPage(prev);
    }
  };

  // update number of rows without returning to head of table
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      colSpan={4}
      component="div"
      count={total}
      rowsPerPage={rowsPerPage}
      page={Math.floor(startIndex / rowsPerPage)}
      next={next}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={
        isLoading ? DisabledTablePaginationActions : TablePaginationActions
      }
    />
  );
}
