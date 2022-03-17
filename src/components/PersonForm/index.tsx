import { useState } from "react";
import useCreatePerson from "../../hooks/useCreatePerson";
import PhoneForm from "./PhoneForm";

const PersonForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const createPerson = useCreatePerson();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createPerson({ variables: { name, phone, street, city } });
    setName("");
    setPhone("");
    setStreet("");
    setCity("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Create a new Person</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Street:
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit" style={{ width: "80px" }}>
          Submit
        </button>
      </form>
      <PhoneForm />
    </div>
  );
};

export default PersonForm;
