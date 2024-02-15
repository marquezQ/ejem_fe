import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { roles, task, task_in_role } from './mockData/constants';
function App() {
  console.log(roles);
  console.log(task);
  console.log(task_in_role);
  return (
    <div>
    <Navbar bg="light" data-bs-theme="light" >
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Principal</Nav.Link>
            <Nav.Link href="#2">Contactenos</Nav.Link>
            <Nav.Link href="#3">Acerca de</Nav.Link>
            <Nav.Link href="#4">Unete a nosotros</Nav.Link>
            <Nav.Link href="#5">Calificaciones</Nav.Link>
          </Nav> 
      </Navbar>
  </div>
  );
}

export default App;


