import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Form,Nav,FormControl } from 'react-bootstrap'

import { Link } from 'react-router-dom';
import axios from 'axios';

const Diet = props => (
    <tr>
      <td>{props.Diet.Name}</td>
      <td>{props.Diet.Quantity}</td>
      <td>{props.Diet.Unit}</td>
      <td>{props.Diet.Remarks}</td>
      <td>{props.Diet.To}</td>
      <td>{props.Diet.Datetime}</td>
      <td>
        <Link to={"/editdiet/"+props.Diet._id}>update</Link> | <a href="#" onClick={() => { props.deleteDiet(props.Diet._id) }}>delete</a>
      </td>
    </tr>
  )
 
export default class diettbl extends Component {
    
    constructor(props) {
        super(props);
    
        this.deleteDiet = this.deleteDiet.bind(this)
    
        this.state = {Diets: []};

       
      }

    
      componentDidMount() {
        axios.get('http://localhost:5000/api/diet/')
          .then(response => {
            this.setState({ Diets: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deleteDiet(id) {
        axios.delete('http://localhost:5000/api/diet/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            Diets: this.state.Diets.filter(el => el._id !== id)
        })
      }

    
      DietList() {
        return this.state.Diets.map(currentDiet => {
          return <Diet Diet={currentDiet} deleteDiet={this.deleteDiet} key={currentDiet._id}/>;
        })
      }
    
    render() {
          return (
            <div>

              <div>
              
              <Navbar bg="dark" variant="dark" >
              <Navbar.Brand href="#home">Diet Details</Navbar.Brand>
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
          <Link to="/addDiet"><Button className="Thi">Add Diet</Button></Link>
          </span>
          <Link to="/"><Button className="Thi">Main</Button></Link>

          <h1 className="vas">DETAILS</h1>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th className="soor">Diet Name</th>
                <th className="soor">Amount</th>
                <th className="soor">Unit</th>
                <th className="soor">To</th>
                <th className="soor">Remarks</th>
                <th className="soor">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              { this.DietList() }
            </tbody>
          </table>
          
        </div>
        
        )
    }
}

/* //    <Nav.Link href="#home">Logout</Nav.Link> */