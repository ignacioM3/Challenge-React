import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filter.jsx'
import { CartProvider } from './context/cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </FiltersProvider>,
)
