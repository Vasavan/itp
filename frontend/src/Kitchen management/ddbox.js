import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { Link } from "react-router-dom";


const Button = styled.button`
    margin-top: 50px;
    font-family:Bradley Hand, cursive;
    background-color: #11998e;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    animation: mymove 5s infinite;
    margin-left:150px;
`


function Turn(){
    return(

        <div className = "Fb1">

        <Link to="/addGrocery"><Button>ADD GROCERY PLAN</Button></Link>
        <br/>
        <br/>
        <Link to="/groceryTable"><Button>VIEW GROCERY PLAN</Button></Link>
        <br/>
        <br/>
        <Link to="/groceryTable"><Button>DELETE GROCERY PLAN</Button></Link>
        <br/>
        <br/>
        <Link to="/groceryTable"><Button>UPDATE GROCERY PLAN</Button></Link>
        
        </div>
    );
}

export default Turn;