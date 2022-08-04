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
            borderRadius: "4px",
            flexDirection: "row",
            background: "#40D2BF",
          }}
          whileHover={{
            scale: 1.1,
            opacity: 0.9,
            cursor: "pointer",
          }}
        >
          <Box>
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Shape"
                fill="white"
                d="M10 0H6V6H0V10H6V16H10V10H16V6H10V0Z"
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
