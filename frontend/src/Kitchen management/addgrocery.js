import React, { Component } from 'react'
import {Form,Button, FormLabel, FormControl} from 'react-bootstrap';
import styled from "styled-components";
import '../App.css';
import axios from 'axios';

const Wrapper = styled.section`
  padding: 2em;
  background:   #99ffb9; 
  border:7px solid white;
`
const Heading = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
  text-shadow: 3px 3px 7px black;
  font-family: Bradley Hand, cursive;
`



export default class addgrocery extends Component {

  constructor(props) {
    super(props);

  this.onChangeName = this.onChangeName.bind(this);
  this.onChangeQuantity = this.onChangeQuantity.bind(this);
  this.onChangeUnit = this.onChangeUnit.bind(this);
  this.onChangeFrom = this.onChangeFrom.bind(this);
  this.onChangeDatetime = this.onChangeDatetime.bind(this);
  this.onSubmit = this.onSubmit.bind(this);


  this.state = {
    Name: '',
    Quantity: '',
    Unit: '',
    From:'',
    Datetime: new Date(),
  }
}

onChangeName(e){
  this.setState({
    Name: e.target.value
  })
}

onChangeQuantity(e){
  this.setState({
    Quantity: e.target.value
  })
}

onChangeUnit(e){
  this.setState({
    Unit: e.target.value
  })
}

onChangeDatetime(e){
  this.setState({
    Datetime: e.target.value
  })
}
onChangeFrom(e){
  this.setState({
    From: e.target.value
  })
}


onSubmit(e){
  e.preventDefault();

  const grocery = {
    Name: this.state.Name,
    Quantity: this.state.Quantity,
    Unit: this.state.Unit,
    From: this.state.From,
    Datetime: this.state.Datetime,
  }

  console.log(grocery);

  axios.post('http://localhost:5000/api/grocery/add', grocery)
    .then(res => console.log(res.data));

    this.setState({
      Name: '',
      Quantity: '',
      Unit: '',
      From:'',
      Datetime: '',
    })

    window.location = '/';

}

  render() {
   

  return (
    <div className="Tweeter">
      
    <Wrapper>
    <Heading>
      Add Groceries
    </Heading>
  </Wrapper>
        <div className="form-container1">
        
        <form onSubmit={this.onSubmit}>
        <Form.Group controlId="groceryname">
            <Form.Label className="par">Grocery Name</Form.Label>
            <Form.Control type="groceryname" onChange={this.onChangeName} value={this.state.Name} placeholder="Enter grocery name" required/>
        </Form.Group>
        <Form.Group controlId="amount">
            <Form.Label className="par">Quantity</Form.Label>
            <Form.Control input type="number" min ="0" onChange={this.onChangeQuantity} value={this.state.Quantity} placeholder="Enter required quantity" required/>
        </Form.Group>
        <Form.Group controlId="unit">
            <Form.Label className="par">Unit</Form.Label>
            <Form.Control type="dietunit" onChange={this.onChangeUnit} value={this.state.Unit} placeholder="Enter unit" required/>
        </Form.Group>
        <Form.Group controlId="from">
            <Form.Label className="par">From</Form.Label>
            <Form.Control type="dietfrom" onChange={this.onChangeFrom} value={this.state.From} placeholder="Enter where from" required/>
        </Form.Group>
        <Form.Group controlId="datentime">
            <Form.Label className="par">Date & Time</Form.Label>
            <Form.Control type="datentime" onChange={this.onChangeDatetime} value={this.state.Datetime} placeholder="Enter date and time" required/>
        </Form.Group>
        <Button variant="outline-light" id="Wb" type="submit">Add Item</Button>
  
        </form> 
        </div>
    </div>
  );
}

}
