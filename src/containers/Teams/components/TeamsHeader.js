import { motion } from "framer-motion";

import { Box } from "../../../components/Grid";
import SecondaryHeader from "../../../components/SecondaryHeader";

const TeamsHeader = (props) => {
  return (
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
  );
};

export default TeamsHeader;
