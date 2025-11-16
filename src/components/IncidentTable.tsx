import React from "react";
import type { Incident } from "../types";
import { PriorityIcon } from "./PriorityIcon";
import { formatDateTime } from "../utils/formatters";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

interface Props {
  incidents: Incident[];
}

const COLUMNS: { key: keyof Incident | "icon"; label: string }[] = [
  { key: "icon", label: "" },
  { key: "dateTime", label: "Date & Time" },
  { key: "id", label: "ID" },
  { key: "locationName", label: "Location Name" },
  { key: "name", label: "Incident Name" },
  { key: "description", label: "Description" },
];

export const IncidentTable: React.FC<Props> = ({ incidents }) => {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.grey[800] }}>
            {COLUMNS.map((col) => (
              <TableCell
                key={col.key}
                sx={{
                  color: theme.palette.common.white,
                  fontWeight: "bold",
                  borderBottom: `1px solid ${theme.palette.grey[700]}`,
                }}
              >
                <Typography variant="body1" fontWeight="bold">
                  {col.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {incidents.map((incident) => (
            <TableRow
              key={incident.id}
              sx={{
                backgroundColor: theme.palette.background.paper,
                "&:hover": { backgroundColor: theme.palette.action.hover },
              }}
            >
              {COLUMNS.map((col) => {
                switch (col.key) {
                  case "icon":
                    return (
                      <TableCell key={col.key}>
                        <PriorityIcon priority={incident.priority} />
                      </TableCell>
                    );
                  case "dateTime":
                    return (
                      <TableCell key={col.key}>
                        {formatDateTime(incident.dateTime)}
                      </TableCell>
                    );
                  default:
                    return (
                      <TableCell key={col.key}>
                        {incident[col.key] ?? "-"}
                      </TableCell>
                    );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
