import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddCar = () => {
    const initialValues = {
        image: '',
        name: '',
        price: '',
        mileage: '',
        seats: '',
    };

    const validationSchema = Yup.object({
        image: Yup.string().required('Image is required'),
        name: Yup.string().min(5, 'Name must be at least 5 characters').required('Name is required'),
        price: Yup.number().moreThan(0, 'Price must be greater than 0').required('Price is required'),
        mileage: Yup.number().moreThan(0, 'Mileage must be greater than 0').required('Mileage is required'),
        seats: Yup.number().min(1, 'Seats must be greater than 0').max(6, 'Seats must be less than 7').required('Seats is required')
    });

    const addCar = async (values, { resetForm }) => {
        try {
            const response = await axios.post("http://localhost:5000/cars", {
                image: values.image,
                name: values.name,
                price: values.price,
                mileage: values.mileage,
                seats: values.seats
            });
            if (response.status === 201) {
                alert("Car added successfully");
                resetForm();
            } else {
                alert("Error adding car");
            }
        } catch (error) {
            alert("API call failed");
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={addCar}  // Pass the function reference, not calling it
        >
            <Form>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image:</label>
                    <Field type="text" id="image" name="image" className="form-control" />
                    <ErrorMessage name="image" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <Field type="text" id="name" name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <Field type="number" id="price" name="price" className="form-control" />
                    <ErrorMessage name="price" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="mileage" className="form-label">Mileage:</label>
                    <Field type="number" id="mileage" name="mileage" className="form-control" />
                    <ErrorMessage name="mileage" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="seats" className="form-label">Seats:</label>
                    <Field type="number" id="seats" name="seats" className="form-control" />
                    <ErrorMessage name="seats" component="div" className="text-danger" />
                </div>

                <button type="submit" className="btn btn-primary">Add Car</button>
            </Form>
        </Formik>
    );
};

export default AddCar;
