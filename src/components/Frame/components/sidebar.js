import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { Box } from "../../Grid";
import useMyLocation from "../../../hooks/useMyLocation";
import { CampaignIcon, LeadsIcon, ReportIcon, TeamsIcon } from "../../Icons";

const Sidebar = () => {
  const history = useHistory();
  const location = useMyLocation();

  const isActive = (ep) => location === ep;

  const route = (endpoint) => history.push(endpoint);

  const IconProps = (ep) => ({
    whileHover: {
      opacity: "1",
      cursor: "pointer",
    },
    onClick: () => route(`/${ep}`),
    opacity: isActive(ep) ? "1" : "0.3",
  });

  const IconContainer = (props) => (
    <Box
      width="100%"
      height="80px"
      alignItems="center"
      justifyContent="center"
      style={isActive(props.ep) ? { background: "#2995DA" } : {}}
      {...props}
    />
  );

  return (
    <Box width="80px" minWidth="80px" background="#042235">
      <Box>
        <IconContainer>
          {/* Main Logo */}
          <svg
            width="38"
            height="32"
            fill="none"
            viewBox="0 0 38 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M37.9941 16.8349C37.9941 11.1752 33.4062 6.58736 27.7465 6.58736C26.8439 6.58736 25.9454 6.70647 25.074 6.94163C21.319 7.73922 18.3316 10.585 16.0101 13.726C14.5106 15.7549 13.0034 17.6151 10.3857 18.1103C7.96706 18.5681 4.66529 17.1744 4.43731 14.4405C4.35036 13.3957 4.65617 12.1205 5.24374 11.2445C6.19651 9.82315 7.96516 11.1436 9.22234 11.2847C10.1274 11.3859 11.1189 11.4298 11.9972 11.1434C13.7534 10.5712 14.1154 9.16665 13.1141 7.73361C12.1286 6.32286 10.4684 5.48565 8.74732 5.49147C7.7623 5.49491 6.29489 5.86158 5.57367 6.59361C6.14784 5.39589 5.33441 3.79301 4.86787 3.12676C3.9393 1.8003 1.52866 0.647963 0.358923 2.34839C-0.456685 3.5339 0.277229 5.85976 0.979588 6.93826C1.36723 7.53354 1.92478 8.09376 2.08214 8.8086C2.25394 9.58859 1.87359 10.286 1.60369 10.9969C1.32319 11.7356 1.04151 12.4954 0.914864 13.2748C3.05772e-05 18.9023 1.55467 23.672 5.53861 27.1007C6.58583 28.0019 7.78207 28.8047 9.01267 29.4353C10.5137 30.204 12.2384 30.8182 13.891 31.1614C15.5459 31.505 17.3352 31.7475 19.0284 31.7475C26.9007 31.7475 33.6408 27.8263 36.4359 22.265C37.422 20.6903 37.9941 18.8299 37.9941 16.8349Z"
            />
            <path
              fill="white"
              d="M30.5409 4.38658C28.9342 3.51788 27.1483 3.45113 25.3983 3.86542C23.6382 4.28265 21.7885 5.61072 19.9491 5.46669C18.0768 5.31978 17.8019 3.28486 18.6821 1.97671C20.6126 -0.891351 25.216 -0.251402 27.6181 1.45379C28.2256 1.88508 28.7855 2.37983 29.2882 2.92969C29.673 3.35022 30.0335 4.11239 30.5409 4.38658Z"
            />
          </svg>
        </IconContainer>
        <IconContainer ep="campaign">
          <CampaignIcon {...IconProps("campaign")} />
        </IconContainer>
        <IconContainer ep="">
          <TeamsIcon {...IconProps("")} />
        </IconContainer>
        <IconContainer ep="leads">
          <LeadsIcon {...IconProps("leads")} />
        </IconContainer>
        <IconContainer ep="report">
          <ReportIcon {...IconProps("report")} />
        </IconContainer>
      </Box>
      <Box
        height="100%"
        marginBottom="16px"
        alignItems="center"
        justifyContent="flex-end"
      >
        {/* Icon Help  */}
        <motion.svg
          whileHover={IconProps().whileHover}
          width="26"
          height="26"
          fill="none"
          opacity="0.3"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon-help"
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM13 21.125C13.8975 21.125 14.625 20.3975 14.625 19.5C14.625 18.6025 13.8975 17.875 13 17.875C12.1025 17.875 11.375 18.6025 11.375 19.5C11.375 20.3975 12.1025 21.125 13 21.125ZM13 8.125C12.35 8.125 11.8625 8.45 11.5375 8.9375L10.725 10.4L7.9625 8.775L8.775 7.3125C9.5875 5.85 11.2125 4.875 13 4.875C15.7625 4.875 17.875 6.9875 17.875 9.75C17.875 12.025 16.4125 13 15.4375 13.65C14.625 14.1375 14.625 14.3 14.625 14.625V16.25H11.375V14.625C11.375 12.5125 12.675 11.5375 13.65 10.8875C14.4625 10.4 14.625 10.2375 14.625 9.75C14.625 8.775 13.975 8.125 13 8.125Z"
          />
        </motion.svg>
      </Box>
    </Box>
  );
};

export default Sidebar;
