export interface Incident {
  id: string;
  name: string;
  dateTime: string;
  priority: number;
  locationName: string;
  description?: string;
}
