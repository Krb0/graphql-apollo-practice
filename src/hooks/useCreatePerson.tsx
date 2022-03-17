import { useMutation } from "@apollo/client";
import { CREATE_PERSON } from "../models/persons/persons.mutations";
import { ALL_PERSONS } from "../models/persons/persons.queries";

const useCreatePerson = () => {
  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
  });
  return createPerson;
};

export default useCreatePerson;
