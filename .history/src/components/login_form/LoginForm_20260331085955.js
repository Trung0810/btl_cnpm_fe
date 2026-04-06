import React from "react";

const LoginForm = () => {
  const emailRegex = /^[a-z0-9A-Z_]+@gmail.com$/;
  const schema = yup.object({
    firstName: yup
      .string()
      .required("Please enter your first name!")
      .min(8, "Must be at least 8 characters!")
      .max(16, "Must be at most 16 characters!"),
    lastName: yup
      .string()
      .required("Please enter your last name!")
      .min(5, "Must be at least 5 characters!")
      .max(10, "Must be at most 10 characters!"),
    email: yup
      .string()
      .required("Please enter your email!")
      .matches(emailRegex, "Invalid email"),
    gender: yup.string().required("Please select your gender!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const submit = (values) => {
    console.log(values);
  };

  return (
    <form className="login-form">
      <h2 className="login-form-title">Login Form</h2>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          className="signup-input"
          placeholder="Enter your first name"
          // {...register("firstName", {
          //   required: true,
          //   minLength: 8,
          //   maxLength: 16,
          // })}
          {...register("firstName")}
        />
        {/* {errors.firstName && errors.firstName.type === "required" && (
          <div className="signup-error">Please fill out this field!</div>
        )}
        {errors.firstName && errors.firstName.type === "minLength" && (
          <div className="signup-error">Must be at least 8 characters!</div>
        )}
        {errors.firstName && errors.firstName.type === "maxLength" && (
          <div className="signup-error">Must be at most 16 characters!</div>
        )} */}
        {errors.firstName && (
          <div className="signup-error">{errors.firstName.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          className="signup-input"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
        {errors.lastName && (
          <div className="signup-error">{errors.lastName.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          className="signup-input"
          placeholder="Enter your email address"
          {...register("email")}
        />
        {errors.email && (
          <div className="signup-error">{errors.email.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          id="gender"
          value="male"
          className="signup radio"
          {...register("gender")}
        />
        Male
        <input
          type="radio"
          name="gender"
          id="gender"
          value="female"
          className="signup-radio"
          {...register("gender")}
        />
        Female
        {errors.gender && (
          <div className="signup-error">{errors.gender.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="signup-button"
        style={{ pointerEvents: isValid ? "" : "none" }}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
