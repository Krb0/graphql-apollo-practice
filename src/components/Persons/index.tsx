import { useEffect, useState } from "react";
import useFindPerson from "../../hooks/useFindPerson";
import PersonForm from "../PersonForm";
const Persons = ({ data }: { data: any }) => {
  const [getPerson, result] = useFindPerson();
  const [person, setPerson] = useState<{
    name: string;
    phone: string | null;
  } | null>(null);

  const showPerson = (name: string) => {
    getPerson({ variables: { name } });
    if (result?.findPersonByName.name === name) {
      setPerson(result.findPersonByName);
    }
  };

  useEffect(() => {
    if (result?.findPersonByName) {
      setPerson(result.findPersonByName);
    }
  }, [result]);

  if (!data) return null;

  if (person) {
    return (
      <div>
        <h2>{person.name}</h2>
        <p>{person.phone}</p>
        <button onClick={() => setPerson(null)}>Close</button>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data?.persons.map((person: any) => (
          <>
            <p
              key={person.id}
              style={{ margin: "0.2rem" }}
              onClick={() => {
                showPerson(person.name);
              }}
            >
              {person.name}
            </p>
          </>
        ))}
      </div>
      <PersonForm />
    </>
  );
};

export default Persons;
