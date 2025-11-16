import palette from "./palette";
import typography from "./typography";

const components = {
  MuiTableCell: {
    styleOverrides: {
      head: {
        backgroundColor: palette.background.header,
        color: palette.text.primary,
        fontWeight: typography.fontWeightBold,
        borderBottom: `1px solid ${palette.border.headerBottom}`,
      },
      body: {
        color: palette.text.primary,
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor: palette.background.hover,
        },
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        backgroundColor: palette.background.default,
        "&:hover": {
          backgroundColor: palette.background.hover,
        },
      },
    },
  },
};

export default components;
