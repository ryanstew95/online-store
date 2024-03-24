import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/shoppingCartContext';

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3"> 
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
  <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
  <button onClick={openCart}>
    <img src="/cart-icon.png" alt="Cart" style={{ width: '50px', height: '50px' }} />
  </button>
  <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: '4%', right: '5%'}}>{cartQuantity}</div>
</div>
        )}
    
      </Container>
    </NavbarBs>
  )
}
