import React, { useState } from "react";
import "./CreateUser.css"; // Or use inline styles if you prefer
import axios from "axios";
const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:3000/users", formData)
      .then((res) => {
        console.log(res.data);
        setFormData({ name: "", email: "", city: "", gender: "" });
      })
      .catch((error) => {
        alert("Failed to Create User");
        console.log(error);
      });
  };

  return (
    <div className="create-form-container">
      <h2>Signup Form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Gender:</label>
        <div className="gender-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />{" "}
            Other
          </label>
        </div>

        <input type="button" value="createUser" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateUser;
