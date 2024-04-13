import { Row, Col } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem, StoreItemProps } from "../components/StoreItem";
import { useShoppingCart } from "../context/shoppingCartContext";

export function Checkout() {
  const { cartItems } = useShoppingCart();

  // Transform cart items to include details from storeItems
  const cartItemsWithDetails = cartItems
    .map((cartItem) => {
      const storeItem = storeItems.find((item) => item.id === cartItem.id);
      if (storeItem) {
        return {
          ...storeItem,
          quantity: cartItem.quantity,
        };
      }
      return null; // Handle the case when the item is not found
    })
    .filter((item) => item !== null) as StoreItemProps[]; // Filter out null items

  // Render thank you message and cart items
  return (
    <div>
      <h1>Thank You for Shopping with Handcrafted Harbor!</h1>
      <h2>Items in your cart:</h2>
      <div>
        <Row md={2} xs={1} lg={3} className="g-3">
          {cartItemsWithDetails.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} showButtons={false}/>
            </Col>
          ))}
        </Row>
      </div>
      <div>
      <img
  src="paper.png"
  style={{ display: 'block', margin: 'auto', width: '80%', height: 'auto' }}
  alt="paper"
/>

      </div>
   
    </div>
  );
}
