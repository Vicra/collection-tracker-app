import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useState, useEffect } from "react";

import ItemCard from "./ItemCard";

import { Item } from "./ItemCard";
import { getCollections } from "../../services/collections";

const ListAllItems: React.FC = () => {
  const [items, setItems] = useState<Array<Item>>([]);

  useEffect(() => {
    const fetchData = async () => {
      setItems((await getCollections()).data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <ButtonToolbar>
          <ButtonGroup>
            <h1>All Collection Items</h1>
          </ButtonGroup>

          <ButtonGroup style={{ padding: 10 }}>
            <Button href="/add" variant="primary">
              Add Collection item
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
        <Row xs={1} sm={2} md={3} lg={4}>
          {items.map((item) => (
            <ItemCard {...item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ListAllItems;
