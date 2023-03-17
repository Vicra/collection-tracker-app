import Card from "react-bootstrap/Card";
import { BoxSeamFill } from "react-bootstrap-icons";

export interface Item {
  name: String;
  value: Number;
  year: String;
  group: String;
}

const ItemCard: React.FC<Item> = (props: any) => {
  return (
    <Card>
      <Card.Body>
        <BoxSeamFill size={85} />
      </Card.Body>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Value USD: {props.value}</Card.Text>
        <Card.Text>Year: {props.year}</Card.Text>
        <Card.Text>Group: {props.group}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
