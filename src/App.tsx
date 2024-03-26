import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutLandingPage from "@pages/landing/Layout";
import Home from "@pages/landing/Home";
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutLandingPage />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}