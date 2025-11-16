import React from "react";
import { useIncidents } from "./hooks/useIncidents";
import { IncidentTable } from "./components/IncidentTable";
import { IncidentList } from "./components/IncidentList";

const App: React.FC = () => {
  const { incidents, loading } = useIncidents();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {windowWidth < 600 ? (
        <IncidentList incidents={incidents} />
      ) : (
        <IncidentTable incidents={incidents} />
      )}
    </div>
  );
};

export default App;
