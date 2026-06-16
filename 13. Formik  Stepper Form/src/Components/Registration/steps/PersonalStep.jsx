import { Field, ErrorMessage } from "formik";

const PersonalStep = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1">First Name</label>

        <Field
          name="firstName"
          className="w-full px-3 py-2 border rounded-lg"
        />

        <ErrorMessage
          name="firstName"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Last Name</label>

        <Field name="lastName" className="w-full px-3 py-2 border rounded-lg" />

        <ErrorMessage
          name="lastName"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default PersonalStep;
