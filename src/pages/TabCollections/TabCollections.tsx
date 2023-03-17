import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListAllItems from "../ListAllItems/ListAllItems";
import ListCollectionItems from "../ListCollectionItems";

function TabCollections() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="listGroups" title="By Group" defaultChecked>
        <ListCollectionItems />
      </Tab>
      <Tab eventKey="allItems" title="All Items">
        <ListAllItems />
      </Tab>
    </Tabs>
  );
}

export default TabCollections;
