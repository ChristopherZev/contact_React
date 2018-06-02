import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
const App = () => {
  return (
    <div>
      <p>React here! Hey</p>

      <Button variant="raised" color="primary">
        Hello World, this is mui
      </Button>


    </div>

  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
