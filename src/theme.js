import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          height: "30px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          paddingLeft: "10px",
          paddingRight: "10px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#919EAB",
          fontSize: "14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: "4px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: "61px",
          alignItems: "baseline",
          alignContent: "flex-end",
          borderRadius: "8px",
          backgroundColor: "#222B36"
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#222B36",
          backgroundImage: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: "#3D4752",
          background: "#222B36",
        },
        body: {
          height: 75,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderBottom: 0,
        },
      },
    },
  },
});

export default darkTheme;
