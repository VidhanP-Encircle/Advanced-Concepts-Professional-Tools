import * as Yup from "yup";

export const validationSchema = [
  Yup.object({
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Last name is required"),
  }),

  Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be of at least 6 characters")
      .required("Password is required"),
  }),

  Yup.object({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
  }),

  Yup.object({}),
];
