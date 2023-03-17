import Card from "react-bootstrap/Card";

import { Group } from "../../features/groupsSlice";
import { Collection } from "react-bootstrap-icons";

const GroupCard: React.FC<Group> = (props: any) => {
  return (
    <Card>
      <Card.Body>
        <Collection size={85} />
      </Card.Body>
      <Card.Body>
        <Card.Title>{props._id}</Card.Title>
        <Card.Text>Count: {props.count}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GroupCard;
