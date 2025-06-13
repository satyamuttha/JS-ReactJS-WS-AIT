import React, { useState } from "react";
import "./CreateUser.css"; // Or use inline styles if you prefer

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="form-container">
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

        <input type="button" value="createUser" />
      </form>
    </div>
  );
};

export default CreateUser;
