import "./App.css";
import About from "./pages/About";
import Coach from "./pages/Coach";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
// import Method from "./pages/Method";
import Nav from "./pages/Nav";
import Service from "./pages/Service";
import Testo from "./pages/Testo";
import Trans from "./pages/Trans";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Home />
        <About />
        <Trans />
        <Coach />
        <Testo />
        <Service />
        <Footer />
      </div>
    </>
  );
}

export default App;
