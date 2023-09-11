import { Alert, AlertTitle } from "@mui/material";

export default function Error() {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      <strong>Something went wrong!</strong> — please refresh the page.
    </Alert>
  );
}
