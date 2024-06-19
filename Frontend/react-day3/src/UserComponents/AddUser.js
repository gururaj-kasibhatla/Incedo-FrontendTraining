import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'; // corrected import statement

export default function AddUser() {
    const initialValues = {
        fname: '',
        lname: '',
        gender: '',
        hobbies: [],
        team: '',
        terms: false  // changed to boolean false to match Yup boolean type
    };

    const validationSchema = Yup.object({
        fname: Yup.string().required("Please enter First Name"),
        gender: Yup.string().required("Please select a gender"),
        hobbies: Yup.array().required("Please select hobbies").min(1, "Select at least one hobby"),
        team: Yup.string().required("Please select a team"),
        terms: Yup.boolean().oneOf([true], "Please agree to terms and conditions")
    });

    const addUser = async (values, { resetForm }) => {
        try {
            const response = await axios.post("http://localhost:5000/users", {
                fname: values.fname,
                lname: values.lname,
                gender: values.gender,
                hobbies: values.hobbies,
                team: values.team,
                terms: values.terms
            });
            if (response.status === 201) {
                alert("User added successfully");
                resetForm(); // Reset the form after successful submission
            } else {
                alert("Error adding user");
            }
        } catch (error) {
            alert("API call failed");
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={addUser}
        >
            <Form>
                <label htmlFor="fname">First Name:</label>
                <Field type="text" id="fname" name="fname" />
                <ErrorMessage name="fname" component="div" className="error" />
                <br />

                <label htmlFor="lname">Last Name:</label>
                <Field type="text" id="lname" name="lname" />
                <ErrorMessage name="lname" component="div" className="error" />
                <br />

                <label>Gender:</label>
                <div>
                    <label>
                        <Field type="radio" id="male" name="gender" value="male" />
                        Male
                    </label>
                    <label>
                        <Field type="radio" id="female" name="gender" value="female" />
                        Female
                    </label>
                </div>
                <ErrorMessage name="gender" component="div" className="error" />
                <br />

                <label>Hobbies:</label>
                <div>
                    <label>
                        <Field type="checkbox" id="hobby1" name="hobbies" value="cricket" />
                        Cricket
                    </label>
                    <label>
                        <Field type="checkbox" id="hobby2" name="hobbies" value="reading" />
                        Reading
                    </label>
                </div>
                <ErrorMessage name="hobbies" component="div" className="error" />
                <br />

                <label htmlFor="team">Team:</label>
                <Field as="select" id="team" name="team">
                    <option value="">Select</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Database">Database</option>
                </Field>
                <ErrorMessage name="team" component="div" className="error" />
                <br />

                <label>
                    <Field type="checkbox" id="terms" name="terms" />
                    I agree to the terms and conditions
                </label>
                <ErrorMessage name="terms" component="div" className="error" />
                <br />

                <button type="submit">Add User</button>
            </Form>
        </Formik>
    );
}
