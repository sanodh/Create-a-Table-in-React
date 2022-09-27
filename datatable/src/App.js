import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handlAddFormSubmit = (event) => {
    event.preventDefault();

    setContacts([...contacts, Object.assign({}, formData)]);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a Contact</h2>

      <form onSubmit={handlAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a Name"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter a address"
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phoneNumber"
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
