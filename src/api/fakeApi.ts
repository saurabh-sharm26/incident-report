// src/api/fakeApi.ts
export interface ApiLocation {
  name: string;
  id: string;
}

export interface ApiIncident {
  id: number;
  name: string;
  description?: string; // New field
  priority: number;
  datetime: string;
  locationId: string;
}

// Locations
const locationIds: ApiLocation[] = [
  { name: "Airport", id: "airport" },
  { name: "T1", id: "airport/t1" },
  { name: "Taxi Zone", id: "airport/taxi_zone" },
  { name: "Carpark", id: "airport/carpark" },
  { name: "T1 Lobby", id: "airport/t1/lobby" },
  { name: "T2", id: "airport/t2" },
  { name: "T2 Lobby", id: "airport/t2/lobby" },
];

// Incidents
const incidents: ApiIncident[] = [
  {
    id: 1,
    name: "Liquid Spill",
    description: "Water spilled near gate entrance",
    priority: 3,
    datetime: "2018-01-21T22:54:12.000Z",
    locationId: "airport/t1/lobby",
  },
  {
    id: 2,
    name: "Lost Property",
    description: "Wallet lost by passenger",
    priority: 3,
    datetime: "2018-01-23T18:25:43.511Z",
    locationId: "airport/t1/lobby",
  },
  {
    id: 3,
    name: "Unattended Baggage",
    description: "Suspicious baggage found",
    priority: 1,
    datetime: "2018-01-22T07:13:00.000Z",
    locationId: "airport/t1",
  },
  {
    id: 4,
    name: "Theft",
    description: "Laptop stolen from lounge",
    priority: 2,
    datetime: "2018-01-22T01:04:24.000Z",
    locationId: "airport/t2",
  },
  {
    id: 5,
    name: "Fire",
    description: "Small fire near baggage claim",
    priority: 1,
    datetime: "2018-01-22T11:25:18.000Z",
    locationId: "airport/t2",
  },
];

// Lookup by locationId
const incidentsLookup: Record<string, ApiIncident[]> = {
  airport: incidents,
  "airport/t1": [incidents[0], incidents[1], incidents[2]],
  "airport/t1/lobby": [incidents[0], incidents[1]],
  "airport/t2": [incidents[3], incidents[4]],
  "airport/t2/lobby": [],
};

// Fake API response helper
const fakeResponse = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 100));

// Exported API functions
export const getLocations = (): Promise<ApiLocation[]> =>
  fakeResponse(locationIds);

export const getIncidentsByLocationId = (
  locationId: string,
): Promise<ApiIncident[]> => fakeResponse(incidentsLookup[locationId] || []);
