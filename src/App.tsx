import React, { useContext } from "react";
import "./App.css";
import { Container, Segment } from "semantic-ui-react";
import { Top } from "./Section/Top";
import { Content } from "./Section/Content";
import { StoreContext } from "./Store";
import { Disclaimer } from "./Section/Content/Disclaimer";

function App() {
  const { isWeb } = useContext(StoreContext);
  return (
    <Container style={{ marginTop: 16 }}>
      <Segment.Group>
        <Top />
        <Content />
      </Segment.Group>
      {!isWeb ? <Disclaimer /> : null}
    </Container>
  );
}

export default App;
