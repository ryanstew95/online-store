import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";

export type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  vender: string;
  showButtons?: boolean; 
};

export function StoreItem({
  id,
  name,
  price,
  imgUrl,
  vender,
  showButtons = true, 
}: StoreItemProps): JSX.Element {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <div>
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem' }}>@{vender}</span>
          </div>
        </Card.Title>
        <div className="mt-auto">
          {showButtons && ( 
            <>
              {quantity === 0 ? (
                <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ To Cart</Button>
              ) : (
                <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <div>
                      <span className="fs-3">{quantity}</span> in cart
                    </div>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  </div>
                  <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">Remove</Button>
                </div>
              )}
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
