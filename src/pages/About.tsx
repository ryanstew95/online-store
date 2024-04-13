import "../styles/Main.css";
import Contact from "../components/contact";

export function About() {
  return (
    <div className="about-container">
      <div className="header-section">
        <h1 className="header-font">About</h1>
      </div>
      <div className="content-section">
        <h1>Welcome to Handcrafted Harbor!</h1>
        <p>
          At Handcrafted Harbor, we are passionate about connecting artisans with discerning customers who appreciate the beauty and uniqueness of handmade goods. Our journey began with a simple idea: to create a platform where talented makers from around the world can showcase their craft and share their stories.
        </p>
        <p>
          We believe that every handmade item has a story to tell—a story of dedication, creativity, and craftsmanship. From intricately designed jewelry pieces to meticulously crafted home decor items, each product in our store reflects the skill and passion of the artisan behind it.
        </p>
        <p>
          Our mission is to support artisans and small businesses while offering our customers a curated selection of high-quality, one-of-a-kind products. Whether you're searching for the perfect gift or looking to add a touch of handmade charm to your home, we invite you to explore Handcrafted Harbor and discover the beauty of handmade treasures.
        </p>
        <p>
          Thank you for joining us on this journey!
        </p>
      </div>
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
}
