import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import "./Registration.css";
import SignUp from "./assets/SignUp.svg";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values.name);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-right">
              <img src={SignUp} alt="" />
            </div>
            <div className="modal-left">
              <h1 className="modal-title">Register</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="name" className="input-label">
                    Name
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "error" : ""}
                  />
                  {errors.name && touched.name ? (
                    <p className="form-error">
                      <i class="fa-solid fa-circle-exclamation fa-beat fa-lg"></i>
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="input-block">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "error" : ""}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">
                      <i class="fa-solid fa-circle-exclamation fa-beat fa-lg"></i>
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="input-block">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? "error" : ""}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">
                      <i class="fa-solid fa-circle-exclamation fa-beat fa-lg"></i>
                      {errors.password}
                    </p>
                  ) : null}
                </div>

                <div className="input-block">
                  <label htmlFor="confirm_password" className="input-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.confirm_password && touched.confirm_password ? "error" : ""}
                  />

                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="form-error">
                      <i class="fa-solid fa-circle-exclamation fa-beat fa-lg"></i>
                      {errors.confirm_password}
                    </p>
                  ) : null}
                </div>

                <div className="modal-buttons">
                  <button className="input-button" type="submit">
                    Create Account
                  </button>
                </div>
              </form>
              <p className="sign-up">
                Already have an account? <a href="/">Login now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
