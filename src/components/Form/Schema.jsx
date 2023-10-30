import * as Yup from 'yup';

export const Schema=Yup.object({
    firstName:Yup.string().min(3).max(20).required('Name field Must be required'),
    lastName:Yup.string().min(3).max(20).required("lastName is required"),
    phone:Yup.string().min(10).max(13).required("Phone number is required"),
    email:Yup.string().email().required('Email field is required'),
    message:Yup.string().min(2).max(20).required("Message field is required")
});