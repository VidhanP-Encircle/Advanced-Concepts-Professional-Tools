import { Field, ErrorMessage } from "formik";

const EmailStep = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Email</label>

        <Field
          name="email"
          type="email"
          className="w-full px-3 py-2 border rounded-lg"
        />

        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Password</label>

        <Field
          name="password"
          type="password"
          className="w-full px-3 py-2 border rounded-lg"
        />

        <ErrorMessage
          name="password"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default EmailStep;
