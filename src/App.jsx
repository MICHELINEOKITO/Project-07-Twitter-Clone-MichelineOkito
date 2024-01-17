
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import('./style/reset.css');
import('./style/App.css');
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/" element={ <Home />} />
          <Route path="/" element={ <Home />} />
          <Route path="/" element={ <Home />} />
          <Route path="/" element={ <Home />} />
          <Route path="/" element={ <Home />} />
          <Route path="/" element={ <Home />} />
        </Routes>
      </BrowserRouter>
     
    </Layout>
  )
  
}
