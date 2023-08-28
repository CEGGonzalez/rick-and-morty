import { useState } from "react";
import validation from "../Validation.js";
import style from "./Form.module.css";

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
    <div className={style.FormBox}>
      <form onSubmit={handleSubmit}>
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
