import First from "./First";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Second from "./Second";


function App() {

  const [component, setComponenet,] = useState(<First />)


  function setMenu(menu: any) {
    console.log("In methord");

    switch (menu) {
      case 'First': {
        setComponenet(<First />);
        break;
      }
      case 'Second': {
        setComponenet(<Second/>);
        break;
      }
      // case 'language': {
      //   setComponenet(<Language />);
      //   console.log("case intro");
      //   break;
      // }
    }
  }
  
  return (
    <div>
        <button type="button" className="btn btn-info" onClick={() => {
                    console.log("Hello");
                    setMenu('Second')
                  }}>Click Here to Search Your City Weather</button> 

      {component}
    </div>  
  );
  }
 
export default App;