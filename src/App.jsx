
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";


import('./style/reset.css');
import('./style/App.css');
import('./style/Sidebar.css')

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
  
}
