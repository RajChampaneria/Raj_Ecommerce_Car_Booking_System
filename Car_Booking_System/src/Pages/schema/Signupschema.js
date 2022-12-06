import * as Yup from "yup";

export const Signupschema =Yup.object({
    uname:Yup.string().min(4).max(10).required("Please fill this field"),
    contact:Yup.string().min(10).max(10).required("Please fill this field"),
    password:Yup.string().min(5).max(10).required("Please fill this field"),
    conpass:Yup.string()
    .required()
    .oneOf([Yup.ref("password"),null],"password does not match")



});