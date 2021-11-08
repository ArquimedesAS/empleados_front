import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import TopMenu from "./components/navbars/navbars";
import { Container } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Container >
        <TopMenu />
        <Login />
      </Container>
      
    </div>
  );
}

export default App;
