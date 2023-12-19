import { BrowserRouter, Route, Routes } from "react-router-dom"
import CheckoutPage from "./pages/CheckoutPage"
import KitchenPage from "./pages/KitchenPage"
import OrdersPage from "./pages/OrdersPage"
import ProductsPage from "./pages/ProductsPage"
import { OrderProvider } from "./contexts/ordersContext"

function App() {

  return (
    <OrderProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProductsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/kitchen" element={<KitchenPage />} />
          <Route path="/orders" element={<OrdersPage />} />
				</Routes>
			</BrowserRouter>
		</OrderProvider>
  )
}

export default App
