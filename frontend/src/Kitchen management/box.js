import React from 'react';
import '../App.css';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import logo from "./vasavan/vaasa.jpg"
import { keyframes } from 'styled-components'


const Button = styled.button`
    background-color: #11998e;
    font-family:Bradley Hand, cursive;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline:0;
    cursor:pointer;
    box-shadow: opx 10px 10px grey;
    animation: mymove 5s infinite;
`


function Turn(props){
    return(
        <div className = "Fb">

        <Card className = 'Wb' style={{ width: '22rem', marginTop:70 , marginLeft:60}}>
        <img src={logo} alt="Logo" height="150" width="345"/>
        <Card.Body>
        <Card.Title className = "vas1">{props.title}</Card.Title>
        <Card.Text className = "vas2">
           {props.text}
        </Card.Text>
        <Button>{props.name}</Button>
        </Card.Body>
        </Card> 
        
        <footer >
        <div style={{marginLeft: "100px"}}>
          <hr style={{ marginBottom: "140px"}}/>
          &copy; 2020 copyright: SABH-PK.com
        </div>
        </footer>
        
        </div>
    );
}

export default Turn;