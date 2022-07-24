import { useEffect, useState } from "react";
import { api } from "../../api";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [activities, setActivities] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const {
        data: { teams, activities, current_user },
      } = await api.get("/getData");

      setTeams(teams);
      setActivities(activities);
      setCurrentUser(current_user);
    };

    fetchData();

    setLoading(false);
  }, []);

  console.log(teams);
  console.log(activities);
  console.log(currentUser);

  return <div>teams</div>;
};

export default Teams;
