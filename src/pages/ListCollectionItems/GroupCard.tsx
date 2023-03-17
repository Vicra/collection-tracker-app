import Card from "react-bootstrap/Card";

import { Group } from "../../features/groupsSlice";
import { Collection } from "react-bootstrap-icons";

import "./GroupCard.css";

const GroupCard: React.FC<Group> = (props: any) => {
  function navigate() {}
  return (
    <div onClick={navigate} className="groupCard">
      <Card>
        <Card.Body>
          <Collection size={85} />
        </Card.Body>
        <Card.Body>
          <Card.Title>{props._id}</Card.Title>
          <Card.Text>Count: {props.count}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GroupCard;
