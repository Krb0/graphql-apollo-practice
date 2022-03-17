import { useLazyQuery } from "@apollo/client";
import { FIND_PERSON } from "../models/persons/persons.queries";

const useFindPerson = () => {
  const [getPerson, { data: result }] = useLazyQuery(FIND_PERSON);

  return [getPerson, result];
};

export default useFindPerson;
