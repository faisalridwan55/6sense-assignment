import { useContext } from "react";
import { motion } from "framer-motion";

import TeamsCard from "./components/TeamCard";
import ActivityCard from "./components/ActivityCard";

import { Box, Row } from "../../components/Grid";
import { AppContext } from "../../contexts/AppContext";
import Loading from "../../components/Loading";
import SecondaryHeader from "../../components/SecondaryHeader";

const Teams = () => {
  const { teams, activities, isLoading } = useContext(AppContext);

  console.log(teams);
  console.log(activities);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SecondaryHeader>
            <Box padding="0px 24px">
              <motion.button
                style={{
                  gap: "16px",
                  border: "none",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "row",
                  background: "#40D2BF",
                  borderRadius: "4px",
                }}
                whileHover={{
                  cursor: "pointer",
                  opacity: 0.9,
                  scale: 1.1,
                }}
              >
                <Box>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Shape"
                      d="M10 0H6V6H0V10H6V16H10V10H16V6H10V0Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Box color="white">
                  <b>CREATE NEW TEAM</b>
                </Box>
              </motion.button>
            </Box>
          </SecondaryHeader>
          <Row padding="24px" justifyContent="center" gap="24px">
            <>
              <TeamsCard containerWidth="75%" teamsData={teams} />
              <ActivityCard containerWidth="25%" activities={activities} />
            </>
          </Row>
        </>
      )}
    </>
  );
};

export default Teams;
