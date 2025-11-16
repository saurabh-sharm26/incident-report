import { useState, useEffect } from "react";
import type { Incident } from "../types";
import { getLocations, getIncidentsByLocationId } from "../api/fakeApi";
import type { ApiLocation, ApiIncident } from "../api/fakeApi";

const mapApiIncidentToIncident = (
  apiIncident: ApiIncident,
  locations: ApiLocation[],
): Incident => {
  const location = locations.find((loc) => loc.id === apiIncident.locationId);
  return {
    id: apiIncident.id.toString(),
    name: apiIncident.name,
    dateTime: apiIncident.datetime,
    priority: apiIncident.priority,
    locationName: location ? location.name : apiIncident.locationId,
    description: apiIncident.description ?? "No description available",
  };
};

export const useIncidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncidents = async () => {
      setLoading(true);
      try {
        const locations: ApiLocation[] = await getLocations();

        const incidentsPerLocationArrays: ApiIncident[][] = await Promise.all(
          locations.map((location) => getIncidentsByLocationId(location.id)),
        );

        // Flatten into a single array
        const allApiIncidents: ApiIncident[] =
          incidentsPerLocationArrays.flat();

        // Map API incidents to internal Incident type
        const mappedIncidents: Incident[] = allApiIncidents.map((apiIncident) =>
          mapApiIncidentToIncident(apiIncident, locations),
        );

        // Remove duplicates by ID
        const uniqueIncidents: Incident[] = Array.from(
          new Map(
            mappedIncidents.map((incident) => [incident.id, incident]),
          ).values(),
        );

        // Sort by priority ascending (1=High), then date descending
        uniqueIncidents.sort((incidentA, incidentB) =>
          incidentA.priority !== incidentB.priority
            ? incidentA.priority - incidentB.priority
            : new Date(incidentB.dateTime).getTime() -
              new Date(incidentA.dateTime).getTime(),
        );

        setIncidents(uniqueIncidents);
      } catch (error) {
        console.error("Failed to fetch incidents", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  return { incidents, loading };
};
