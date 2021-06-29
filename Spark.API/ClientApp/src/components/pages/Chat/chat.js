import React from 'react';
import nav from '../MainPage/Nav'
import './Cards.css';
import CardItem from './CardItem';
import first from '../../../images/c5.jpg'
import Nav from '../MainPage/Nav'
class chat extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }
    componentDidMount(props) {

        fetch('http://localhost:5555/Teacher/getAllTeachers')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items:json,
                    isLoaded: true,
                })
            });
 

    }


    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            
            <div className="chat">
                <Nav />
                <h1 className='header12'>All Avaliable Teachers at the Moment!</h1>
                <div className='cards__container'>

                    <div className='cards__wrapper'>
                    <ul className='cards__items'>
                            {items.listOfUsers.map(listOfUsers => (

                                <CardItem key={parseInt(listOfUsers.id)}

                                    src={first}
                                    text={listOfUsers.userName}
                                    label={listOfUsers.category}
                                    path={`/room/${listOfUsers.userName}`}
                                  />

                            ))}
    
                        </ul>
                    </div>
                </div>
            </div>
        );

    }

}


export default chat;

