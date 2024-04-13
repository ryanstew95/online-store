import { Card, Row, Col } from 'react-bootstrap';
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import "../styles/Main.css";

// Shuffle the storeItems array to get a random order
const shuffledItems = storeItems.sort(() => Math.random() - 0.5);

// Then, select the first three items
const randomItems = shuffledItems.slice(0, 3);

export function Home() {
  return (
    <div>
      <h1 className='header-font'>Home</h1>
      <div style={{ textAlign: 'center' }}>
        <img
          src="logo.png"
          style={{ display: 'block', margin: 'auto' }}
          alt="Logo"
        />
      </div>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Card className="h-100" style={{ margin: "20px 0" }}>
          <Card.Img
            variant="top"
            src="/imgs/everyone.jpg"
            style={{ height: "auto", maxWidth: "100%", objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline">
              <h3>Group photo of local artists</h3>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div style={{ margin: "20px 0" }}>
        <h1 style={{ textAlign: 'center' }}>Handcrafted Harbor</h1>
        <h3 style={{ textAlign: 'center' }}>Our store, Handcrafted Harbor, offers a curated collection of handcrafted treasures ranging from unique jewelry pieces and vintage clothing to eco-friendly home decor items, providing customers with an eclectic mix of artisanal products that celebrate creativity and craftsmanship.</h3>
        <div style={{ margin: "20px 0" }}>
          <h2 style={{ textAlign: 'center' }}>Items you should check out!!</h2>
          <Row md={2} xs={1} lg={3} className="g-3">
            {randomItems.map(item => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
