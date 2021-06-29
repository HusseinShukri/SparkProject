import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home1';
import login from './components/signpage';
import main from './components/mainpage';
import maint from './components/mainpageteacher';
import About from './components/pages/MainPage/About1'
import Prices from './components/pages/MainPage/Prices1'
import Services from './components/pages/MainPage/Services1'
import Pol from './components/pages/MainPageT/Polices1'
import Abou from './components/pages/MainPageT/About1'
import signin from './components/pages/loginPage/Form'
import chat from './components/pages/Chat/chat'
import Room from "./components/pages/Room/Room";
function App() {
    return (
        <Router>
            <Switch>
                <Route path='/mainpage' exact component={main} />
                <Route path='/mainpageteacher' exact component={maint} />
                <Route path='/About' exact component={About} />
                <Route path='/Prices' exact component={Prices} />
                <Route path='/Services' exact component={Services} />
                <Route path='/Aboutt' exact component={Abou} />
                <Route path='/Polices' exact component={Pol} />
                <Route path='/' exact component={Home} />
                <Route path='/signpage' exact component={login} />
                <Route path='/signin' exact component={signin} />
                <Route path='/chat' exact component={chat} />
                <Route path="/room/:roomID" component={Room} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
