import { useFormikContext } from "formik";

const ReviewStep = () => {
  const { values } = useFormikContext();

  return (
    <div className="space-y-3 bg-gray-100 p-4 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Review Information</h3>

      <div>
        <span className="font-medium">First Name:</span> {values.firstName}
      </div>

      <div>
        <span className="font-medium">Last Name:</span> {values.lastName}
      </div>

      <div>
        <span className="font-medium">Email:</span> {values.email}
      </div>

      <div>
        <span className="font-medium">Address:</span> {values.address}
      </div>

      <div>
        <span className="font-medium">City:</span> {values.city}
      </div>
    </div>
  );
};

export default ReviewStep;
