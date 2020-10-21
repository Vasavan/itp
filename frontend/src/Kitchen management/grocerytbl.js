import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Form,Nav,FormControl } from 'react-bootstrap'

import { Link } from 'react-router-dom';
import axios from 'axios';

const Grocery = props => (
    <tr>
      <td>{props.Grocery.Name}</td>
      <td>{props.Grocery.Quantity}</td>
      <td>{props.Grocery.Unit}</td>
      <td>{props.Grocery.From}</td>
      <td>{props.Grocery.Datetime}</td>
      <td>
        <Link to={"/editgrocery/"+props.Grocery._id}>update</Link> | <a href="#" onClick={() => { props.deleteGrocery(props.Grocery._id) }}>delete</a>
      </td>
    </tr>
  )
 
export default class grocerytbl extends Component {
    
    constructor(props) {
        super(props);
    
        this.deleteGrocery = this.deleteGrocery.bind(this)
    
        this.state = {Grocery: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/api/grocery/')
          .then(response => {
            this.setState({ Grocery: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deleteGrocery(id) {
        axios.delete('http://localhost:5000/api/grocery/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            Grocery: this.state.Grocery.filter(el => el._id !== id)
        })
      }
    
      GroceryList() {
        return this.state.Grocery.map(currentGrocery => {
          return <Grocery Grocery={currentGrocery} deleteGrocery={this.deleteGrocery} key={currentGrocery._id}/>;
        })
      }
    
    render() {
          return (
            <div>

              <div>
              
              <Navbar bg="dark" variant="dark" >
              <Navbar.Brand href="#home">Grocery Details</Navbar.Brand>
              <Nav className="mr-auto">
         
              <Button variant="outline-info">Logout</Button>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
              </Navbar>
              <br />
              </div>
          <br />

          <span style={{marginRight: "10px"}}>
          <Link to="/addGrocery"><Button className="Thi">Add Grocery</Button></Link>
          </span>
          <Link to="/"><Button className="Thi">Main</Button></Link>

          <h1 className="vas">DETAILS</h1>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th className="soor">Grocery Name</th>
                <th className="soor">Amount</th>
                <th className="soor">Unit</th>
                <th className="soor">From</th>
                <th className="soor">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              { this.GroceryList() }
            </tbody>
          </table>
          
        </div>
        
        )
    }
}

/* //    <Nav.Link href="#home">Logout</Nav.Link> */