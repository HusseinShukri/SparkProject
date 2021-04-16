import React from 'react';
import Navbar from './Navbar';
import Footer from './pages/Footer/Footer';
import styled from "styled-components";
import { AccountBox } from "./pages/accountBox";

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

function loginapp() {
return (
 
  <AppContainer>
     <Navbar/>
    <AccountBox />
</AppContainer>

);}

export default loginapp