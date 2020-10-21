import React, { Component } from 'react'
import {Form,Button, FormLabel, FormControl} from 'react-bootstrap';
import styled from "styled-components";
import '../App.css';
import axios from 'axios';

const Wrapper = styled.section`
  padding: 2em;
  background:   #99ffb9; 
  border:5px solid white;
`
const Heading = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
  text-shadow: 5px 5px 5px black;
  font-family: Bradley Hand, cursive;
`


export default class editgrocery extends Component {
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
    Quantity:'',
    Unit: '',
    From:'',
    Datetime: new Date(),
  }
}

componentDidMount() {
    axios.get('http://localhost:5000/api/grocery/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          Name: response.data.Name,
          Quantity: response.data.Quantity,
          Unit: response.data.Unit,
          From: response.data.From,
          Datetime: response.data.Datetime,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

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
    Datetime: this.state.Datetime
  }

  console.log(grocery);

  axios.post('http://localhost:5000/api/grocery/update/' + this.props.match.params.id, grocery)
    .then(res => console.log(res.data));


  window.location = '/groceryTable';

}
  render(){
    
  
    return (
      <div>
      <div className="Tweeter">
      
    <Wrapper>
    <Heading>
      Edit Grocery Plan
    </Heading>
  </Wrapper>
        <div className="form-container1">
        
        <form onSubmit={this.onSubmit}>
        <Form.Group controlId="groceyname">
            <Form.Label className="par">Grocery Name</Form.Label>
            <Form.Control type="groceryname" onChange={this.onChangeName} value={this.state.Name} placeholder="Enter diet name" />
        </Form.Group>
        <Form.Group controlId="amount">
            <Form.Label className="par">Quantity</Form.Label>
            <Form.Control type="groceryamount" onChange={this.onChangeQuantity} value={this.state.Quantity} placeholder="Enter required quantity" />
        </Form.Group>
        <Form.Group controlId="unit">
            <Form.Label className="par">Unit</Form.Label>
            <Form.Control type="groceryunit" onChange={this.onChangeUnit} value={this.state.Unit} placeholder="Enter unit" />
        </Form.Group>
        <Form.Group controlId="from">
            <Form.Label className="par">From</Form.Label>
            <Form.Control type="groceryfrom" onChange={this.onChangeFrom} value={this.state.From} placeholder="Enter where from" />
        </Form.Group>
        <Form.Group controlId="datentime">
            <Form.Label className="par">Date & Time</Form.Label>
            <Form.Control type="datentime" onChange={this.onChangeDatetime} value={this.state.Datetime} placeholder="Enter date and time" />
        </Form.Group>
        <Button variant="outline-light" id="Wb" type="submit">Add Item</Button>
  
        </form> 
        </div>
      </div>
        
      </div>
    )
}
}