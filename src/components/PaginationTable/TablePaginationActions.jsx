import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function TablePaginationActions({
  count,
  disabled,
  page,
  rowsPerPage,
  onPageChange,
}) {
  const theme = useTheme();

  const handleBackButtonClick = (event) => {
    onPageChange(event, -1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0 || disabled}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.floor(count / rowsPerPage) - 1 || disabled}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
}
