import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { useEffect, useState } from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";

import findFormErrors from "./formValidation";

import { addCollection } from "../../services/collections";
import { getGroups } from "../../services/groups";

import { updateGroups } from "../../features/groupsSlice";

export interface Errors {
  name?: string;
  value?: string;
  year?: string;
  group?: string;
  general?: string;
}

const AddCollectionItem: React.FC = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [disabledSelectGroup, setDisabledSelectGroup] = useState(false);
  const [success, setSuccess] = useState(false);
  const groups = useSelector((state: RootState) => state.groups.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(updateGroups((await getGroups()).data));
    };
    fetchData();
  }, []);

  const [form, setForm] = useState({
    name: "",
    value: 0,
    year: "",
    group: "default",
  });
  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  function cleanUp(form: any) {
    return setForm({
      name: form.name ? form.name.trim() : "",
      value: form.value ? form.value : 0,
      year: form.year ? form.year.trim() : "",
      group: form.group ? form.group.trim() : "",
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const newErrors: Errors = findFormErrors(form, cleanUp);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const response = await addCollection(form);
      console.log(response);
      if (!response.success) {
        setErrors({
          ...errors,
          general: response.details,
        });
      } else {
        setErrors({});
        setSuccess(true);
        setForm({
          name: "",
          value: 0,
          year: "",
          group: "default",
        });
        dispatch(updateGroups((await getGroups()).data));
      }
    }
  }

  function newGroup(e: any) {
    setDisabledSelectGroup(e.target.checked);
    setField("group", "");
  }

  return (
    <>
      <Container>
        <h1>Add Collection Item</h1>
        <Form onSubmit={handleSubmit} id="add-collection-form">
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-3"
              >
                <Form.Control
                  type="string"
                  placeholder="collection item name"
                  onChange={(e) => setField("name", e.target.value)}
                  isInvalid={!!errors.name}
                  value={form.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingValue"
                label="Value $"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="value in USD"
                  onChange={(e) => setField("value", e.target.value)}
                  isInvalid={!!errors.value}
                  value={form.value}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.value}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingYear"
                label="Year"
                className="mb-3"
              >
                <Form.Control
                  type="string"
                  placeholder="year of fabrication"
                  onChange={(e) => setField("year", e.target.value)}
                  isInvalid={!!errors.year}
                  value={form.year}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.year}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              {!disabledSelectGroup && (
                <FloatingLabel controlId="group" label="Group" className="mb-3">
                  <Form.Select
                    aria-label="group"
                    onChange={(e) => setField("group", e.target.value)}
                    isInvalid={!!errors.group}
                  >
                    {groups.map((group) => (
                      <option value={group._id}>{group._id}</option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {errors.group}
                  </Form.Control.Feedback>
                </FloatingLabel>
              )}

              <Form.Check
                onChange={newGroup}
                className="mb-3"
                type="switch"
                id={`default-checkbox`}
                label={`New group`}
              />
              {disabledSelectGroup && (
                <FloatingLabel
                  controlId="floatingGroup"
                  label="New Group"
                  className="mb-3"
                >
                  <Form.Control
                    type="string"
                    placeholder="group name"
                    onChange={(e) => setField("group", e.target.value)}
                    isInvalid={!!errors.group}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.group}
                  </Form.Control.Feedback>
                </FloatingLabel>
              )}
            </Col>
          </Row>
          {errors.general && (
            <Alert key="danger" variant="danger">
              {errors.general}
            </Alert>
          )}
          {success && (
            <Alert key="success" variant="success">
              Item created.
            </Alert>
          )}

          <ButtonToolbar>
            <ButtonGroup className="me-2">
              <Button variant="primary" type="submit" className="button-submit">
                Add Collection Item
              </Button>
            </ButtonGroup>

            <ButtonGroup className="me-2">
              <Button href="/" variant="outline-secondary">
                Back to Item View
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      </Container>
    </>
  );
};

export default AddCollectionItem;
