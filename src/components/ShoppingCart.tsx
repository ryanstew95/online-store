import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { Link } from "react-router-dom"; 
 import { Button } from "react-bootstrap"

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();


  const handleCheckout = () => {
    closeCart();
  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex align-items-center">
              <CartItem {...item} />
       
            </div>
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
        <Link to="/Checkout">
        <Button onClick={handleCheckout} variant="primary">
          Checkout
        </Button>
      </Link>


      </Offcanvas.Body>
    </Offcanvas>
  );
}
