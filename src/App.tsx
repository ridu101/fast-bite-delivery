// Root App component - imports and renders all sections
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Content />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
