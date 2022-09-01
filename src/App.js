import "./App.css";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { useSelector } from "react-redux";

function App() {
  const content = useSelector((state) => state.page);
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
        rel="stylesheet"
      />
      <Header />
      {content}
      <Footer />
    </div>
  );
}

export default App;
