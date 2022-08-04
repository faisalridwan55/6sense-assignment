import { useContext, useMemo, useState } from "react";

import TeamsCard from "./components/TeamsCard";
import TeamsMenu from "./components/TeamsMenu";
import TeamsHeader from "./components/TeamsHeader";
import ActivityCard from "./components/ActivityCard";

import { Row } from "../../components/Grid";
import Loading from "../../components/Loading";
import { AppContext } from "../../contexts/AppContext";

const ALL = "All";
const FAVORITES = "Favorites";
const ARCHIVED = "Archived";
export const TABS = [ALL, FAVORITES, ARCHIVED];

const Teams = () => {
  const [searchedTeam, setSearchedTeam] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(ALL);

  const { teams, activities, isLoading } = useContext(AppContext);

  const filteredTeams = useMemo(() => {
    let tempTeams = teams;

    if (selectedCategories === FAVORITES) {
      tempTeams = tempTeams.filter(({ is_favorited }) => !!is_favorited);
    } else if (selectedCategories === ARCHIVED) {
      tempTeams = tempTeams.filter(({ is_archived }) => !!is_archived);
    }

    if (!!searchedTeam) {
      tempTeams = tempTeams.filter(({ name }) =>
        name.toLowerCase().includes(searchedTeam.toLowerCase())
      );
    }

    return tempTeams;
  }, [searchedTeam, teams, selectedCategories]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TeamsHeader />
          <TeamsMenu
            setSearchedTeam={setSearchedTeam}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <Row padding="24px" justifyContent="center" gap="24px">
            <>
              <TeamsCard
                containerWidth="75%"
                teamsData={filteredTeams}
                teamsLength={teams.length}
                selectedCategories={selectedCategories}
              />
              <ActivityCard containerWidth="25%" activities={activities} />
            </>
          </Row>
        </>
      )}
    </>
  );
};

export default Teams;
