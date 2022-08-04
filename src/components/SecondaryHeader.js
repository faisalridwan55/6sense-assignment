import { Card } from "./Card";
import { Box, Row } from "./Grid";
import { CampaignIcon, LeadsIcon, ReportIcon, TeamsIcon } from "./Icons";

import usePrintedLocation from "../hooks/usePrintedLocation";

const iconMapper = {
  Teams: <TeamsIcon color="#A4A6A8" />,
  Leads: <LeadsIcon color="#A4A6A8" />,
  Report: <ReportIcon color="#A4A6A8" />,
  Campaign: <CampaignIcon color="#A4A6A8" />,
};

const SecondaryHeader = (porps) => {
  const printedLocation = usePrintedLocation();

  return (
    <>
      <Card noShadow>
        <Row height="80px" justifyContent="space-between" alignItems="center">
          <Box padding="0px 24px">
            <Row gap="12px" alignItems="center">
              <Box>{iconMapper[printedLocation]}</Box>
              <Box fontSize="24px">
                <b>{printedLocation}</b>
              </Box>
            </Row>
          </Box>
          {porps.children}
        </Row>
      </Card>
    </>
  );
};

export default SecondaryHeader;
