import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function AddFormik() {
  var tempData = {
    name: 'temp',
    price: 0
  };

  var validationInfo = Yup.object({
    price: Yup.number().required("Please fill price").min(1, "Price should be above 0"),
    name:Yup.string().required("Please enter a name")
  });

  return (
    <>
      <Formik initialValues={tempData} validationSchema={validationInfo} >
        <Form>
          Name:
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
          <br />
          Price:
          <Field type="number" id="price" name="price" />
          <ErrorMessage name="price" />
          <br />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
}
