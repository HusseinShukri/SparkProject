import React, { useContext, useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useHistory } from 'react-router-dom'

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const [firstName, SetFirst] = useState("")
    const [lastName, SetLast] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const history = useHistory();

    async function signups() {

        let item = { firstName, lastName, email,password }
        console.warn(item)
        let result = await fetch("http://localhost:5555/Account/RegisterStudent", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        history.push("/mainpage")
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input value={firstName}
                    onChange={(e) => SetFirst(e.target.value)}
                    type="text" placeholder="First Name" />
                <Input value={lastName}
                    onChange={(e) => SetLast(e.target.value)}
                    type="text" placeholder="Last Name" />
                <Input value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                    type="email" placeholder="Email" />
                <Input value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                    type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton onClick={signups} type="submit">SignUp</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
                    Signin
        </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}