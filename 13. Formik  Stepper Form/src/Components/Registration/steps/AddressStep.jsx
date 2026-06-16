import { Field, ErrorMessage } from "formik";

const AddressStep = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Address</label>

        <Field name="address" className="w-full px-3 py-2 border rounded-lg" />

        <ErrorMessage
          name="address"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">City</label>

        <Field name="city" className="w-full px-3 py-2 border rounded-lg" />

        <ErrorMessage
          name="city"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default AddressStep;
