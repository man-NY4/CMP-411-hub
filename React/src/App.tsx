// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert"; 
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (<div>
            { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>alert</Alert> }
            <Button color="warning" onClick={() => setAlertVisibility(true)}>button</Button>
          </div>);
  
  
  
  // return (
  //         <div>
  //           <Alert>
  //             hello <span>world</span>
  //           </Alert>
  //         </div>);

  // let items = ["hector", "gustavo", "crow", "juan", "walter"]; 

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  // return <div><ListGroup items={items} heading="names" onSelectItem={handleSelectItem}/></div>;
}

export default App;