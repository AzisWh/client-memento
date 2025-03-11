import './App.css';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Login from './pages/Auth/Login';
import TestAuth from './pages/Auth/TestAuth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Register from './pages/Auth/Register';
import Checkout from './pages/Checkout/Checkout';
import OrderHistory from './pages/OrderHistory/OrderHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* test Private */}
        <Route element={<PrivateRoute />}>
          <Route path="/test-auth" element={<TestAuth />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/history" element={<OrderHistory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
