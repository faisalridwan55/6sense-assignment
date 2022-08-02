import { createContext, useState, useEffect } from "react";

import { api } from "../api";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { teams, activities, current_user },
      } = await api.get("/getData");

      setTeams(teams);
      setActivities(activities);
      setCurrentUser(current_user);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ teams, activities, currentUser, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
