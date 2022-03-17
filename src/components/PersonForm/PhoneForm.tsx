import React, { useState } from "react";
import useChangePhone from "../../hooks/useChangePhone";

const PhoneForm = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const changeNumber = useChangePhone();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phone && name) {
      changeNumber({ variables: { name, phone } });
    }
  };
  return (
    <>
      <h2>Change Phone</h2>
      <form
        onSubmit={(e) => submitHandler(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter the new phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PhoneForm;
