import { Field, useFormik } from "formik";
import React, { useContext, useState, useEffect } from "react";
import { Marginer } from "../marginer";
import {
    BoldLink,
    BoxContainer,
    FieldContainer,
    FieldError,
    FormContainer,
    FormError,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { AccountContext } from "./accountContext";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from 'react-router-dom'


const validationSchema = yup.object({
    Email: yup.string().required(),
    password: yup.string().required(),
});

export function LoginFormT(props) {
    const { switchToSignup } = useContext(AccountContext);
    const { switchToSignupT } = useContext(AccountContext);
    const [error, setError] = useState(null);
    const history = useHistory();

    const onSubmit = async (values) => {
        const { password, ...data } = values;
        setError(null);
        const response = await axios
            .post("http://localhost:5555/Account/Login", values)
            .catch((err) => {
                if (err && err.response) setError(err.response.data.message);
            });

        if (response) {
            localStorage.setItem('email', values.Email);
            alert("Welcome back in. Authenticating..." + localStorage.getItem('email'));
            history.push("/mainpageteacher");
        }
    };

    const formik = useFormik({
        initialValues: { Email: "", password: "" },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, [])

    if (!didMount) {
        return null;
    }
    return (
        <BoxContainer>
            <FormError>{error ? error : ""}</FormError>
            <FormContainer onSubmit={formik.handleSubmit}>
                <FieldContainer>
                    <Input
                        name="Email"
                        placeholder="Email"
                        value={formik.values.Email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        <FieldError>
                            {formik.touched.Email && formik.errors.Email
                                ? formik.errors.Email
                                : ""}
                        </FieldError>
                    }
                </FieldContainer>
                <FieldContainer>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        <FieldError>
                            {formik.touched.password && formik.errors.password
                                ? formik.errors.password
                                : ""}
                        </FieldError>
                    }
                </FieldContainer>

                <Marginer direction="vertical" margin="1.6em" />

                <SubmitButton type="submit" disabled={!formik.isValid} >Signin</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Don't have an accoun?{" "}
            </MutedLink>
            <MutedLink href="#">
                Signup as a Student{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                    Signup
          </BoldLink>
            </MutedLink>
            <MutedLink href="#">
                Signup as a Teacher{" "}
                <BoldLink href="#" onClick={switchToSignupT}>
                    Signup
          </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}