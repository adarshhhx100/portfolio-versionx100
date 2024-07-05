import React from "react";
import Hello from "./components/HomePage";
import Container from 'react-bootstrap/Container';

const App: React.FC = () => {
  return (
    <Container>
      <Hello />
    </Container>
  );
}

export default App;
