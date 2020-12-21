import React from "react"
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {id: 1, nombre: "Carmen", edad: "20"},
];

class App extends React.Component{
state={
  data: data
}

render(){
  return(
    <>
    <Container>
    <br />
    <Button color = "success">Insertar Nuevo Empleado</Button>
    <br /><br />

    <Table>
      <thead><tr>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Actions</th></tr></thead>
      <tbody>
        {this.state.data.map((elemento)=>(
          <tr>
            <td>{elemento.id}</td>
            <td>{elemento.nombre}</td>
            <td>{elemento.edad}</td> 
            <td>{elemento.id}</td> 
            <td><Button color="primary">Editar</Button></td>{" "}
            <td><Button color="danger">Eliminar</Button></td>
          </tr>
        ))}

      </tbody>
    </Table>

    </Container>
    </>

  )
}

}

export default App;
