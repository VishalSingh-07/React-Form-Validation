// import React from "react";
// import { useFormik } from "formik";
// import { signInSchema } from "./schemas";

// const SignUp = () => {
//   const initialValues = {
//     email: "",
//     password: "",
//   };

// const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
//   initialValues,
//   validationSchema: signInSchema,
//   validateOnChange: true,
//   validateOnBlur: false,
//   //// By disabling validation onChange and onBlur formik will validate on submit.
//   onSubmit: (values, action) => {
//     console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
//     //// to get rid of all the values after submitting the form
//     action.resetForm();
//   },
// });

//   console.log(errors);

//   return (
//     <>
//       {/* <GlobalStyle /> */}
//       {/* <Wrapper> */}
//       <div className="container">
//         <div className="modal">
//           <div className="modal-container">
//             <div className="modal-left">
//               <h1 className="modal-title">Welcome!</h1>
//               <p className="modal-desc">To the thapa technical website for programmers.</p>
//               <form onSubmit={handleSubmit}>
//                 <div className="input-block">
//                   <label htmlFor="email" className="input-label">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     autoComplete="off"
//                     name="email"
//                     id="email"
//                     placeholder="Email"
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.email && touched.email ? (
//                     <p className="form-error">{errors.email}</p>
//                   ) : null}
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="password" className="input-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     autoComplete="off"
//                     name="password"
//                     id="password"
//                     placeholder="Password"
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.password && touched.password ? (
//                     <p className="form-error">{errors.password}</p>
//                   ) : null}
//                 </div>
//                 <div className="modal-buttons">
//                   <a href="#" className="">
//                     Want to register using Gmail?
//                   </a>
//                   <button className="input-button" type="submit">
//                     Sign In
//                   </button>
//                 </div>
//               </form>
//               <p className="sign-up">
//                 Already have an account? <a href="#">Sign In now</a>
//               </p>
//             </div>
//             <div className="modal-right">
//               <img
//                 src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
//                 alt="Image"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SignUp;

import React from "react";
import { useFormik } from "formik";
import { signInSchema } from "./schemas";
import "./Registration.css";
import LogIn from "./assets/LogIn.svg";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signInSchema,
    validateOnChange: true,
    validateOnBlur: false,
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
              <img src={LogIn} alt="" />
            </div>
            <div className="modal-left">
              <h1 className="modal-title">Log In</h1>
              <form onSubmit={handleSubmit}>
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
                <div className="modal-buttons">
                  <button className="input-button" type="submit">
                    Log In
                  </button>
                </div>
              </form>
              <p className="sign-up">
                Not have an account? <a href="/">Create new Account </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
