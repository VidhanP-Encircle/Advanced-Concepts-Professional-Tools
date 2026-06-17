import { Field, ErrorMessage, FieldArray } from "formik";

const skillsSet = ["React.js", "Node.js", "Express.js"];

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

      <div>
        <label className="block font-medium mb-1">Skills</label>
        <FieldArray name="skills">
          {({ push, remove, form }) => (
            <div className="space-y-2">
              {skillsSet.map((skill) => (
                <label key={skill} className="flex items-center gap-2">
                  <Field type="checkbox" name="skills" value={skill} />
                  {skill}
                </label>
              ))}

              <ErrorMessage
                name="skills"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          )}
        </FieldArray>
      </div>

      <div>
        <label className="block font-medium mb-2">Gender</label>

        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <Field type="radio" name="gender" value="Male" />
            Male
          </label>

          <label className="flex items-center gap-2">
            <Field type="radio" name="gender" value="Female" />
            Female
          </label>

          <label className="flex items-center gap-2">
            <Field type="radio" name="gender" value="Other" />
            Other
          </label>
        </div>

        <ErrorMessage
          name="gender"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">Date Of Birth</label>
        <Field type="date" name="dob" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block font-medium mb-2">Experience</label>
        <Field
          as="select"
          name="experience"
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">Select Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="1-2 Years">1-2 Years</option>
          <option value="3+ Years">3+ Years</option>
        </Field>

        <ErrorMessage
          name="experience"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default PersonalStep;
