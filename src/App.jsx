import { BrowserRouter, Route, Routes } from "react-router-dom"
import CheckoutPage from "./pages/CheckoutPage"
import KitchenPage from "./pages/KitchenPage"
import OrdersPage from "./pages/OrdersPage"
import ProductsPage from "./pages/ProductsPage"

function App() {

  return (
    <>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProductsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/kitchen" element={<KitchenPage />} />
          <Route path="/orders" element={<OrdersPage />} />
				</Routes>
			</BrowserRouter>
		</>
  )
}

export default App
