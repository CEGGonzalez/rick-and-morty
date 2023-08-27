import { useState } from "react";
import validation from "../Validation.js";
import '../Form/Form.modules.css'
const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email ? (
          <p style={{ color: "blue" }}>{errors.email}</p>
        ) : errors.emailVacio ? (
          <p style={{ color: "blue" }}>{errors.emailVacio}</p>
        ) : (
          <p style={{ color: "blue" }}>{errors.characters}</p>
        )}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password ? (
          <p style={{ color: "blue" }}>{errors.password}</p>
        ) : (
          ""
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
