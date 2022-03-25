import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg">
          <Container></Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <p>Meu primeiro REACT limpo!</p>
          <Button>Isso é um botao</Button>
        </Container>
      </main>
    </div>
  );
}

export default App;
