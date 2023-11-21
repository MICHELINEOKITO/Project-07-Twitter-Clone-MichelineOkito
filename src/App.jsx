import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import bibi from"./images/bibi.jpg";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return ( 
    <Layout>
      <Home />
    </Layout>
  );
}
