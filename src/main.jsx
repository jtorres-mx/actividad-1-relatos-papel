import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CartProvider from "./Context/Context.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider>
   <App />
  </CartProvider>
  </StrictMode>,
)
