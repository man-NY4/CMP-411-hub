import ListGroup from "./components/ListGroup";

function App() {
  let items = ["hector", "gustavo", "crow", "juan", "walter"]; 

  return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;