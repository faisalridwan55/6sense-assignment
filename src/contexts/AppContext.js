import { api } from "../api";

const { createContext, useState, useEffect } = require("react");

export const AppContext = createContext();

const AppProvider = (props) => {
  const [teams, setTeams] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  const [activities, setActivities] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // setLoading(true);
    const fetchData = async () => {
      const {
        data: { teams, activities, current_user },
      } = await api.get("/getData");

      setTeams(teams);
      setActivities(activities);
      setCurrentUser(current_user);
    };

    fetchData();

    // setLoading(false);
  }, []);

  return (
    <AppContext.Provider
      value={{ teams, activities, currentUser }}
      {...props}
    />
  );
};

export default AppProvider;
