import * as Yup from 'yup'

export const Schema=Yup.object({
    name:Yup.string().min(3).max(20).required('Name Field is required'),
    email:Yup.string().email().required('Email field is required'),
    message:Yup.string().required('Message field is required').min(3).max(50,'Max message is 50')
});