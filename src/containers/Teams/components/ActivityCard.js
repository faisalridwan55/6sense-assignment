import { Box, Row } from "../../../components/Grid";
import { Card, CardBody, CardHeader } from "../../../components/Card";

const ActivityCard = ({ activities, containerWidth }) => {
  const ActivityRow = ({ second }) => {
    return (
      <Row>
        <Box>test</Box>
        <Box>
          <Row>TEST</Row>
          <Row>test</Row>
        </Box>
      </Row>
    );
  };

  return (
    <Card width={containerWidth}>
      <CardHeader>
        <b>Activity</b>
      </CardHeader>
      <CardBody>
        {activities.map((activity) => {
          return <ActivityRow activity={activity} />;
        })}
      </CardBody>
    </Card>
  );
};

export default ActivityCard;
