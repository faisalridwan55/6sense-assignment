import { useContext } from "react";

import TeamsCard from "./components/TeamCard";
import ActivityCard from "./components/ActivityCard";

import { Row } from "../../components/Grid";
import { AppContext } from "../../contexts/AppContext";

const Teams = () => {
  const { teams, activities } = useContext(AppContext);

  console.log(teams);
  console.log(activities);

  return (
    <Row padding="24px" justifyContent="center" gap="24px">
      {teams && activities && (
        <>
          <TeamsCard containerWidth="75%" teamsData={teams} />
          <ActivityCard containerWidth="25%" activities={activities} />
        </>
      )}
    </Row>
  );
};

export default Teams;
