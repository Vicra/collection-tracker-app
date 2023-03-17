import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
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
        <h1>All Collection Items</h1>
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
