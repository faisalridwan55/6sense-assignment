import { Box, Row } from "../../../components/Grid";
import { Card, CardBody, CardHeader } from "../../../components/Card";

const ActivityCard = ({ activities, containerWidth }) => {

  const ActivityRow = ({ activity: {action, created_at: createdAt, id, person: {avatar, name}, target} }) => {
    const activityMapper = (name, action, target) => {
      if (action === "increased_quota") {
        return (
          <div>
            {`${name} increased ${target}'s quota`}
          </div>
        )
      } else if (action === "archived_team") {
        return (
          <div>
            {`${name} archived the team ${target}`}
          </div>
        )
      }
      return (
        <div>
          {`${name} added new lead to ${target}`}
        </div>
      )
  }
    
    return (
      <Row width="100%" style={{gap: '8px'}}>
        <Box style={{gap: '4px'}}>
          <Row width="36px">
            <img
                src={avatar}
                alt="Team"
                sizes="36px"
                style={{ width: "36px", borderRadius: '50%' }}
              />
          </Row>
          <Row width="36px" />
        </Box>
        <Box style={{gap: '4px'}}>
          <Row flex={1}>
            {activityMapper(name, action, target)}
          </Row>
          <Row color="#565656" flex={1}>{createdAt}</Row>
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
          return <ActivityRow activity={activity} key={activity.id} />;
        })}
      </CardBody>
    </Card>
  );
};

export default ActivityCard;
