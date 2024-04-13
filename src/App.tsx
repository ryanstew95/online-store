import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Checkout } from "./pages/Checkout"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/shoppingCartContext"

function App() {
  return (
    <div style={{
      backgroundImage: "url('/public/bg.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
    <ShoppingCartProvider>
    <Navbar />
<Container className="mb-4">
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/store" element={<Store />} />
    <Route path="/about" element={<About />} />
    <Route path="/Checkout" element={<Checkout />} />
  </Routes>
</Container>
</ShoppingCartProvider>
</div>
  )
}

export default App
