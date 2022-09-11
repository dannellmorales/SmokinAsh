import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Vid from "../Components/Video/Vid.mp4"

export const Navigation = () => {
  return (
    <div className="Navigation">
      <Navbar className="color-nav" variant="dark">
        <Nav className="me-auto">
          <Navbar.Brand href="#home"><Nav.Link href="/"><h1>Smokin Ash</h1></Nav.Link></Navbar.Brand>
        </Nav>
        <Navbar.Brand className="" href="/stogs/new"><h3 >Add New Cigar</h3></Navbar.Brand>
        <Nav.Link href="/"><h1></h1></Nav.Link>
      </Navbar>
      
    </div>
  );
}
