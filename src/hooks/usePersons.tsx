import { useQuery } from "@apollo/client";
import { ALL_PERSONS } from "../models/persons/persons.queries";

const usePersons = () => {
  const { data, loading } = useQuery(ALL_PERSONS);
  return [data, loading];
};

export default usePersons;
