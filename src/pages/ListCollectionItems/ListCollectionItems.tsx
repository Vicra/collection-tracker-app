import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";

import { getGroups } from "../../services/groups";
import GroupCard from "./GroupCard";

import { updateGroups } from "../../features/groupsSlice";

const ListCollectionItems: React.FC = () => {
  const groups = useSelector((state: RootState) => state.groups.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(updateGroups((await getGroups()).data));
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <h1>List Collection Items</h1>
        <Row xs={1} sm={2} md={3} lg={4}>
          {groups.map((group) => (
            <GroupCard {...group} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ListCollectionItems;
