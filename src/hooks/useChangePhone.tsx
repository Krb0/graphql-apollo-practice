import { useMutation } from "@apollo/client";
import { CHANGE_NUMBER } from "../models/persons/persons.mutations";

const useChangePhone = () => {
  const [changePhone] = useMutation(CHANGE_NUMBER);
  return changePhone;
};

export default useChangePhone;
