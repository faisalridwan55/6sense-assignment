import { useEffect, useState } from "react";
import { api } from "../../api";
import Card from "../../components/Card";
import { Row } from "../../components/Grid";
import TeamsCard from "./components/TeamCard";

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

  return (
    <Row margin="16px">
      <TeamsCard containerWidth='70%' teamsData={teams} />
    </Row>
  );
};

export default Teams;
