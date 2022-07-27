import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import TeamsCard from "./components/TeamCard";
import ActivityCard from "./components/ActivityCard";

import { api } from "../../api";
import { Row } from "../../components/Grid";

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
    <Row padding="32px" justifyContent="space-between">
      {teams && activities && currentUser && (
        <Fragment>
          <TeamsCard containerWidth="70%" teamsData={teams} />
          <ActivityCard containerWidth="27%" activities={activities} />
        </Fragment>
      )}
    </Row>
  );
};

export default Teams;
