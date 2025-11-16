import React from "react";
import type { Incident } from "../types";
import { PriorityIcon } from "./PriorityIcon";
import { formatDateTime, priorityMap } from "../utils/formatters";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

interface Props {
  incidents: Incident[];
}

export const IncidentList: React.FC<Props> = ({ incidents }) => {
  const theme = useTheme();

  return (
    <Paper sx={{ backgroundColor: theme.palette.background.default }}>
      <List>
        {incidents.map((incident) => (
          <ListItem
            key={incident.id}
            sx={{
              backgroundColor: theme.palette.background.paper,
              "&:hover": { backgroundColor: theme.palette.action.hover },
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "transparent" }}>
                <PriorityIcon priority={incident.priority} />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography
                  sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
                >
                  {incident.name}
                </Typography>
              }
              secondary={
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  {formatDateTime(incident.dateTime)} —{" "}
                  {priorityMap[incident.priority]} — {incident.locationName} —{" "}
                  {incident.description ?? "No description available"}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
