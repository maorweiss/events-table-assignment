import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function PaginationTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Event Type</TableCell>
        <TableCell>Severity</TableCell>
        <TableCell>User</TableCell>
        <TableCell>Date</TableCell>
      </TableRow>
    </TableHead>
  );
}
