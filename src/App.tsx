// Root App component - imports and renders all sections
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
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
