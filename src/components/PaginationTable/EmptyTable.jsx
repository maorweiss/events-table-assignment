import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Skeleton } from "@mui/material";

export default function EmptyTable({ emptyRows, isLoading }) {
  return Array(emptyRows)
    .fill(null)
    .map((_, rowIndex) => (
      <TableRow key={rowIndex}>
        {Array(4)
          .fill(null)
          .map((width, cellIndex) => (
            <TableCell key={cellIndex}>
              {isLoading && <Skeleton animation="wave" variant="text" />}
            </TableCell>
          ))}
      </TableRow>
    ));
}
