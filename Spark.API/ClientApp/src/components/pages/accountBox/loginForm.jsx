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


export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    const { switchToSignupT } = useContext(AccountContext);

    const [Email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const history = useHistory();

    async function login() {
        let item = { Email, password }
        console.warn(item)
        let result = await fetch("http://localhost:5555/Account/Login", {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
               
            },
            body: JSON.stringify(item)
        })
        history.push("/mainpage")
      
    
    }
    return (
        <BoxContainer>
            <FormContainer>
                <Input
                    onChange={(e) => SetEmail(e.target.value)}
                    type="email" placeholder="Email" />
                <Input
                    onChange={(e) => SetPassword(e.target.value)}
                    type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton onClick={login} type="submit">Signin</SubmitButton>
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