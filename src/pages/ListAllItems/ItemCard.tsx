import Card from "react-bootstrap/Card";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { BoxSeamFill } from "react-bootstrap-icons";

import { deleteCollection } from "../../services/collections";

export interface Item {
  name: String;
  value: Number;
  year: String;
  group: String;
}

const ItemCard: React.FC<Item> = (props: any) => {
  async function deleteCollectionItem() {
    await deleteCollection(props.name);
    window.location.reload();
  }
  return (
    <Card>
      <Card.Body>
        <BoxSeamFill size={85} />
      </Card.Body>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.value && (
            <>
              Value USD: {props.value} <br />
            </>
          )}
          {props.year && (
            <>
              Year: {props.year} <br />
            </>
          )}
          {props.group && (
            <>
              Group: {props.group} <br />
            </>
          )}
          {props.condition && (
            <>
              Condition: {props.condition} <br />
            </>
          )}
          {props.location && <>Location: {props.location}</>}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <ButtonToolbar>
          <ButtonGroup className="me-2">
            <Button href={"/add?name=" + props.name} variant="outline-primary">
              Edit
            </Button>
          </ButtonGroup>

          <ButtonGroup className="me-2">
            <Button onClick={deleteCollectionItem} variant="danger">
              Delete
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
