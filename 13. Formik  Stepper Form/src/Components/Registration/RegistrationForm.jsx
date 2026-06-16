import React from "react";
import PersonalStep from "./steps/PersonalStep";
import EmailStep from "./steps/EmailStep";
import AddressStep from "./steps/AddressStep";
import ReviewStep from "./steps/ReviewStep";
import { useState } from "react";
import { Form, Formik } from "formik";
import { validationSchema } from "./registrationValidation";

const steps = [PersonalStep, EmailStep, AddressStep, ReviewStep];

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
  };

  const StepComponent = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = async (validateForm, setTouched) => {
    const errors = await validateForm();

    if (Object.keys(errors).length) {
      setTouched(
        Object.keys(errors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}),
      );
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (valuse) => {
    console.log("Form values: ", valuse);
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema[currentStep]}
      onSubmit={handleSubmit}
    >
      {({ validateForm, setTouched }) => (
        <Form className="max-w-lg mx-auto mt-10 border rounded-xl p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-center">
              Registration Form
            </h1>

            <p className="text-center text-gray-500 mt-2">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>

          <StepComponent />
          <div className="flex justify-between mt-8">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Previous
              </button>
            ) : (
              <div />
            )}

            {!isLastStep ? (
              <button
                type="button"
                onClick={() => handleNext(validateForm, setTouched)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Submit
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
