import DashBoard from './Views/Dashboard'
import { CartProvider } from './Components/Context/CartContext'
import './App.css'

function App() {


  return (
    <CartProvider>
      <DashBoard/>
    </CartProvider>
  )
}

export default App
