import { motion } from "framer-motion";

import { TABS } from "..";
import { Card } from "../../../components/Card";
import { Box, Row } from "../../../components/Grid";

const TeamsMenu = ({
  setSearchedTeam,
  selectedCategories,
  setSelectedCategories,
}) => {
  const Tab = (props) => (
    <Box
      as={motion.div}
      height="40px"
      padding="0 16px"
      justifyContent="center"
      onClick={() => setSelectedCategories(props.children)}
      color={props.children === selectedCategories ? "#0083E3" : ""}
      borderBottom={
        props.children === selectedCategories ? "3px solid #0083E3" : ""
      }
      whileHover={{
        cursor: "pointer",
        color: "#0083E3",
      }}
    >
      <b>{props.children}</b>
    </Box>
  );

  return (
    <Card
      row
      height="40px"
      padding="0px 24px"
      alignItems="center"
      justifyContent="space-between"
      style={{
        boxShadow: "rgb(0 0 0 / 5%) 0px 5px 5px",
      }}
    >
      <Box>
        <Row>
          {TABS.map((category) => (
            <Tab key={category}>{category}</Tab>
          ))}
        </Row>
      </Box>
      <Box>
        <Row gap="8px">
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#999999"
              id="icon-search"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7415 10.3275L15.707 14.293L14.293 15.707L10.3275 11.7415C9.2525 12.529 7.9315 13 6.5 13C2.916 13 0 10.084 0 6.5C0 2.916 2.916 0 6.5 0C10.084 0 13 2.916 13 6.5C13 7.932 12.529 9.2525 11.7415 10.3275ZM6.5 1C3.4675 1 1 3.4675 1 6.5C1 9.5325 3.4675 12 6.5 12C9.5325 12 12 9.5325 12 6.5C12 3.4675 9.5325 1 6.5 1Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search team name ..."
            onChange={(e) => setSearchedTeam(e.target.value)}
            style={{
              border: "none",
              height: "20px",
            }}
          />
        </Row>
      </Box>
    </Card>
  );
};

export default TeamsMenu;
