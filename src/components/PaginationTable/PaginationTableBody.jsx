import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { DateTime } from "luxon";

import { startCase } from "@/utils";

import EmptyTable from "./EmptyTable";
import SeverityCell from "./SeverityCell";
import UserCell from "./UserCell";

export default function PaginationTableBody({
  rows,
  rowsPerPage,
  isLoading = false,
}) {
  const emptyRows = Math.max(0, rowsPerPage - rows.length);

  return (
    <TableBody>
      {rows?.map((row) => (
        <TableRow key={row.time}>
          <TableCell>{startCase(row.eventType)}</TableCell>
          <TableCell>
            <SeverityCell severity={row.severity} />
          </TableCell>
          <TableCell>
            <UserCell user={row.user} />
          </TableCell>
          <TableCell style={{ fontSize: "13px" }}>
            {DateTime.fromISO(row.time).toFormat("yyyy/MM/dd | HH:mm:ss")}
          </TableCell>
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <EmptyTable emptyRows={emptyRows} isLoading={isLoading} />
      )}
    </TableBody>
  );
}
