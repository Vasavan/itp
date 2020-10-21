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

        <Link to="/addDiet"><Button>ADD DIET PLAN</Button></Link>
        <br/>
        <br/>
        <Link to="/dietTable"><Button>VIEW DIET PLAN</Button></Link>
        <br/>
        <br/>
        <Link to="/dietTable"><Button>DELETE DIET PLAN</Button></Link>
        <br/>
        <br/>
        <Link to="/dietTable"><Button>UPDATE DIET PLAN</Button></Link>
        
        </div>
    );
}

export default Turn;