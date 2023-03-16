import _ from "lodash";
import { Errors } from "./AddCollectionItem";

function findFormErrors(form: any, cleanUp: any) {
  const newErrors: Errors = {};
  cleanUp(form);
  const { name, value, group } = form;

  const requiredBody = {
    name,
    value,
    group,
  };
  _.forIn(requiredBody, function (value, key) {
    if (!form[key]) {
      if (
        key === "name" ||
        key === "value" ||
        key === "year" ||
        key === "group"
      ) {
        newErrors[key] = `This field is required`;
      }
    } else {
      if (typeof value === "string") {
        form[key] = value ? value.trim() : "";
      } else {
        form[key] = value ? value : 0;
      }
    }
  });

  return newErrors;
}

export default findFormErrors;
