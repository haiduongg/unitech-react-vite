import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@features/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </BrowserRouter>
  )
}