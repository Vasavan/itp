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


export default class editdiet extends Component {
  constructor(props) {
    super(props);

  this.onChangeName = this.onChangeName.bind(this);
  this.onChangeQuantity = this.onChangeQuantity.bind(this);
  this.onChangeUnit = this.onChangeUnit.bind(this);
  this.onChangeRemarks = this.onChangeRemarks.bind(this);
  this.onChangeTo = this.onChangeTo.bind(this);
  this.onChangeDatetime = this.onChangeDatetime.bind(this);
  this.onSubmit = this.onSubmit.bind(this);


  this.state = {
    Name: '',
    Quantity:'',
    Unit: '',
    Remarks:'',
    To:'',
    Datetime: new Date(),
  }
}

componentDidMount() {
    axios.get('http://localhost:5000/api/diet/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          Name: response.data.Name,
          Quantity: response.data.Quantity,
          Unit: response.data.Unit,
          Remarks: response.data.Remarks,
          To: response.data.To,
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
onChangeRemarks(e){
  this.setState({
    Remarks: e.target.value
  })
}
onChangeTo(e){
  this.setState({
    To: e.target.value
  })
}

onSubmit(e){
  e.preventDefault();

  const diet = {
    Name: this.state.Name,
    Quantity: this.state.Quantity,
    Unit: this.state.Unit,
    To: this.state.To,
    Remarks: this.state.Remarks,
    Datetime: this.state.Datetime
  }

  console.log(diet);

  axios.post('http://localhost:5000/api/diet/update/' + this.props.match.params.id, diet)
    .then(res => console.log(res.data));


  window.location = '/dietTable';

}
  render(){
    
  
    return (
      <div>
      <div className="Tweeter">
      
    <Wrapper>
    <Heading>
      Edit Diet Plan
    </Heading>
  </Wrapper>
        <div className="form-container1">
        
        <form onSubmit={this.onSubmit}>
        <Form.Group controlId="dietname">
            <Form.Label className="par">Diet Name</Form.Label>
            <Form.Control type="dietname" onChange={this.onChangeName} value={this.state.Name} placeholder="Enter diet name" />
        </Form.Group>
        <Form.Group controlId="amount">
            <Form.Label className="par">Quantity</Form.Label>
            <Form.Control type="dietamount" onChange={this.onChangeQuantity} value={this.state.Quantity} placeholder="Enter required quantity" />
        </Form.Group>
        <Form.Group controlId="unit">
            <Form.Label className="par">Unit</Form.Label>
            <Form.Control type="dietunit" onChange={this.onChangeUnit} value={this.state.Unit} placeholder="Enter unit" />
        </Form.Group>
        <Form.Group controlId="remarks">
            <Form.Label className="par">Remarks</Form.Label>
            <Form.Control type="dietplan" onChange={this.onChangeRemarks} value={this.state.Remarks} placeholder="Enter required diet time" />
        </Form.Group>
        <Form.Group controlId="to">
            <Form.Label className="par">To</Form.Label>
            <Form.Control type="dietfor" onChange={this.onChangeTo} value={this.state.To} placeholder="Enter where to" />
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