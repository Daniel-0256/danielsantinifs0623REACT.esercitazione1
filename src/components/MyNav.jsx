import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid className='m-0'>
        <Navbar.Brand href="#home"><img src="./assets/logo.png" alt="logo" id='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='nav' className="d-flex justify-content-between m-3">

            <div className='d-flex'>
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-light'>TV Shows</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Movies</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Recently Added</Nav.Link>
            <Nav.Link href="#link" className='text-light'>My List</Nav.Link>
            </div>

            <div className='d-flex align-items-center'>
                <input type="text" placeholder="Search and press enter" className='me-3' id='cerca'/>
                <a href="#" id='KIDS' className=''>KIDS</a>
                <a href="#"><i className="fa-solid fa-bell"></i></a>
                <a href="#"><i className="fa-solid fa-user"></i></a>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;